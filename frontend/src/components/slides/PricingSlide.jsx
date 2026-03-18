import { motion } from 'framer-motion';
import { IndianRupee, CheckCircle2, TrendingDown, Gift } from 'lucide-react';
import { pricingData } from '@/data/presentationData';

const PricingSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-20"
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <IndianRupee className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">Investment</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{pricingData.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {pricingData.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 border border-primary/30 relative overflow-hidden h-full">
              {/* Best value badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                BEST VALUE
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">FoundryAI Complete Ecosystem</h3>
                <p className="text-muted-foreground">All 6 platforms, unlimited access</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl md:text-6xl font-bold gradient-text">
                  {pricingData.price.currency}{pricingData.price.amount}
                </span>
                <span className="text-muted-foreground">{pricingData.price.period}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">{pricingData.price.note}</p>

              {/* Benefits */}
              <div className="space-y-3">
                {pricingData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-8 border border-destructive/20 h-full">
              <div className="flex items-center gap-2 mb-6">
                <TrendingDown className="h-5 w-5 text-red-500" />
                <h3 className="text-xl font-bold">Without FoundryAI</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Individual subscriptions cost significantly more
              </p>

              {/* Comparison table */}
              <div className="space-y-4">
                {pricingData.comparison.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between py-3 ${
                      index < pricingData.comparison.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <span className={index === pricingData.comparison.length - 1 ? 'font-bold text-red-500' : 'text-muted-foreground'}>
                      {item.tool}
                    </span>
                    <span className={index === pricingData.comparison.length - 1 ? 'font-bold text-red-500 text-lg' : 'font-medium'}>
                      {item.annual}
                    </span>
                  </div>
                ))}
              </div>

              {/* Savings callout */}
              <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-green-500" />
                  <span className="font-semibold text-green-500">Save ₹41,700/student annually</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  That's 85% savings with 10x more capabilities
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ROI callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="glass inline-flex items-center gap-6 px-8 py-4 rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">₹5.25 Cr</div>
              <div className="text-xs text-muted-foreground">Total Investment (7,000 students)</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">10x</div>
              <div className="text-xs text-muted-foreground">Feature Value</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">₹29 Cr+</div>
              <div className="text-xs text-muted-foreground">Savings vs Individual</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSlide;
