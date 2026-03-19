import { motion } from 'framer-motion';
import { Code, Rocket, Shield, RefreshCw, Cloud, Bot, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const topFeatures = [
  { 
    icon: Rocket, 
    emoji: '🚀',
    title: 'Full-Stack App Generation', 
    desc: 'Idea → Working App',
    details: ['Frontend (React/UI)', 'Backend (APIs)', 'Database schema'],
    example: '"Build food delivery app" → Full app',
    benefit: 'Build in minutes, not weeks',
    color: '#F97316'
  },
  { 
    icon: RefreshCw, 
    emoji: '🔁',
    title: 'Self-Fixing Code Engine', 
    desc: 'Auto Debug & Retry',
    details: ['Detects errors auto', 'Fixes code & retries', 'Iterates until success'],
    example: 'Code fails → AI fixes it',
    benefit: 'No frustration, real skills',
    color: '#10B981'
  },
  { 
    icon: Cloud, 
    emoji: '☁️',
    title: 'One-Click Deployment', 
    desc: 'AWS/GCP/Azure Ready',
    details: ['Deploy to cloud instantly', 'No manual setup', 'Live URL generated'],
    example: 'Click → App is live',
    benefit: 'Portfolio with live apps',
    color: '#3B82F6'
  },
  { 
    icon: Bot, 
    emoji: '🤖',
    title: 'AI Co-Pilot', 
    desc: 'Development Assistant',
    details: ['Code improvements', 'Optimizations', 'Security fixes'],
    example: 'Writes production code',
    benefit: 'Learn best practices',
    color: '#8B5CF6'
  },
  { 
    icon: Shield, 
    emoji: '🧪',
    title: 'Built-in CI/CD', 
    desc: 'Testing & Quality Gates',
    details: ['Auto unit tests', 'Linting & security', 'CI/CD pipelines'],
    example: 'Enterprise-ready apps',
    benefit: 'Industry DevOps skills',
    color: '#EC4899'
  }
];

const CodeFoundrySlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="codefoundry-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
              <Code className="h-5 w-5 text-orange-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">CodeFoundry.sh</div>
              <div className="text-xs text-orange-400">codefoundry.sh</div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">AI-Powered Development Platform</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Full-stack developer + DevOps engineer + AI builder — all in one
          </p>
        </motion.div>

        {/* Pricing Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="glass rounded-xl p-3 mb-4 border border-orange-500/30 bg-orange-500/5 text-center"
        >
          <span className="text-2xl font-bold text-orange-500">$15</span>
          <span className="text-muted-foreground"> per build</span>
          <span className="text-xs text-muted-foreground ml-2">• 20K+ lines of production code • Paid separately by students</span>
        </motion.div>

        {/* Top 5 Features */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
          {topFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-all border border-border"
              >
                <div className="text-center mb-2">
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <div className="text-center mb-2">
                  <h4 className="font-semibold text-sm" style={{ color: feature.color }}>{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
                <div className="space-y-1 mb-2">
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: feature.color }} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                <div 
                  className="text-xs p-2 rounded-lg text-center font-medium"
                  style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                >
                  {feature.benefit}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Student Benefits + Monetization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-4 mb-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span className="font-semibold text-sm">Student Benefits & Monetization</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-2 rounded-lg bg-orange-500/10">
              <div className="text-orange-400 font-medium">Build Real Products</div>
              <div className="text-muted-foreground">AI SaaS, chatbot platforms</div>
            </div>
            <div className="p-2 rounded-lg bg-green-500/10">
              <div className="text-green-400 font-medium">Launch Startups</div>
              <div className="text-muted-foreground">$15 per build, ship fast</div>
            </div>
            <div className="p-2 rounded-lg bg-blue-500/10">
              <div className="text-blue-400 font-medium">Freelance Income</div>
              <div className="text-muted-foreground">Build apps for clients</div>
            </div>
            <div className="p-2 rounded-lg bg-purple-500/10">
              <div className="text-purple-400 font-medium">Portfolio of Live Apps</div>
              <div className="text-muted-foreground">Deployed with real URLs</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a href="https://codefoundry.sh" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 bg-orange-600 hover:bg-orange-500">
              Try CodeFoundry <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CodeFoundrySlide;
