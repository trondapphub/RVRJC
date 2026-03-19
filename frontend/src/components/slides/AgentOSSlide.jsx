import { motion } from 'framer-motion';
import { Terminal, Bot, Blocks, Workflow, Wrench, Store, IndianRupee, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const buildItems = [
  {
    icon: Bot,
    title: 'Build Agents',
    desc: 'Create AI agents for any task — chatbots, assistants, automation',
    color: '#8B5CF6'
  },
  {
    icon: Blocks,
    title: 'Create Templates',
    desc: 'Build reusable prompt & workflow templates for any use case',
    color: '#3B82F6'
  },
  {
    icon: Workflow,
    title: 'Design Workflows',
    desc: 'Orchestrate multi-agent flows and complex automations',
    color: '#10B981'
  },
  {
    icon: Wrench,
    title: 'Build Tools',
    desc: 'Custom tools that agents can use to perform real actions',
    color: '#F97316'
  },
  {
    icon: Store,
    title: 'Sell on Marketplace',
    desc: 'List agents, templates & tools — earn from every sale',
    color: '#EC4899'
  }
];

const AgentOSSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="agent-os-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Terminal className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Agent OS</div>
              <div className="text-xs text-purple-400">foundryailabs.io</div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">AI Agent Command Center</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Students build agents, templates, workflows & tools — then sell them on the marketplace and monetize
          </p>
        </motion.div>

        {/* 5 Build Items */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-5">
          {buildItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-all border border-border"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                    <Icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                </div>
                <div className="text-center mb-2">
                  <h4 className="font-semibold text-sm" style={{ color: item.color }}>{item.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground text-center">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Marketplace Monetization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass rounded-xl p-4 mb-4 border border-purple-500/30 bg-purple-500/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <IndianRupee className="h-5 w-5 text-purple-500" />
            <span className="font-semibold">Marketplace Monetization</span>
          </div>
          <div className="flex items-center justify-around flex-wrap gap-4 text-center">
            <div>
              <div className="text-sm font-medium text-purple-400">Build</div>
              <div className="text-xs text-muted-foreground">Agents, tools, templates</div>
            </div>
            <div className="text-purple-500">→</div>
            <div>
              <div className="text-sm font-medium text-purple-400">List</div>
              <div className="text-xs text-muted-foreground">Publish on Agent OS marketplace</div>
            </div>
            <div className="text-purple-500">→</div>
            <div>
              <div className="text-sm font-medium text-purple-400">Earn</div>
              <div className="text-xs text-muted-foreground">Revenue from every sale/usage</div>
            </div>
            <div className="text-purple-500">→</div>
            <div>
              <div className="text-sm font-medium text-green-400">Self-Pay Platform</div>
              <div className="text-xs text-muted-foreground">Earn enough to cover fees</div>
            </div>
          </div>
        </motion.div>

        {/* Student Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-4 mb-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span className="font-semibold text-sm">Student Benefits</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <div className="text-purple-400 font-medium">14+ Agent Types</div>
              <div className="text-muted-foreground">Build for any industry</div>
            </div>
            <div className="p-2 rounded-lg bg-blue-500/10">
              <div className="text-blue-400 font-medium">Real Revenue</div>
              <div className="text-muted-foreground">Sell agents & templates</div>
            </div>
            <div className="p-2 rounded-lg bg-green-500/10">
              <div className="text-green-400 font-medium">Portfolio Projects</div>
              <div className="text-muted-foreground">Deployed, working agents</div>
            </div>
            <div className="p-2 rounded-lg bg-orange-500/10">
              <div className="text-orange-400 font-medium">Startup Skills</div>
              <div className="text-muted-foreground">Product building experience</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
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
