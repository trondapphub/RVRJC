import { motion } from 'framer-motion';
import { MessageSquare, Globe, Database, Cpu, Code, Shield, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Globe, title: "12 Indian Languages", desc: "Hindi, Bengali, Telugu, Tamil, Urdu + 7 more" },
  { icon: Database, title: "AI Hub", desc: "49+ repositories for models & datasets" },
  { icon: Cpu, title: "Synth Engine", desc: "Automated multilingual data generation" },
  { icon: Code, title: "Training Pipeline", desc: "LoRA fine-tuning on any GPU" },
  { icon: MessageSquare, title: "Chat Interface", desc: "Voice & text in 12 languages" },
  { icon: Shield, title: "Data Sovereignty", desc: "100% open-source, on-premise ready" }
];

const stats = [
  { value: "12M+", label: "Training Entries" },
  { value: "49+", label: "Hub Repositories" },
  { value: "12", label: "Languages" },
  { value: "<200ms", label: "Latency" }
];

const LLMPlatformSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-16"
      data-testid="llm-platform-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">LLM Platform</div>
              <div className="text-xs text-blue-400">llm.foundryailabs.io</div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Indian Language AI Platform</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open-source platform for training, deploying & managing Indian language AI models
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
              <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
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
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-blue-500" />
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
          <a href="https://llm.foundryailabs.io" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 bg-blue-600 hover:bg-blue-500">
              Try LLM Platform <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LLMPlatformSlide;
