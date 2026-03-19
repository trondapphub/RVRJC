import { motion } from 'framer-motion';
import { Gauge, Shield, Bell, TrendingUp, Coins, Zap } from 'lucide-react';

const tiers = [
  { name: 'Basic', price: '₹9,999', creditsYear: '90,000', creditsMonth: '7,500', color: '#3B82F6' },
  { name: 'Pro', price: '₹14,999', creditsYear: '180,000', creditsMonth: '15,000', color: '#8B5CF6' },
  { name: 'Power', price: '₹21,999', creditsYear: '400,000', creditsMonth: '33,000', color: '#F97316' }
];

const creditCosts = [
  { platform: 'LLM Platform', unit: '10 tokens', credits: 1, color: '#3B82F6' },
  { platform: 'Agent OS', unit: '1 execution', credits: 1, color: '#8B5CF6' },
  { platform: 'Voice Agents', unit: '1 second', credits: 1, color: '#10B981' },
  { platform: 'Content Studio', unit: '1 image', credits: 10, color: '#EC4899' },
  { platform: 'K-12 Academy', unit: '1 session', credits: 1, color: '#06B6D4' }
];

const alerts = [
  { level: '50%', action: 'Info notification', color: 'text-blue-400' },
  { level: '80%', action: 'Upgrade prompt', color: 'text-yellow-400' },
  { level: '100%', action: 'Soft block + upgrade', color: 'text-orange-400' }
];

const QuotaSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-16"
      data-testid="quota-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Coins className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">Universal Credits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Credit-Based Usage</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One credit wallet for all platforms. Use anywhere, track everywhere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tier Credits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6 border border-border">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Credits Per Tier
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {tiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="glass rounded-xl p-4 border border-border/50 text-center"
                  >
                    <div className="font-bold text-lg" style={{ color: tier.color }}>{tier.name}</div>
                    <div className="text-xs text-muted-foreground mb-2">{tier.price}/year</div>
                    <div className="text-2xl font-bold" style={{ color: tier.color }}>{tier.creditsMonth}</div>
                    <div className="text-xs text-muted-foreground">credits/month</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Credit Costs */}
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-3">Credit Cost Per Platform</h4>
                <div className="grid grid-cols-5 gap-2">
                  {creditCosts.map((item, index) => (
                    <div key={index} className="text-center p-2 rounded-lg" style={{ backgroundColor: `${item.color}10` }}>
                      <div className="text-xs font-medium" style={{ color: item.color }}>{item.platform}</div>
                      <div className="text-lg font-bold mt-1">{item.credits}</div>
                      <div className="text-xs text-muted-foreground">credit = {item.unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Alerts & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-6 border border-border">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5 text-yellow-500" />
                Alert Thresholds
              </h3>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <span className={`font-bold ${alert.color}`}>{alert.level}</span>
                    <span className="text-xs text-muted-foreground">{alert.action}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-green-500/30 bg-green-500/5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                Benefits
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-green-500" />
                  Flexible usage across platforms
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-green-500" />
                  Predictable costs for institution
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-green-500" />
                  Easy upgrade path
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-green-500" />
                  Real-time usage dashboard
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Note about CodeFoundry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 glass rounded-xl p-4 border border-orange-500/30"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <span className="text-orange-500 font-bold">CF</span>
            </div>
            <div>
              <span className="font-medium">CodeFoundry:</span>
              <span className="text-muted-foreground text-sm ml-2">$15/build (separate from credits) - Students pay per build for full-stack AI app generation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuotaSlide;
