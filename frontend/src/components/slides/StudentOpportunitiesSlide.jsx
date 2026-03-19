import { motion } from 'framer-motion';
import { Bot, Blocks, Database, Brain, Code, Lightbulb, ExternalLink } from 'lucide-react';

const opportunities = [
  {
    icon: Bot,
    title: 'Build AI Agents',
    desc: 'Automation + Real Products',
    details: ['Chatbots & Legal assistants', 'Customer support agents', 'Workflow automation'],
    example: '"AI Attendance Bot", "AI Resume Screener"',
    outcome: 'Users → Builders',
    color: '#8B5CF6'
  },
  {
    icon: Blocks,
    title: 'Create AI Templates',
    desc: 'Reusable & Monetizable',
    details: ['Prompt templates', 'Automation workflows', 'Business use-case templates'],
    example: '"NDA Generator", "DevOps Deploy Template"',
    outcome: 'Product thinking + revenue',
    color: '#EC4899'
  },
  {
    icon: Database,
    title: 'Build Datasets',
    desc: 'High-Demand Skill',
    details: ['Q&A datasets', 'Domain-specific data', 'Multilingual datasets'],
    example: '"Engineering Q&A (10K entries)"',
    outcome: 'Data engineering skills',
    color: '#10B981'
  },
  {
    icon: Brain,
    title: 'Train & Fine-Tune LLMs',
    desc: 'Become AI Engineers',
    details: ['12M dataset pipeline', 'Fine-tuning workflows', 'Model evaluation'],
    example: 'Tokenization → Embeddings → Training',
    outcome: 'AI engineers, not just users',
    color: '#3B82F6'
  },
  {
    icon: Code,
    title: 'Build Full AI Apps',
    desc: 'End-to-End with CodeFoundry',
    details: ['Frontend + Backend + AI', 'Database & deployment', 'Production-ready code'],
    example: '"AI SaaS Product", "AI Chatbot Platform"',
    outcome: 'Real-world portfolio',
    color: '#F97316'
  }
];

const StudentOpportunitiesSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="student-opportunities-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">Student Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">What Students Will Build</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            From consumers to creators — real projects, real skills, real impact
          </p>
        </motion.div>

        {/* 5 Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-all border border-border"
              >
                <div className="flex items-center justify-center mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${opp.color}20` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: opp.color }} />
                  </div>
                </div>
                <div className="text-center mb-2">
                  <h4 className="font-semibold text-sm" style={{ color: opp.color }}>{opp.title}</h4>
                  <p className="text-xs text-muted-foreground">{opp.desc}</p>
                </div>
                <div className="space-y-1 mb-2">
                  {opp.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: opp.color }} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground italic mb-2 text-center">
                  {opp.example}
                </div>
                <div
                  className="text-xs p-2 rounded-lg text-center font-medium"
                  style={{ backgroundColor: `${opp.color}15`, color: opp.color }}
                >
                  {opp.outcome}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass rounded-xl p-4 border border-indigo-500/30 bg-indigo-500/5"
        >
          <div className="flex items-center justify-around flex-wrap gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-indigo-400">5–10</div>
              <div className="text-xs text-muted-foreground">Real Projects by Graduation</div>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div>
              <div className="text-2xl font-bold text-green-400">AI Agents</div>
              <div className="text-xs text-muted-foreground">Built & Deployed</div>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div>
              <div className="text-2xl font-bold text-orange-400">Full-Stack</div>
              <div className="text-xs text-muted-foreground">Production Apps</div>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div>
              <div className="text-2xl font-bold text-pink-400">Datasets</div>
              <div className="text-xs text-muted-foreground">Contributed to AI Systems</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentOpportunitiesSlide;
