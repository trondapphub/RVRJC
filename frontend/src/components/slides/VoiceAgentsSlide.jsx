import { motion } from 'framer-motion';
import { Mic, Phone, Globe, CreditCard, Calendar, Bot, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Bot, title: "AI Voice Agents", desc: "Custom personalities, human-like conversations" },
  { icon: Globe, title: "28+ Languages", desc: "Multi-language support worldwide" },
  { icon: Phone, title: "Smart Call Handling", desc: "Inbound, outbound & batch campaigns" },
  { icon: CreditCard, title: "Phone Payments", desc: "Collect payments via Stripe during calls" },
  { icon: Calendar, title: "Appointments", desc: "Calendly integration for scheduling" },
  { icon: Mic, title: "Website Crawler", desc: "Auto-generate agent from any URL" }
];

const stats = [
  { value: "28+", label: "Languages" },
  { value: "30+", label: "Industry Templates" },
  { value: "24/7", label: "Availability" },
  { value: "No-Code", label: "Builder" }
];

const integrations = ["Twilio", "OpenAI", "Stripe", "Calendly", "Make.com", "Zapier"];

const VoiceAgentsSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-16"
      data-testid="voice-agents-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Mic className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Voice Agents</div>
              <div className="text-xs text-green-400">saketh.ai</div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">AI Voice Agent Platform</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build intelligent voice agents to handle calls, take orders & process payments
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
              <div className="text-2xl font-bold text-green-500">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
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
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-green-500" />
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

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {integrations.map((integration, index) => (
            <span key={index} className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400">
              {integration}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a href="https://saketh.ai" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 bg-green-600 hover:bg-green-500">
              Try Voice Agents <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default VoiceAgentsSlide;
