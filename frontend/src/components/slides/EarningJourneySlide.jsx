import { motion } from 'framer-motion';
import { TrendingUp, Calendar, CheckCircle2, Rocket, LayoutDashboard, Sparkles } from 'lucide-react';

const timeline = [
  {
    month: 'Month 1–2',
    title: 'Learn + Build',
    items: ['Complete platform training', 'Build first projects', 'Explore all 6 platforms'],
    earning: '₹0 (Investing)',
    color: '#3B82F6',
    status: 'learn'
  },
  {
    month: 'Month 3',
    title: 'First Products',
    items: ['1 chatbot built', '1 full-stack app', '5 content reels'],
    earning: '₹0 (Portfolio)',
    color: '#8B5CF6',
    status: 'build'
  },
  {
    month: 'Month 4',
    title: 'First Client',
    items: ['Land 1 paying client', 'Sell on marketplace', 'Freelance outreach'],
    earning: '₹5,000',
    color: '#F97316',
    status: 'earn'
  },
  {
    month: 'Month 5–6',
    title: 'Scale Up',
    items: ['2–3 active clients', 'Template sales growing', 'Consistent revenue'],
    earning: '₹10,000 – ₹30,000',
    color: '#10B981',
    status: 'scale'
  }
];

const platformSupport = [
  'Ready-to-use templates',
  'Client-ready solutions',
  'Portfolio projects',
  'Marketplace to sell',
  'AI agents to deploy'
];

const EarningJourneySlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="earning-journey-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3">
            <TrendingUp className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">Realistic Earning Path</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Student Earning Journey</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            From zero to earning in 6 months — a realistic, achievable path
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          {timeline.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08 }}
              className="glass rounded-xl p-4 border border-border relative"
            >
              <div className="text-xs font-medium mb-1" style={{ color: phase.color }}>{phase.month}</div>
              <h4 className="font-semibold text-sm mb-2">{phase.title}</h4>
              <div className="space-y-1 mb-3">
                {phase.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: phase.color }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs p-2 rounded-lg text-center font-bold" style={{ backgroundColor: `${phase.color}15`, color: phase.color }}>
                {phase.earning}
              </div>
              {index < 3 && (
                <div className="absolute top-1/2 -right-2 text-muted-foreground hidden md:block text-sm">→</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Two columns: Platform Support + Earn with AI Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Platform Support */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-4 border border-amber-500/30 bg-amber-500/5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span className="font-semibold">Platform Support</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">We don't just give tools — we give:</p>
            <div className="space-y-2">
              {platformSupport.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Earn with AI Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
            className="glass rounded-xl p-4 border border-purple-500/30 bg-purple-500/5"
          >
            <div className="flex items-center gap-2 mb-3">
              <LayoutDashboard className="h-5 w-5 text-purple-500" />
              <span className="font-semibold">"Earn with AI" Dashboard</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">Coming Soon</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Inside the platform, students will see:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-lg bg-purple-500/10 text-center">
                <div className="text-xs font-medium text-purple-400">Ways to Earn</div>
                <div className="text-xs text-muted-foreground">Guided opportunities</div>
              </div>
              <div className="p-2 rounded-lg bg-blue-500/10 text-center">
                <div className="text-xs font-medium text-blue-400">Templates to Sell</div>
                <div className="text-xs text-muted-foreground">Ready marketplace</div>
              </div>
              <div className="p-2 rounded-lg bg-orange-500/10 text-center">
                <div className="text-xs font-medium text-orange-400">Clients to Target</div>
                <div className="text-xs text-muted-foreground">Industry leads</div>
              </div>
              <div className="p-2 rounded-lg bg-green-500/10 text-center">
                <div className="text-xs font-medium text-green-400">Your Earnings</div>
                <div className="text-xs text-muted-foreground">Track revenue</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="glass inline-block px-6 py-3 rounded-full border border-green-500/30">
            <span className="text-lg font-medium">
              <Rocket className="h-5 w-5 inline mr-2 text-green-400" />
              Students don't just learn AI — they <span className="text-green-400 font-bold">earn from AI</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EarningJourneySlide;
