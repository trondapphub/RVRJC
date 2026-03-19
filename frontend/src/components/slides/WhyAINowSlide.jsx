import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Shield, TrendingDown, GraduationCap, Building2, Globe2, Zap } from 'lucide-react';

const urgencyPoints = [
  {
    icon: Clock,
    title: 'AI is Moving at Lightning Speed',
    desc: 'Every month without AI integration means students fall 6 months behind industry standards. By 2027, 80% of tech jobs will require AI skills.',
    color: '#EF4444'
  },
  {
    icon: TrendingDown,
    title: 'Competitors Are Already Ahead',
    desc: 'IITs, NITs, and private universities are rolling out AI programs now. Delay means losing the best students and faculty to institutions that act first.',
    color: '#F97316'
  },
  {
    icon: Building2,
    title: 'Industry Demands AI-Ready Graduates',
    desc: 'Top recruiters are filtering for AI skills. Companies want builders, not theory learners. Without AI enablement, placement rates will decline.',
    color: '#8B5CF6'
  },
  {
    icon: GraduationCap,
    title: 'Students Expect Modern Education',
    desc: 'Gen Z students choose colleges with cutting-edge tech exposure. AI enablement is now a key factor in college selection and retention.',
    color: '#3B82F6'
  }
];

const WhyAINowSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="why-ai-now-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-3"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-2 border border-red-500/30">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <span className="text-sm font-bold text-red-400">Non-Negotiable</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Why AI Enablement is <span className="text-red-400">Mandatory</span> Now
          </h2>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            This is not optional. This is about the future survival and leadership of RVRJC as an Autonomous University.
          </p>
        </motion.div>

        {/* 4 Urgency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {urgencyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08 }}
                className="glass rounded-xl p-3 border border-border hover:bg-white/5 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${point.color}20` }}
                  >
                    <Icon className="h-4 w-4" style={{ color: point.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-0.5" style={{ color: point.color }}>{point.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cost of Inaction vs Action */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
            className="glass rounded-xl p-3 border border-red-500/30 bg-red-500/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-red-500" />
              <span className="font-bold text-sm text-red-400">Cost of Inaction</span>
            </div>
            <div className="space-y-1.5">
              {[
                'Declining placement rates year-over-year',
                'Best students choose AI-enabled colleges',
                'Rankings stagnate or drop',
                'Faculty becomes irrelevant to industry',
                'College loses autonomous edge'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-xl p-3 border border-green-500/30 bg-green-500/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <Globe2 className="h-4 w-4 text-green-500" />
              <span className="font-bold text-sm text-green-400">Result of Action</span>
            </div>
            <div className="space-y-1.5">
              {[
                'RVRJC becomes #1 AI college in the region',
                'Students graduate as AI engineers & builders',
                'Placement packages jump from ₹3-6L to ₹8-20L',
                'National Top 50 ranking within 3 years',
                'Industry partnerships & startup culture'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-xl p-3 text-center border border-amber-500/30 bg-amber-500/5"
        >
          <blockquote className="text-base md:text-lg font-bold">
            <Zap className="h-4 w-4 text-amber-500 inline mr-1" />
            "The question is not <span className="text-red-400">whether</span> to adopt AI.
            The question is <span className="text-green-400">how fast</span> can RVRJC lead the way."
          </blockquote>
          <p className="text-xs text-muted-foreground mt-1">
            Every semester of delay is a generation of students left behind.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyAINowSlide;
