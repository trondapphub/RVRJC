import { motion } from 'framer-motion';
import { Rocket, GraduationCap, Building, Brain, ArrowRight, Sparkles } from 'lucide-react';

const beforeAfter = [
  { before: 'Theory-focused curriculum', after: 'Build real AI products', icon: '📚' },
  { before: 'Limited practical exposure', after: 'Live apps & agents', icon: '💻' },
  { before: 'Generic graduates', after: 'AI-skilled innovators', icon: '🎓' },
  { before: 'Standard placements', after: 'Premium tech roles', icon: '💼' }
];

const outcomes = [
  { icon: Rocket, title: 'Students Build', items: ['SaaS products', 'AI startups', 'Automation tools'] },
  { icon: GraduationCap, title: 'Faculty Use AI', items: ['Teaching', 'Research', 'Content creation'] },
  { icon: Building, title: 'College Becomes', items: ['Startup-producing', 'AI innovation hub', 'Industry partner'] }
];

const TransformationSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="transformation-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium">The Transformation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            From <span className="text-muted-foreground">College</span> to{' '}
            <span className="gradient-text">AI Innovation Hub</span>
          </h2>
        </motion.div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Before */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-sm">❌</span>
                Today (Most Colleges)
              </h3>
              {beforeAfter.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-muted-foreground">{item.before}</span>
                </motion.div>
              ))}
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* After */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-sm">✅</span>
                With FoundryAI
              </h3>
              {beforeAfter.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-green-400">{item.after}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl p-5 border border-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <h4 className="font-semibold">{outcome.title}</h4>
                </div>
                <ul className="space-y-2">
                  {outcome.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <div className="glass inline-block px-6 py-3 rounded-full border border-purple-500/30">
            <span className="text-lg font-medium">
              "RVRJC: First college with a <span className="text-purple-400">full AI operating system</span> for students"
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TransformationSlide;
