import { motion } from 'framer-motion';
import { Milestone, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { timelineData } from '@/data/presentationData';

const statusColors = {
  foundation: { bg: 'bg-blue-500', ring: 'ring-blue-500/30' },
  training: { bg: 'bg-purple-500', ring: 'ring-purple-500/30' },
  adoption: { bg: 'bg-orange-500', ring: 'ring-orange-500/30' },
  launch: { bg: 'bg-green-500', ring: 'ring-green-500/30' }
};

const TimelineSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-20"
      data-testid="timeline-slide"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Milestone className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium">Implementation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{timelineData.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {timelineData.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 -translate-y-1/2 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timelineData.phases.map((phase, index) => {
              const colors = statusColors[phase.status];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index }}
                  className="relative"
                >
                  {/* Connector dot */}
                  <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+12px)]">
                    <div className={`w-6 h-6 rounded-full ${colors.bg} ring-4 ${colors.ring} shadow-lg`} />
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl p-6 hover:bg-white/5 transition-all border border-border h-full mt-8 md:mt-12">
                    {/* Week badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white ${colors.bg} mb-4`}>
                      {phase.week}
                    </div>

                    <h3 className="text-xl font-bold mb-4">{phase.title}</h3>

                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow (mobile) */}
                  {index < timelineData.phases.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final outcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="glass inline-flex items-center gap-4 px-8 py-4 rounded-full border border-green-500/30">
            <CheckCircle2 className="h-6 w-6 text-green-500" />
            <span className="text-lg font-semibold">Result: RVRJC as India's AI Innovation Leader</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineSlide;
