import { motion } from 'framer-motion';
import { Layers, CreditCard, EyeOff, GraduationCap, AlertTriangle } from 'lucide-react';
import { problemData } from '@/data/presentationData';

const iconMap = {
  Layers,
  CreditCard,
  EyeOff,
  GraduationCap
};

const ProblemSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-20"
      data-testid="problem-slide"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium">The Challenge</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{problemData.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {problemData.subtitle}
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemData.problems.map((problem, index) => {
            const Icon = iconMap[problem.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group relative"
              >
                <div className="glass rounded-2xl p-6 md:p-8 hover:bg-white/5 dark:hover:bg-white/5 transition-all border border-destructive/20 hover:border-destructive/40">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="glass inline-flex flex-col md:flex-row items-center gap-6 md:gap-12 px-8 py-6 rounded-2xl border border-orange-500/30">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">95%</div>
              <div className="text-sm text-muted-foreground">Students using AI without guidance</div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">₹4,000+</div>
              <div className="text-sm text-muted-foreground">Annual spend on fragmented tools</div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">0</div>
              <div className="text-sm text-muted-foreground">Institutional AI visibility</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSlide;
