import { motion } from 'framer-motion';
import { Mic, Globe, Phone, Zap, MessageCircle, IndianRupee, ExternalLink, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const threeSteps = [
  {
    step: '01',
    icon: Globe,
    title: 'Enter Your Website',
    desc: 'Paste your URL and AI crawls all business info. Or choose from 30+ industry templates.',
    color: '#3B82F6'
  },
  {
    step: '02',
    icon: Phone,
    title: 'Connect Phone Number',
    desc: 'Purchase a number with one click or bring your own. Configure routing instantly.',
    color: '#8B5CF6'
  },
  {
    step: '03',
    icon: Zap,
    title: 'Go Live',
    desc: 'Deploy your agent instantly. Monitor calls, review transcripts, optimize in real-time.',
    color: '#10B981'
  }
];

const keyFeatures = [
  { title: '30+ Templates', desc: 'Healthcare, Real Estate, Restaurant, Legal, E-commerce & more', color: '#3B82F6' },
  { title: 'Discord Support', desc: 'Community group for FAQs, integration help — self-serving mode', color: '#8B5CF6' },
  { title: 'Inbound & Outbound', desc: 'AI receptionists for any industry/domain — voice & chat agents', color: '#10B981' },
  { title: '28+ Languages', desc: 'Build multilingual agents serving customers worldwide', color: '#F97316' }
];

const VoiceAgentsSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="voice-agents-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Mic className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Saketh.AI</div>
              <div className="text-xs text-green-400">saketh.ai</div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Build AI Voice & Chat Agents in 3 Simple Steps</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            No code needed. 30+ templates. Deploy for any industry. Monetize through AI receptionists.
          </p>
        </motion.div>

        {/* 3 Simple Steps */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          {threeSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="glass rounded-xl p-5 border border-border relative"
              >
                <div className="text-4xl font-bold mb-3" style={{ color: `${step.color}30` }}>{step.step}</div>
                <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center" style={{ backgroundColor: `${step.color}20` }}>
                  <Icon className="h-5 w-5" style={{ color: step.color }} />
                </div>
                <h4 className="font-semibold mb-1" style={{ color: step.color }}>{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
                {index < 2 && (
                  <div className="absolute top-1/2 -right-3 text-muted-foreground hidden md:block">→</div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="glass rounded-xl p-3 border border-border"
            >
              <h4 className="font-semibold text-sm mb-1" style={{ color: feature.color }}>{feature.title}</h4>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Monetization + Self-Pay Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="glass rounded-xl p-4 mb-4 border border-green-500/30 bg-green-500/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <IndianRupee className="h-5 w-5 text-green-500" />
            <span className="font-semibold">Student Monetization — Self-Pay Model</span>
          </div>
          <div className="flex items-center justify-around flex-wrap gap-4 text-center">
            <div>
              <div className="text-sm font-medium text-green-400">Build</div>
              <div className="text-xs text-muted-foreground">AI receptionists for businesses</div>
            </div>
            <div className="text-green-500">→</div>
            <div>
              <div className="text-sm font-medium text-green-400">Deploy</div>
              <div className="text-xs text-muted-foreground">Inbound + outbound AI agents</div>
            </div>
            <div className="text-green-500">→</div>
            <div>
              <div className="text-sm font-medium text-green-400">Monetize</div>
              <div className="text-xs text-muted-foreground">Across all 6 platforms</div>
            </div>
            <div className="text-green-500">→</div>
            <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
              <div className="text-lg font-bold text-green-400">Earn ₹9,999+/yr</div>
              <div className="text-xs text-muted-foreground">Self-pays the platform fees</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a href="https://saketh.ai" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 bg-green-600 hover:bg-green-500">
              Try Saketh.AI <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default VoiceAgentsSlide;
