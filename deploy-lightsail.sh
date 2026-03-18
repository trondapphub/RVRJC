#!/bin/bash
# RVRJC AI CoE - AWS Lightsail Deployment Script
# Server IP: 13.58.245.137
# Repo: https://github.com/trondapphub/RVRJC

echo "=========================================="
echo "RVRJC AI CoE Deployment - AWS Lightsail"
echo "=========================================="

# Step 1: Update system
echo "[1/8] Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Step 2: Install Node.js 18.x
echo "[2/8] Installing Node.js 18.x..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Step 3: Install Python and pip
echo "[3/8] Installing Python and pip..."
sudo apt install -y python3 python3-pip python3-venv

# Step 4: Install MongoDB
echo "[4/8] Installing MongoDB..."
sudo apt install -y gnupg curl
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod

# Step 5: Install Nginx
echo "[5/8] Installing Nginx..."
sudo apt install -y nginx

# Step 6: Clone repository
echo "[6/8] Cloning repository..."
cd /home/ubuntu
git clone https://github.com/trondapphub/RVRJC.git
cd RVRJC

# Step 7: Setup Backend
echo "[7/8] Setting up Backend..."
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Create .env file for backend
cat > .env << 'EOF'
MONGO_URL="mongodb://localhost:27017"
DB_NAME="rvrjc_db"
CORS_ORIGINS="*"
EOF

# Install PM2 for process management
sudo npm install -g pm2

# Create PM2 ecosystem file
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'rvrjc-backend',
    script: 'venv/bin/uvicorn',
    args: 'server:app --host 0.0.0.0 --port 8001',
    cwd: '/home/ubuntu/RVRJC/backend',
    env: {
      MONGO_URL: 'mongodb://localhost:27017',
      DB_NAME: 'rvrjc_db',
      CORS_ORIGINS: '*'
    }
  }]
}
EOF

# Start backend with PM2
pm2 start ecosystem.config.js
pm2 save

# Step 8: Setup Frontend
echo "[8/8] Building Frontend..."
cd ../frontend

# Update .env for production
cat > .env << 'EOF'
REACT_APP_BACKEND_URL=http://13.58.245.137
EOF

npm install
npm run build

# Copy build to nginx directory
sudo rm -rf /var/www/html/*
sudo cp -r build/* /var/www/html/

# Configure Nginx
sudo tee /etc/nginx/sites-available/rvrjc << 'EOF'
server {
    listen 80;
    server_name 13.58.245.137;
    
    root /var/www/html;
    index index.html;

    # Frontend - React SPA
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Backend API proxy
    location /api {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable site
sudo ln -sf /etc/nginx/sites-available/rvrjc /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

# Setup PM2 to start on boot
pm2 startup systemd -u ubuntu --hp /home/ubuntu
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu

echo "=========================================="
echo "Deployment Complete!"
echo "=========================================="
echo ""
echo "Your app is now live at: http://13.58.245.137"
echo "Dashboard: http://13.58.245.137/"
echo "Presentation: http://13.58.245.137/presentation"
echo ""
echo "Useful commands:"
echo "  pm2 status          - Check backend status"
echo "  pm2 logs            - View backend logs"
echo "  pm2 restart all     - Restart backend"
echo "  sudo systemctl status nginx - Check nginx status"
echo "=========================================="
