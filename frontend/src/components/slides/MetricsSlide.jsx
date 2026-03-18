import { motion } from 'framer-motion';
import { Users, Rocket, Globe, Calendar, TrendingUp, CheckCircle2 } from 'lucide-react';
import { metricsData } from '@/data/presentationData';
import { useEffect, useState } from 'react';

const iconMap = {
  Users,
  Rocket,
  Globe,
  Calendar
};

const colorMap = {
  blue: 'from-blue-500 to-blue-600',
  orange: 'from-orange-500 to-orange-600',
  green: 'from-green-500 to-green-600',
  purple: 'from-purple-500 to-purple-600'
};

const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numericValue));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [numericValue, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const MetricsSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-20"
      data-testid="metrics-slide"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">Expected Impact</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{metricsData.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {metricsData.subtitle}
          </p>
        </motion.div>

        {/* Metrics cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {metricsData.metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="metric-card"
              >
                <div className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-all border border-border">
                  <div 
                    className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${colorMap[metric.color]} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                    <AnimatedCounter value={metric.value} />
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Outcomes list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-8 border border-green-500/30"
        >
          <h4 className="text-lg font-semibold mb-6 text-center">Transformation Outcomes</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {metricsData.outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + 0.1 * index }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </div>
                <span className="text-muted-foreground">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MetricsSlide;
