import { motion } from 'framer-motion';
import { IndianRupee, CheckCircle2, TrendingDown, Gift, Code, Zap } from 'lucide-react';
import { pricingData } from '@/data/presentationData';

const PricingSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-16"
      data-testid="pricing-slide"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <IndianRupee className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">Investment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{pricingData.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {pricingData.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Pricing card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 border border-primary/30 relative overflow-hidden h-full">
              {/* Best value badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                BEST VALUE
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">FoundryAI Ecosystem</h3>
                <p className="text-sm text-muted-foreground">Access to all 6 platforms with fair usage quotas</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold gradient-text">
                  {pricingData.price.currency}{pricingData.price.amount}
                </span>
                <span className="text-sm text-muted-foreground">{pricingData.price.period}</span>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                {pricingData.benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CodeFoundry Special */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-6 border border-orange-500/40 relative overflow-hidden h-full bg-gradient-to-br from-orange-500/5 to-transparent">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                ADD-ON
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <Code className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">CodeFoundry.sh</h3>
                  <p className="text-xs text-muted-foreground">AI Startup Builder</p>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-orange-500">{pricingData.codeFoundry.price}</span>
                <span className="text-sm text-muted-foreground">{pricingData.codeFoundry.note}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{pricingData.codeFoundry.description}</p>

              {/* Highlights */}
              <div className="space-y-2">
                {pricingData.codeFoundry.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Zap className="h-3 w-3 text-orange-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-6 border border-destructive/20 h-full">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="h-5 w-5 text-red-500" />
                <h3 className="text-lg font-bold">Without FoundryAI</h3>
              </div>

              {/* Comparison table */}
              <div className="space-y-3">
                {pricingData.comparison.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between py-2 ${
                      index < pricingData.comparison.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <span className={index === pricingData.comparison.length - 1 ? 'font-bold text-red-500' : 'text-sm text-muted-foreground'}>
                      {item.tool}
                    </span>
                    <span className={index === pricingData.comparison.length - 1 ? 'font-bold text-red-500' : 'text-sm font-medium'}>
                      {item.annual}
                    </span>
                  </div>
                ))}
              </div>

              {/* Savings callout */}
              <div className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/30">
                <div className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-green-500" />
                  <span className="font-semibold text-green-500 text-sm">Save ₹41,700/year</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">85% savings with 10x capabilities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ROI callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <div className="glass inline-flex items-center gap-4 md:gap-6 px-6 py-3 rounded-2xl">
            <div className="text-center">
              <div className="text-xl font-bold text-green-500">₹5.25 Cr</div>
              <div className="text-xs text-muted-foreground">Total Investment</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-xl font-bold gradient-text">10x</div>
              <div className="text-xs text-muted-foreground">Feature Value</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-xl font-bold text-blue-500">₹29 Cr+</div>
              <div className="text-xs text-muted-foreground">Savings</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSlide;
