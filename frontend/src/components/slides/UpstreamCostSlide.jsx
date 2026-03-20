import { motion } from 'framer-motion';
import { IndianRupee, Server, Brain, Mic, ShieldCheck, Calculator } from 'lucide-react';

const costBreakdown = [
  {
    category: 'LLM Tokens',
    icon: Brain,
    cost: '₹4,000',
    color: '#3B82F6',
    details: [
      { label: 'Cheap models (70%)', value: '~$0.20/mo' },
      { label: 'Mid models (20%)', value: '~$1.50/mo' },
      { label: 'Premium models (10%)', value: '~$1.50/mo' }
    ],
    note: '350K tokens/mo × 12 = $48 ≈ ₹4,000'
  },
  {
    category: 'Infrastructure',
    icon: Server,
    cost: '₹2,300',
    color: '#8B5CF6',
    details: [
      { label: 'Servers (AWS/EKS)', value: '₹1,000' },
      { label: 'Storage + Database', value: '₹500' },
      { label: 'Redis + Caching', value: '₹300' },
      { label: 'Bandwidth', value: '₹500' }
    ],
    note: 'Per student / year'
  },
  {
    category: 'AI Overheads',
    icon: ShieldCheck,
    cost: '₹1,700',
    color: '#F97316',
    details: [
      { label: 'Failed queries / retries', value: '₹500' },
      { label: 'Context inflation', value: '₹500' },
      { label: 'Multi-turn conversations', value: '₹700' }
    ],
    note: 'Real-world usage overhead'
  },
  {
    category: 'Advanced Features',
    icon: Mic,
    cost: '₹2,000',
    color: '#10B981',
    details: [
      { label: 'Voice AI', value: '₹800' },
      { label: 'Image generation', value: '₹500' },
      { label: 'Agent execution', value: '₹700' }
    ],
    note: 'Your differentiator'
  }
];

const UpstreamCostSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="upstream-cost-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3">
            <Calculator className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">Cost Transparency</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-1">Why ₹9,999/Year is Justified</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            We aggregate multiple premium AI systems and optimize costs — the base infrastructure cost per student is ~₹10,000/year
          </p>
        </motion.div>

        {/* 4 Cost Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          {costBreakdown.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.06 }}
                className="glass rounded-xl p-3 border border-border"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                      <Icon className="h-4 w-4" style={{ color: item.color }} />
                    </div>
                    <span className="font-bold text-xs" style={{ color: item.color }}>{item.category}</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: item.color }}>{item.cost}</span>
                </div>
                <div className="space-y-1 mb-2">
                  {item.details.map((d, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{d.label}</span>
                      <span className="font-medium">{d.value}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground italic border-t border-border pt-1">{item.note}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Total Cost Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass rounded-xl p-4 mb-4 border border-green-500/30 bg-green-500/5"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-bold text-sm mb-1">True Cost Per Student / Year</div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>LLM ₹4,000</span>
                <span>+</span>
                <span>Infra ₹2,300</span>
                <span>+</span>
                <span>Overheads ₹1,700</span>
                <span>+</span>
                <span>Advanced ₹2,000</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">= ₹10,000</div>
              <div className="text-xs text-muted-foreground">per student / year</div>
            </div>
          </div>
        </motion.div>

        {/* Usage Profile + Positioning */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-3"
          >
            <div className="font-semibold text-xs mb-2 text-blue-400">Active Student Usage Profile</div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Monthly queries</span><span>300–500</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Coding + analysis tasks</span><span>Regular</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Voice + image generation</span><span>Moderate</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Token consumption</span><span>350K/month</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
            className="glass rounded-xl p-3"
          >
            <div className="font-semibold text-xs mb-2 text-green-400">Our Positioning</div>
            <p className="text-xs text-muted-foreground leading-relaxed italic">
              "We aggregate multiple premium AI systems and optimize costs — even then, the base infrastructure cost per student is ~₹10,000/year if used fully."
            </p>
            <div className="mt-2 text-xs p-2 rounded-lg bg-green-500/10 text-green-400 font-medium text-center">
              Upstream cost is real, not inflated. Strong margins maintained.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UpstreamCostSlide;
