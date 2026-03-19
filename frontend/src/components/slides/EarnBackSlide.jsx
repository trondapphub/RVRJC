import { motion } from 'framer-motion';
import { Bot, Video, Code, Layers, Database, Briefcase, IndianRupee, Target } from 'lucide-react';

const earningWays = [
  {
    icon: Bot,
    title: 'AI Chatbots for Businesses',
    desc: 'WhatsApp bots, support bots, appointment booking',
    clients: 'Clinics, real estate, local shops',
    pricing: '₹2,000 – ₹10,000 per bot',
    recovery: '1–2 clients = fees recovered',
    color: '#8B5CF6'
  },
  {
    icon: Video,
    title: 'AI Content Creation',
    desc: 'Reels for influencers, businesses, YouTube',
    clients: 'Influencers, local businesses',
    pricing: '₹500/reel • ₹5,000/mo for 30 reels',
    recovery: '2 clients = ₹10,000/month',
    color: '#EC4899'
  },
  {
    icon: Code,
    title: 'Freelance AI + Web Dev',
    desc: 'Landing pages, dashboards, automation tools',
    clients: 'Startups, small businesses',
    pricing: '₹3,000 – ₹25,000 per project',
    recovery: '1 project = full fee recovery',
    color: '#F97316'
  },
  {
    icon: Layers,
    title: 'Sell AI Templates',
    desc: 'Resume generators, email automation, workflows',
    clients: 'Sell on FoundryAI marketplace',
    pricing: '₹100 – ₹500 per template',
    recovery: 'Scale to ₹10,000+ passive',
    color: '#3B82F6'
  },
  {
    icon: Database,
    title: 'Sell Datasets & Prompts',
    desc: 'Q&A datasets, prompt packs, training data',
    clients: 'Startups, other students, researchers',
    pricing: '₹1,000 – ₹20,000',
    recovery: 'High-demand AI skill',
    color: '#10B981'
  },
  {
    icon: Briefcase,
    title: 'Internships via Portfolio',
    desc: 'GitHub projects + live AI apps showcase',
    clients: 'Tech companies, AI startups',
    pricing: '₹5L → ₹10L package difference',
    recovery: 'Career-changing ROI',
    color: '#06B6D4'
  }
];

const EarnBackSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="earn-back-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3">
            <Target className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">Earn Back ₹9,999/yr</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">How Students Earn Back ₹9,999</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Spend ₹9,999 → Earn ₹10,000 – ₹1,00,000 using AI skills on this platform
          </p>
        </motion.div>

        {/* Promise Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="glass rounded-xl p-3 mb-4 border border-green-500/30 bg-green-500/5 text-center"
        >
          <span className="text-lg font-bold text-green-400">Simple Promise:</span>
          <span className="text-muted-foreground ml-2">We don't just give tools — we give earning opportunities</span>
        </motion.div>

        {/* 6 Earning Ways */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {earningWays.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass rounded-xl p-3 hover:bg-white/5 transition-all border border-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${way.color}20` }}>
                    <Icon className="h-4 w-4" style={{ color: way.color }} />
                  </div>
                  <h4 className="font-semibold text-xs" style={{ color: way.color }}>{way.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{way.desc}</p>
                <div className="text-xs text-muted-foreground mb-2">
                  <span className="opacity-70">Clients:</span> {way.clients}
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <IndianRupee className="h-3 w-3" style={{ color: way.color }} />
                  <span className="text-xs font-medium" style={{ color: way.color }}>{way.pricing}</span>
                </div>
                <div className="text-xs p-1.5 rounded-lg text-center font-medium" style={{ backgroundColor: `${way.color}15`, color: way.color }}>
                  {way.recovery}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ROI Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-4 border border-green-500/30 bg-green-500/5"
        >
          <div className="flex items-center justify-around flex-wrap gap-3 text-center">
            <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
              <div className="text-lg font-bold text-red-400">₹9,999</div>
              <div className="text-xs text-muted-foreground">Investment</div>
            </div>
            <div className="text-muted-foreground">→</div>
            <div className="text-xs text-muted-foreground">Learn + Build</div>
            <div className="text-muted-foreground">→</div>
            <div className="p-2 rounded-lg bg-blue-500/10">
              <div className="text-sm font-medium text-blue-400">1 Chatbot = ₹5,000</div>
            </div>
            <div className="text-muted-foreground">+</div>
            <div className="p-2 rounded-lg bg-pink-500/10">
              <div className="text-sm font-medium text-pink-400">10 Reels = ₹5,000</div>
            </div>
            <div className="text-muted-foreground">=</div>
            <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
              <div className="text-lg font-bold text-green-400">₹10,000 Earned</div>
              <div className="text-xs text-green-300">PROFIT: ₹2,500+</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EarnBackSlide;
