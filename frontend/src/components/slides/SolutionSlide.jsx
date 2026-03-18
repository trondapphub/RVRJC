import { motion } from 'framer-motion';
import { Brain, BookOpen, Code, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { solutionData } from '@/data/presentationData';

const iconMap = {
  Brain,
  BookOpen,
  Code,
  FileText
};

const colorMap = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-500', glow: 'shadow-blue-500/20' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-500', glow: 'shadow-green-500/20' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-500', glow: 'shadow-orange-500/20' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-500', glow: 'shadow-purple-500/20' }
};

const SolutionSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-20"
      data-testid="solution-slide"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{solutionData.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {solutionData.subtitle}
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutionData.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const colors = colorMap[feature.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group"
              >
                <div className={`glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all border ${colors.border} hover:shadow-lg ${colors.glow}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-7 w-7 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className="glass rounded-2xl p-8 border border-green-500/30">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Key Benefits
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "10x capabilities at lower cost",
                "Centralized monitoring & analytics",
                "Industry-ready AI skills"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionSlide;
