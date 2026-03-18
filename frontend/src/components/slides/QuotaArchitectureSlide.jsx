import { motion } from 'framer-motion';
import { Database, Server, Bell, Shield, ArrowRight, Cpu, Cloud } from 'lucide-react';

const platforms = [
  { name: 'LLM Platform', color: '#3B82F6' },
  { name: 'Agent OS', color: '#8B5CF6' },
  { name: 'Voice Agents', color: '#10B981' },
  { name: 'Content Studio', color: '#EC4899' },
  { name: 'CodeFoundry', color: '#F97316' },
  { name: 'K-12 Academy', color: '#06B6D4' }
];

const features = [
  { icon: Server, title: 'Central API Gateway', desc: 'Single auth & rate limiting' },
  { icon: Database, title: 'Real-time Tracking', desc: 'Redis + MongoDB storage' },
  { icon: Bell, title: 'Smart Alerts', desc: '50%, 80%, 100% thresholds' },
  { icon: Shield, title: 'Fair Access', desc: 'Per-student enforcement' }
];

const QuotaArchitectureSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-16"
      data-testid="quota-architecture-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Cpu className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium">Technical Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Quota System Architecture</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Centralized usage tracking & enforcement across all platforms
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-6"
        >
          {/* Central Service */}
          <div className="flex flex-col items-center mb-6">
            <div className="glass rounded-xl p-4 border-2 border-purple-500/50 bg-purple-500/10 mb-4">
              <div className="flex items-center gap-3">
                <Cloud className="h-8 w-8 text-purple-500" />
                <div>
                  <div className="font-bold text-lg">Central Quota Service</div>
                  <div className="text-xs text-muted-foreground">quota.foundryailabs.io</div>
                </div>
              </div>
            </div>
            
            {/* Service Components */}
            <div className="flex gap-4 mb-4">
              <div className="glass rounded-lg px-3 py-2 text-xs text-center">
                <Database className="h-4 w-4 mx-auto mb-1 text-blue-500" />
                Redis<br/><span className="text-muted-foreground">Real-time</span>
              </div>
              <div className="glass rounded-lg px-3 py-2 text-xs text-center">
                <Database className="h-4 w-4 mx-auto mb-1 text-green-500" />
                MongoDB<br/><span className="text-muted-foreground">History</span>
              </div>
              <div className="glass rounded-lg px-3 py-2 text-xs text-center">
                <Bell className="h-4 w-4 mx-auto mb-1 text-yellow-500" />
                Alerts<br/><span className="text-muted-foreground">Email/SMS</span>
              </div>
              <div className="glass rounded-lg px-3 py-2 text-xs text-center">
                <Shield className="h-4 w-4 mx-auto mb-1 text-red-500" />
                Auth<br/><span className="text-muted-foreground">JWT</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <div className="h-8 w-px bg-gradient-to-b from-purple-500 to-transparent" />
            </div>
          </div>

          {/* Platform Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="glass rounded-lg p-3 text-center border border-border/50 hover:border-opacity-100 transition-all"
                style={{ borderColor: `${platform.color}40` }}
              >
                <div 
                  className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.name.charAt(0)}
                </div>
                <div className="text-xs font-medium truncate">{platform.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features & Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-5"
          >
            <h3 className="font-semibold mb-4">Key Components</h3>
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-2">
                    <Icon className="h-4 w-4 text-purple-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">{feature.title}</div>
                      <div className="text-xs text-muted-foreground">{feature.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Request Flow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-5"
          >
            <h3 className="font-semibold mb-4">Request Flow</h3>
            <div className="space-y-2">
              {[
                { step: '1', text: 'Student makes API request', color: 'blue' },
                { step: '2', text: 'Quota service checks limits', color: 'purple' },
                { step: '3', text: 'If allowed → Process request', color: 'green' },
                { step: '4', text: 'Deduct usage from quota', color: 'orange' },
                { step: '5', text: 'Alert if threshold reached', color: 'red' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white bg-${item.color}-500`}
                    style={{ backgroundColor: item.color === 'blue' ? '#3B82F6' : item.color === 'purple' ? '#8B5CF6' : item.color === 'green' ? '#10B981' : item.color === 'orange' ? '#F97316' : '#EF4444' }}
                  >
                    {item.step}
                  </div>
                  <span className="text-sm">{item.text}</span>
                  {index < 4 && <ArrowRight className="h-3 w-3 text-muted-foreground ml-auto" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 glass rounded-xl p-4"
        >
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Implementation: 8 weeks</span>
            <div className="flex gap-4">
              <span className="text-muted-foreground">Week 1-2: Core Service</span>
              <span className="text-muted-foreground">Week 3-4: Integration</span>
              <span className="text-muted-foreground">Week 5-6: Alerts</span>
              <span className="text-muted-foreground">Week 7-8: Dashboard</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuotaArchitectureSlide;
