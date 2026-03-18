import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Presentation, ExternalLink, Users, Rocket, Globe, Calendar, 
  Brain, Code, BookOpen, Mic, Terminal, GraduationCap,
  ArrowRight, Moon, Sun, ChevronRight, TrendingUp, IndianRupee
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';

const platformIcons = {
  llm: Brain,
  agentOS: Terminal,
  voice: Mic,
  studio: BookOpen,
  codefoundry: Code,
  academy: GraduationCap
};

const platforms = [
  { id: 'llm', name: 'LLM Platform', url: 'llm.foundryailabs.io', color: '#3B82F6', desc: '12 Indian Languages' },
  { id: 'agentOS', name: 'Agent OS', url: 'foundryailabs.io', color: '#8B5CF6', desc: '14+ AI Agents' },
  { id: 'voice', name: 'Voice Agents', url: 'saketh.ai', color: '#10B981', desc: '28+ Languages' },
  { id: 'studio', name: 'Content Studio', url: 'studio.saketh.ai', color: '#EC4899', desc: 'AI Content Tools' },
  { id: 'codefoundry', name: 'CodeFoundry', url: 'codefoundry.sh', color: '#F97316', desc: 'Build AI Startups' },
  { id: 'academy', name: 'K-12 Academy', url: 'sakethacademy.com', color: '#06B6D4', desc: '108 Courses' }
];

const metrics = [
  { label: 'Students', value: '7,000', icon: Users, color: '#3B82F6' },
  { label: 'AI Projects', value: '300+', icon: Rocket, color: '#F97316' },
  { label: 'Languages', value: '12', icon: Globe, color: '#10B981' },
  { label: 'Days', value: '60', icon: Calendar, color: '#8B5CF6' }
];

const comparisonData = [
  { name: 'ChatGPT', cost: 19800, color: '#10B981' },
  { name: 'Claude', cost: 19800, color: '#8B5CF6' },
  { name: 'Copilot', cost: 9600, color: '#3B82F6' },
  { name: 'FoundryAI', cost: 7500, color: '#F97316' }
];

const adoptionData = [
  { week: 'W1', students: 500 },
  { week: 'W2', students: 1500 },
  { week: 'W3', students: 3000 },
  { week: 'W4', students: 4500 },
  { week: 'W5', students: 5500 },
  { week: 'W6', students: 6200 },
  { week: 'W7', students: 6800 },
  { week: 'W8', students: 7000 }
];

const featureDistribution = [
  { name: 'AI Tutor', value: 30, color: '#3B82F6' },
  { name: 'CodeFoundry', value: 25, color: '#F97316' },
  { name: 'Homework Helper', value: 20, color: '#10B981' },
  { name: 'LLM Platform', value: 15, color: '#8B5CF6' },
  { name: 'Voice Agents', value: 10, color: '#EC4899' }
];

const DashboardPage = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background" data-testid="dashboard-page">
      {/* Background */}
      <div className="fixed inset-0 grid-pattern opacity-30" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                RV
              </div>
              <span className="text-xs text-muted-foreground">×</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                F
              </div>
            </div>
            <span className="font-semibold hidden sm:block">RVRJC AI CoE</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="rounded-full"
              data-testid="dashboard-theme-toggle"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <a href="https://llm.foundryailabs.io" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-full gap-2" data-testid="try-demo-header">
                <ExternalLink className="h-4 w-4" />
                Try Demo
              </Button>
            </a>
            <Link to="/presentation">
              <Button className="rounded-full gap-2 bg-gradient-to-r from-blue-600 to-orange-500" data-testid="presentation-link">
                <Presentation className="h-4 w-4" />
                Presentation
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">AI Center of Excellence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transforming RVRJC with FoundryAI Labs' unified AI ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/presentation">
              <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-blue-500" data-testid="start-presentation-btn">
                Start Presentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://llm.foundryailabs.io" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full px-8 glass" data-testid="live-demo-dashboard">
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.section>

        {/* Metrics Cards */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index} 
                className="glass rounded-xl p-6 text-center hover:bg-white/5 transition-all metric-card"
                data-testid={`metric-${metric.label.toLowerCase()}`}
              >
                <div 
                  className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${metric.color}20` }}
                >
                  <Icon className="h-6 w-6" style={{ color: metric.color }} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            );
          })}
        </motion.section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Student Adoption Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 glass rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Student Adoption (60 Days)
              </h3>
            </div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={adoptionData}>
                  <defs>
                    <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="week" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="students" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorStudents)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Feature Usage */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="font-semibold mb-4">Feature Usage</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={featureDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {featureDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {featureDistribution.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cost Comparison */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <IndianRupee className="h-5 w-5 text-green-500" />
              <h3 className="font-semibold">Cost Comparison (Annual/Student)</h3>
            </div>
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} layout="vertical">
                  <XAxis type="number" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                  <YAxis dataKey="name" type="category" width={70} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                  <Tooltip 
                    formatter={(value) => [`₹${value.toLocaleString()}`, 'Cost']}
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="cost" radius={[0, 4, 4, 0]}>
                    {comparisonData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Platforms Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 glass rounded-xl p-6"
          >
            <h3 className="font-semibold mb-4">6 Platforms, 1 Ecosystem</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {platforms.map((platform) => {
                const Icon = platformIcons[platform.id];
                return (
                  <a
                    key={platform.id}
                    href={`https://${platform.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    data-testid={`platform-card-${platform.id}`}
                  >
                    <div className="glass rounded-lg p-4 hover:bg-white/5 transition-all border border-border hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${platform.color}20` }}
                        >
                          <Icon className="h-4 w-4" style={{ color: platform.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{platform.name}</div>
                          <div className="text-xs text-muted-foreground truncate">{platform.desc}</div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform AI Education at RVRJC?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Partner with FoundryAI Labs to establish India's leading AI Center of Excellence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://llm.foundryailabs.io" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-orange-500" data-testid="cta-try-demo">
                Try Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="mailto:partnerships@foundryailabs.io">
              <Button size="lg" variant="outline" className="rounded-full px-8" data-testid="cta-contact">
                Contact Us
              </Button>
            </a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-sm text-muted-foreground">
          <p>© 2026 FoundryAI Labs × RVRJC College of Engineering</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
