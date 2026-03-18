import { motion } from 'framer-motion';
import { Terminal, Activity, Gauge, DollarSign, Zap, Shield, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Activity, title: "Real-time Dashboard", desc: "Monitor all agents with live status" },
  { icon: Zap, title: "14+ AI Agents", desc: "One-click creation & marketplace" },
  { icon: Gauge, title: "Execution Tracking", desc: "Token usage & history monitoring" },
  { icon: DollarSign, title: "Budget Controls", desc: "Daily/monthly limits with alerts" },
  { icon: Terminal, title: "Custom Workflows", desc: "Build and orchestrate agent flows" },
  { icon: Shield, title: "Multi-LLM Support", desc: "Configure different LLMs per agent" }
];

const stats = [
  { value: "14+", label: "AI Agents" },
  { value: "24/7", label: "Uptime" },
  { value: "Real-time", label: "Monitoring" },
  { value: "Multi-LLM", label: "Support" }
];

const AgentOSSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-16"
      data-testid="agent-os-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Terminal className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Agent OS</div>
              <div className="text-xs text-purple-400">foundryailabs.io</div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">AI Agent Command Center</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage, orchestrate & monitor your entire AI agent fleet from one dashboard
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-500">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a href="https://foundryailabs.io" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 bg-purple-600 hover:bg-purple-500">
              Explore Agent OS <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AgentOSSlide;
