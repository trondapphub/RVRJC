import { motion } from 'framer-motion';
import { Key, Users, ArrowUpCircle, Shield, CheckCircle2, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: '7,500',
    period: '/year',
    description: 'For regular students',
    multiplier: '1x',
    color: '#3B82F6',
    features: ['100K LLM tokens/mo', '100 Agent runs/mo', '30 mins voice/mo', '20 images/mo'],
    popular: false
  },
  {
    name: 'Pro',
    price: '12,000',
    period: '/year',
    description: 'For heavy users',
    multiplier: '2x',
    color: '#8B5CF6',
    features: ['200K LLM tokens/mo', '200 Agent runs/mo', '60 mins voice/mo', '40 images/mo'],
    popular: true
  },
  {
    name: 'Power',
    price: '18,000',
    period: '/year',
    description: 'For AI enthusiasts',
    multiplier: '5x',
    color: '#F97316',
    features: ['500K LLM tokens/mo', '500 Agent runs/mo', '150 mins voice/mo', '100 images/mo'],
    popular: false
  },
  {
    name: 'Unlimited',
    price: '30,000',
    period: '/year',
    description: 'For researchers',
    multiplier: '∞',
    color: '#10B981',
    features: ['Unlimited LLM tokens', 'Unlimited Agent runs', 'Unlimited voice', 'Unlimited images'],
    popular: false
  }
];

const ssoFeatures = [
  'One login for all 6 platforms',
  'Institutional email verification',
  'Role-based access (Student/Faculty/Admin)',
  'Usage dashboard across platforms'
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
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3">
            <Key className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">SSO + Tiered Access</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Single Sign-On & Flexible Tiers</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            One account, all platforms. Start basic, upgrade when needed.
          </p>
        </motion.div>

        {/* SSO Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-4 mb-6 border border-blue-500/30 bg-blue-500/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold">Single Sign-On (SSO)</h3>
                <p className="text-xs text-muted-foreground">Powered by auth.foundryailabs.io</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {ssoFeatures.map((feature, index) => (
                <span key={index} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
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
              
              <div className="text-center mb-3">
                <div 
                  className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: tier.color }}
                >
                  {tier.multiplier}
                </div>
                <h3 className="font-bold text-lg">{tier.name}</h3>
                <p className="text-xs text-muted-foreground">{tier.description}</p>
              </div>

              <div className="text-center mb-3">
                <span className="text-2xl font-bold" style={{ color: tier.color }}>₹{tier.price}</span>
                <span className="text-xs text-muted-foreground">{tier.period}</span>
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

        {/* Upgrade Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <ArrowUpCircle className="h-5 w-5 text-green-500" />
            <h3 className="font-semibold">Seamless Upgrade Flow</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {['Start Basic', 'Use Platform', 'Hit 80% Quota', 'Get Notification', 'One-Click Upgrade'].map((step, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-xs px-2 py-1 rounded-full bg-muted">{step}</span>
                  {index < 4 && <Zap className="h-3 w-3 text-muted-foreground mx-1" />}
                </div>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              Pay difference • Instant activation • No downtime
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SSOTiersSlide;
