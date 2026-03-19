import { motion } from 'framer-motion';
import { Key, Users, ArrowUpCircle, Shield, CheckCircle2, Zap, Coins, Plus } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: '9,999',
    period: '/year',
    description: 'Starting tier for all',
    creditsYear: '90,000',
    creditsMonth: '7,500',
    color: '#3B82F6',
    features: ['All 6 platforms', 'Top-up anytime', 'Usage dashboard'],
    popular: false,
    isBase: true
  },
  {
    name: 'Pro',
    price: '20,000',
    period: '/year',
    description: 'For regular heavy users',
    creditsYear: '180,000',
    creditsMonth: '15,000',
    color: '#8B5CF6',
    features: ['2x monthly credits', 'Priority support', 'Upgrade: +₹10,000'],
    popular: true,
    isBase: false
  },
  {
    name: 'Power',
    price: '40,000',
    period: '/year',
    description: 'For AI enthusiasts & researchers',
    creditsYear: '360,000',
    creditsMonth: '30,000',
    color: '#F97316',
    features: ['4x monthly credits', 'Early access features', 'VIP support'],
    popular: false,
    isBase: false
  }
];

const topUpOptions = [
  { credits: '1,000', price: '₹100', best: false },
  { credits: '5,000', price: '₹450', best: true },
  { credits: '10,000', price: '₹800', best: false }
];

const SSOTiersSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="sso-tiers-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3">
            <Coins className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">Flexible Credit System</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Start Basic, Scale As Needed</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Every student starts with Basic. Top-up credits or upgrade plan anytime.
          </p>
        </motion.div>

        {/* SSO Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-3 mb-4 border border-blue-500/30 bg-blue-500/5"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-blue-500" />
              <span className="font-semibold text-sm">SSO: One login, one wallet, all 6 platforms</span>
            </div>
            <div className="text-xs text-muted-foreground">auth.foundryailabs.io</div>
          </div>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className={`glass rounded-xl p-4 border ${tier.isBase ? 'border-blue-500/50 bg-blue-500/5' : tier.popular ? 'border-purple-500/50 bg-purple-500/5' : 'border-border'} relative`}
            >
              {tier.isBase && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Start Here
                </div>
              )}
              {tier.popular && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Popular
                </div>
              )}
              
              <div className="text-center mb-2">
                <h3 className="font-bold text-lg">{tier.name}</h3>
                <p className="text-xs text-muted-foreground">{tier.description}</p>
              </div>

              <div className="text-center mb-2">
                <span className="text-2xl font-bold" style={{ color: tier.color }}>₹{tier.price}</span>
                <span className="text-xs text-muted-foreground">{tier.period}</span>
              </div>

              <div className="glass rounded-lg p-2 mb-3 text-center" style={{ backgroundColor: `${tier.color}10` }}>
                <div className="text-lg font-bold" style={{ color: tier.color }}>{tier.creditsMonth}</div>
                <div className="text-xs text-muted-foreground">credits/month</div>
              </div>

              <div className="space-y-1">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-1 text-xs">
                    <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Option 1: Top-up */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-4 border border-yellow-500/30 bg-yellow-500/5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Plus className="h-5 w-5 text-yellow-500" />
              <h3 className="font-semibold">Option 1: Top-Up Credits</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Need more this month? Buy extra credits instantly.</p>
            <div className="flex gap-2">
              {topUpOptions.map((option, index) => (
                <div 
                  key={index} 
                  className={`flex-1 text-center p-2 rounded-lg border ${option.best ? 'border-yellow-500 bg-yellow-500/10' : 'border-border'}`}
                >
                  <div className="text-sm font-bold">{option.credits}</div>
                  <div className="text-xs text-muted-foreground">credits</div>
                  <div className="text-xs font-medium text-yellow-500">{option.price}</div>
                  {option.best && <div className="text-xs text-yellow-400">Best value</div>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Option 2: Upgrade */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-4 border border-green-500/30 bg-green-500/5"
          >
            <div className="flex items-center gap-2 mb-3">
              <ArrowUpCircle className="h-5 w-5 text-green-500" />
              <h3 className="font-semibold">Option 2: Upgrade Plan</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Heavy user every month? Upgrade & pay difference to college.</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Basic → Pro</span>
                <span className="font-bold text-green-500">+₹10,000</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Basic → Power</span>
                <span className="font-bold text-green-500">+₹30,000</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              College updates student tier • Instant activation
            </div>
          </motion.div>
        </div>

        {/* Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 glass rounded-xl p-3"
        >
          <div className="flex items-center justify-center gap-2 text-xs">
            <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">Start Basic</span>
            <Zap className="h-3 w-3" />
            <span className="px-2 py-1 rounded bg-muted">Use Credits</span>
            <Zap className="h-3 w-3" />
            <span className="px-2 py-1 rounded bg-muted">Running Low?</span>
            <Zap className="h-3 w-3" />
            <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">Top-Up</span>
            <span className="text-muted-foreground">or</span>
            <span className="px-2 py-1 rounded bg-green-500/20 text-green-400">Upgrade</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SSOTiersSlide;
