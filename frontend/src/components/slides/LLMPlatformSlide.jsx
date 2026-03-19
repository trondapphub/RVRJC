import { motion } from 'framer-motion';
import { MessageSquare, Brain, Database, Bot, Wrench, AppWindow, Play, Layers, ExternalLink, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const buildItems = [
  { icon: Brain, title: 'LLM Models', desc: 'Train & fine-tune language models using 12M+ dataset pipeline', color: '#3B82F6' },
  { icon: Database, title: 'Datasets', desc: 'Build structured Q&A, domain-specific & multilingual datasets', color: '#10B981' },
  { icon: Bot, title: 'Agents', desc: 'Create intelligent AI agents for any task or domain', color: '#8B5CF6' },
  { icon: Wrench, title: 'Tools', desc: 'Build custom AI tools and utilities', color: '#F97316' },
  { icon: AppWindow, title: 'Apps', desc: 'Full applications powered by your own AI models', color: '#EC4899' },
  { icon: Layers, title: 'Templates', desc: 'Reusable, monetizable prompt & workflow templates', color: '#06B6D4' },
  { icon: Play, title: 'Spaces', desc: 'Interactive demo environments to showcase your work', color: '#EAB308' }
];

const LLMPlatformSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="llm-platform-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">LLM Platform</div>
              <div className="text-xs text-blue-400">llm.foundryailabs.io</div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Indian Language AI Platform</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Students don't just use AI — they build LLM Models, Datasets, Agents, Tools, Apps, Templates & Spaces
          </p>
        </motion.div>

        {/* What Students Can Build - Hub Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {buildItems.slice(0, 4).map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-all border border-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                    <Icon className="h-4 w-4" style={{ color: item.color }} />
                  </div>
                  <h4 className="font-semibold text-sm" style={{ color: item.color }}>{item.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {buildItems.slice(4).map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-all border border-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                    <Icon className="h-4 w-4" style={{ color: item.color }} />
                  </div>
                  <h4 className="font-semibold text-sm" style={{ color: item.color }}>{item.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Student Benefit + Monetization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-4 mb-4 border border-blue-500/30 bg-blue-500/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <IndianRupee className="h-5 w-5 text-blue-500" />
            <span className="font-semibold">Student Benefits & Monetization</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <div className="text-blue-400 font-medium">Build & Sell</div>
              <div className="text-muted-foreground">Monetize templates & models on Hub</div>
            </div>
            <div className="p-2 rounded-lg bg-green-500/10">
              <div className="text-green-400 font-medium">Real AI Skills</div>
              <div className="text-muted-foreground">Tokenization, embeddings, training</div>
            </div>
            <div className="p-2 rounded-lg bg-purple-500/10">
              <div className="text-purple-400 font-medium">GitHub Portfolio</div>
              <div className="text-muted-foreground">Models, datasets & agents showcase</div>
            </div>
            <div className="p-2 rounded-lg bg-orange-500/10">
              <div className="text-orange-400 font-medium">Industry Ready</div>
              <div className="text-muted-foreground">1-2 yrs equivalent experience</div>
            </div>
          </div>
        </motion.div>

        {/* Stats + CTA */}
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 text-xs text-muted-foreground"
          >
            <span className="text-blue-400 font-medium">12M+ Training Entries</span>
            <span>|</span>
            <span className="text-blue-400 font-medium">49+ Hub Repos</span>
            <span>|</span>
            <span className="text-blue-400 font-medium">12 Languages</span>
            <span>|</span>
            <span className="text-blue-400 font-medium">&lt;200ms Latency</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <a href="https://llm.foundryailabs.io" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full px-6 bg-blue-600 hover:bg-blue-500 text-sm">
                Try LLM Platform <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LLMPlatformSlide;
