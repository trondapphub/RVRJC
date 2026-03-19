import { motion } from 'framer-motion';
import { ShieldAlert, Wind, UserX, GraduationCap, TrendingDown, CheckCircle2, Siren } from 'lucide-react';

const reasons = [
  {
    icon: UserX,
    title: 'Students Won\'t Opt-In Voluntarily',
    desc: 'Many students don\'t see the urgency until it\'s too late. They stick to comfort zones, skip new skills, and realize the gap only at placement time.',
    color: '#EF4444'
  },
  {
    icon: TrendingDown,
    title: 'Industry Is Leaving Them Behind',
    desc: 'Every company — from startups to MNCs — now expects AI literacy. Students without AI skills are being filtered out before interviews even begin.',
    color: '#F97316'
  },
  {
    icon: ShieldAlert,
    title: 'University\'s Responsibility',
    desc: 'As an autonomous university, RVRJC has the power and the duty to shape curriculum. Waiting for students to "show interest" is not a strategy — it\'s a risk.',
    color: '#8B5CF6'
  },
  {
    icon: GraduationCap,
    title: 'Mandatory = Maximum Impact',
    desc: 'When every student is enrolled, the entire college transforms. Placements improve across departments, not just for a few motivated ones.',
    color: '#3B82F6'
  }
];

const MandatoryEnrollmentSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="mandatory-enrollment-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3 border border-red-500/30">
            <Siren className="h-4 w-4 text-red-500" />
            <span className="text-sm font-bold text-red-400">Why Mandatory Enrollment</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Make AI <span className="text-red-400">Compulsory</span> for Every Student
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Some students won't show interest. That's exactly why RVRJC must lead — not wait.
          </p>
        </motion.div>

        {/* 4 Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.07 }}
                className="glass rounded-xl p-3 border border-border"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}20` }}>
                    <Icon className="h-4 w-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-0.5" style={{ color: item.color }}>{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI = Oxygen Analogy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-4 mb-4 border border-cyan-500/30 bg-cyan-500/5"
        >
          <div className="flex items-center gap-3 justify-center mb-2">
            <Wind className="h-6 w-6 text-cyan-400" />
            <span className="font-bold text-lg text-cyan-400">AI is Like Oxygen</span>
          </div>
          <p className="text-sm text-center text-muted-foreground max-w-xl mx-auto">
            You don't ask someone if they want to breathe. In the future, AI will be that fundamental.
            Students who graduate without AI skills will struggle to survive in any industry.
          </p>
        </motion.div>

        {/* What Mandatory Enrollment Achieves */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="glass rounded-xl p-3 mb-3"
        >
          <div className="text-sm font-semibold mb-2 text-center">What Mandatory Enrollment Achieves</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
            {[
              { label: '100% Coverage', desc: 'Every student gets AI skills', color: '#10B981' },
              { label: 'No One Left Behind', desc: 'Weak students benefit most', color: '#3B82F6' },
              { label: 'College-Wide Impact', desc: 'All departments transform', color: '#8B5CF6' },
              { label: 'Placement Guarantee', desc: 'AI-ready = employable', color: '#F97316' }
            ].map((item, i) => (
              <div key={i} className="p-2 rounded-lg" style={{ backgroundColor: `${item.color}10` }}>
                <CheckCircle2 className="h-4 w-4 mx-auto mb-1" style={{ color: item.color }} />
                <div className="text-xs font-medium" style={{ color: item.color }}>{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <blockquote className="text-base md:text-lg font-bold">
            "A responsible university doesn't wait for students to realize the need.
            <br />
            <span className="text-red-400">It prepares them before the world demands it.</span>"
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default MandatoryEnrollmentSlide;
