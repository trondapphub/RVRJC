import { motion } from 'framer-motion';
import { Briefcase, Github, TrendingUp, Rocket, GraduationCap, Award, Zap } from 'lucide-react';

const impactItems = [
  {
    icon: Github,
    title: 'Powerful GitHub Portfolio',
    stats: '5–10 real projects',
    details: ['AI agents & Full-stack apps', 'Deployment links', 'Dataset contributions & LLM experiments'],
    color: '#8B5CF6'
  },
  {
    icon: Briefcase,
    title: 'Campus Placement Advantage',
    stats: 'Live apps + repos',
    details: ['Companies see builders', 'Higher selection rate', 'Real deployment experience'],
    color: '#3B82F6'
  },
  {
    icon: GraduationCap,
    title: 'Advanced AI Professionals',
    stats: '1–2 yrs experience equivalent',
    details: ['LLMs & Prompt engineering', 'AI agents & DevOps', 'Data pipelines & deployment'],
    color: '#10B981'
  },
  {
    icon: Rocket,
    title: 'Startup Opportunities',
    stats: 'Launch SaaS tools',
    details: ['AI automation services', 'Niche AI products', 'College becomes incubator'],
    color: '#F97316'
  }
];

const CareerImpactSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="career-impact-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Award className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">Career Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">From Students to AI Engineers</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Real skills, real portfolios, real career transformation
          </p>
        </motion.div>

        {/* 4 Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-5">
          {impactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-all border border-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon className="h-4 w-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm" style={{ color: item.color }}>{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.stats}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: item.color }} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Package Impact Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-4 mb-5 border border-emerald-500/30 bg-emerald-500/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-emerald-500" />
            <span className="font-semibold">Expected Package Impact</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-lg bg-red-500/10 border border-red-500/20">
              <div className="text-xs text-red-400 mb-1">Traditional Students</div>
              <div className="text-2xl font-bold text-red-400">3–6 LPA</div>
              <div className="text-xs text-muted-foreground mt-1">Only theory, no real projects</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="text-xs text-green-400 mb-1">With AI Portfolio</div>
              <div className="text-2xl font-bold text-green-400">8–20 LPA</div>
              <div className="text-xs text-muted-foreground mt-1">Live apps, AI agents, GitHub repos</div>
            </div>
          </div>
        </motion.div>

        {/* GitHub Profile Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass rounded-xl p-4 mb-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Github className="h-4 w-4 text-purple-400" />
            <span className="font-semibold text-sm">Example Student GitHub Profile</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'AI-Resume-Screener',
              'Multi-language-Tutor-AI',
              'K8s-Deployment-Automation',
              'Legal-Contract-Analyzer',
              'AI-Video-Generator'
            ].map((repo, i) => (
              <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {repo}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Mic Drop Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-amber-500" />
          </div>
          <blockquote className="text-lg md:text-xl font-bold italic bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            "While others are learning AI,
            <br />
            RVRJC students will be building AI."
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerImpactSlide;
