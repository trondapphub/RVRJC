import { motion } from 'framer-motion';
import { Code, Rocket, Shield, DollarSign, GitBranch, Zap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Rocket, title: "Idea → Live App", desc: "Describe in English, AI builds it" },
  { icon: Code, title: "20K+ Lines of Code", desc: "Full-stack: frontend, backend, DB" },
  { icon: Shield, title: "Security Intelligence", desc: "OWASP scanning, CVE detection" },
  { icon: DollarSign, title: "Cost Intelligence", desc: "Token & infra cost tracking" },
  { icon: GitBranch, title: "CI/CD Pipeline", desc: "Auto Docker & GitHub Actions" },
  { icon: Zap, title: "95% Production Ready", desc: "Enterprise-grade from day one" }
];

const benefits = [
  "Hours, not months",
  "No coding required",
  "Built-in security",
  "Full rollback support"
];

const CodeFoundrySlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-16"
      data-testid="codefoundry-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
              <Code className="h-5 w-5 text-orange-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">CodeFoundry</div>
              <div className="text-xs text-orange-400">codefoundry.sh</div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Engineering Intelligence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Anthropic Claude autonomously designs, codes, tests & deploys your AI startup
          </p>
        </motion.div>

        {/* Pricing highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-8 border border-orange-500/30 bg-gradient-to-r from-orange-500/5 to-transparent"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-3xl font-bold text-orange-500">$15 <span className="text-lg font-normal text-muted-foreground">per build</span></div>
              <p className="text-sm text-muted-foreground">Paid separately by students • 10x savings vs traditional dev</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {benefits.map((benefit, index) => (
                <span key={index} className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-400">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
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
                transition={{ delay: 0.15 + index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-orange-500" />
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
