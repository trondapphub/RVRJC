import { motion } from 'framer-motion';
import { TrendingUp, Award, Briefcase, Star, Users, Target } from 'lucide-react';

const placementBenefits = [
  { icon: '💻', title: 'GitHub Projects', desc: 'Real code portfolios' },
  { icon: '🌐', title: 'Live Apps', desc: 'Deployed applications' },
  { icon: '🤖', title: 'AI Agents', desc: 'Autonomous systems' },
  { icon: '📊', title: 'Data Projects', desc: 'ML & analytics' }
];

const impactMetrics = [
  { value: '+20-40%', label: 'Placement Rate', color: '#10B981' },
  { value: '3-5x', label: 'Student Startups', color: '#8B5CF6' },
  { value: '+50-150', label: 'Ranking Positions', color: '#3B82F6' },
  { value: '#1', label: 'AI College in Region', color: '#F97316' }
];

const standOut = [
  { percent: '90%', desc: 'Graduates have no projects', type: 'bad' },
  { percent: '10%', desc: 'RVRJC students with AI skills', type: 'good' }
];

const PlacementImpactSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="placement-impact-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">Biggest Impact</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Placement & Career Boost</h2>
          <p className="text-lg text-muted-foreground">AI-skilled students stand out from 90% of graduates</p>
        </motion.div>

        {/* Stand Out Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-6"
        >
          <h3 className="font-semibold mb-4 text-center">Why RVRJC Students Will Stand Out</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {placementBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + index * 0.05 }}
                className="text-center p-4 rounded-xl bg-green-500/5 border border-green-500/20"
              >
                <div className="text-3xl mb-2">{benefit.icon}</div>
                <div className="font-semibold text-sm">{benefit.title}</div>
                <div className="text-xs text-muted-foreground">{benefit.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Comparison Bar */}
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-24 text-right text-sm text-red-400">90% Graduates</div>
              <div className="flex-1 h-8 rounded-full bg-red-500/20 relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-full bg-red-500/50 rounded-full flex items-center justify-end pr-3"
                >
                  <span className="text-xs text-white">No AI projects</span>
                </motion.div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-right text-sm text-green-400">RVRJC</div>
              <div className="flex-1 h-8 rounded-full bg-green-500/20 relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-end pr-3"
                >
                  <span className="text-xs text-white font-medium">AI Skills + Live Projects + Agents</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass rounded-xl p-4 text-center border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: metric.color }}>
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Expected Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-xl p-4 border border-green-500/30 bg-green-500/5"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              <span className="font-semibold">Expected in 12-18 months:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">Higher placement %</span>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">Better salary packages</span>
              <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">Premium tech roles</span>
              <span className="text-xs px-3 py-1 rounded-full bg-orange-500/20 text-orange-400">Startup founders</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlacementImpactSlide;
