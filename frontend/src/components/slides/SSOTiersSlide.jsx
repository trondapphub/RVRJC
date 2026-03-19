import { motion } from 'framer-motion';
import { Key, Users, ArrowUpCircle, Shield, CheckCircle2, Zap, Coins } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: '7,500',
    period: '/year',
    description: 'For regular students',
    creditsYear: '90,000',
    creditsMonth: '7,500',
    color: '#3B82F6',
    features: ['Access to all 6 platforms', 'Basic support', 'Usage dashboard'],
    popular: false
  },
  {
    name: 'Pro',
    price: '12,000',
    period: '/year',
    description: 'For heavy users',
    creditsYear: '180,000',
    creditsMonth: '15,000',
    color: '#8B5CF6',
    features: ['2x credits vs Basic', 'Priority support', 'Advanced analytics'],
    popular: true
  },
  {
    name: 'Power',
    price: '18,000',
    period: '/year',
    description: 'For AI enthusiasts',
    creditsYear: '400,000',
    creditsMonth: '33,000',
    color: '#F97316',
    features: ['4.4x credits vs Basic', 'Dedicated support', 'Early access features'],
    popular: false
  },
  {
    name: 'Unlimited',
    price: '30,000',
    period: '/year',
    description: 'For researchers',
    creditsYear: '1,000,000',
    creditsMonth: '83,000',
    color: '#10B981',
    features: ['Soft cap (fair use)', 'VIP support', 'Custom integrations'],
    popular: false
  }
];

const creditUsage = [
  { platform: 'LLM Platform', cost: '1 credit = 10 tokens', color: '#3B82F6' },
  { platform: 'Agent OS', cost: '1 credit = 1 execution', color: '#8B5CF6' },
  { platform: 'Voice Agents', cost: '1 credit = 1 second', color: '#10B981' },
  { platform: 'Content Studio', cost: '10 credits = 1 image', color: '#EC4899' },
  { platform: 'CodeFoundry', cost: '$15/build (separate)', color: '#F97316' },
  { platform: 'K-12 Academy', cost: '1 credit = 1 session', color: '#06B6D4' }
];

const ssoFeatures = [
  'One login for all 6 platforms',
  'Institutional email verification',
  'Unified credit wallet'
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
            <span className="text-sm font-medium">Credit-Based Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">SSO + Universal Credits</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            One account, one credit wallet. Use across all platforms.
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
              <span className="font-semibold text-sm">Single Sign-On (auth.foundryailabs.io)</span>
            </div>
            <div className="flex gap-2">
              {ssoFeatures.map((feature, index) => (
                <span key={index} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className={`glass rounded-xl p-4 border ${tier.popular ? 'border-purple-500/50 bg-purple-500/5' : 'border-border'} relative`}
            >
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
                <div className="text-lg font-bold" style={{ color: tier.color }}>{tier.creditsYear}</div>
                <div className="text-xs text-muted-foreground">credits/year</div>
                <div className="text-xs text-muted-foreground">({tier.creditsMonth}/month)</div>
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

        {/* Credit Usage Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-4 mb-4"
        >
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Coins className="h-4 w-4 text-yellow-500" />
            Credit Usage Per Platform
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {creditUsage.map((item, index) => (
              <div key={index} className="text-center p-2 rounded-lg" style={{ backgroundColor: `${item.color}10` }}>
                <div className="text-xs font-medium" style={{ color: item.color }}>{item.platform}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.cost}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upgrade Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ArrowUpCircle className="h-4 w-4 text-green-500" />
              <span className="font-semibold text-sm">Upgrade Flow:</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-muted">Hit 80%</span>
              <Zap className="h-3 w-3" />
              <span className="px-2 py-1 rounded bg-muted">Get Alert</span>
              <Zap className="h-3 w-3" />
              <span className="px-2 py-1 rounded bg-muted">Pay Diff</span>
              <Zap className="h-3 w-3" />
              <span className="px-2 py-1 rounded bg-green-500/20 text-green-400">Instant Upgrade</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SSOTiersSlide;
