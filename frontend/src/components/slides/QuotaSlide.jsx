import { motion } from 'framer-motion';
import { Gauge, Shield, Bell, TrendingUp, Users, Zap } from 'lucide-react';

const quotaLimits = [
  { platform: 'LLM Platform', limit: '100K tokens', daily: '4K/day', color: '#3B82F6', percent: 13 },
  { platform: 'Agent OS', limit: '100 executions', daily: '5/day', color: '#8B5CF6', percent: 16 },
  { platform: 'Voice Agents', limit: '30 mins', daily: '2 mins/day', color: '#10B981', percent: 24 },
  { platform: 'Content Studio', limit: '20 images', daily: '3/day', color: '#EC4899', percent: 16 },
  { platform: 'CodeFoundry', limit: '$15/build', daily: 'Pay per use', color: '#F97316', percent: 0 },
  { platform: 'K-12 Academy', limit: '200 sessions', daily: '10/day', color: '#06B6D4', percent: 24 }
];

const alerts = [
  { level: '50%', action: 'Info notification', color: 'text-blue-400' },
  { level: '80%', action: 'Warning email', color: 'text-yellow-400' },
  { level: '100%', action: 'Soft block + upgrade prompt', color: 'text-orange-400' },
  { level: '110%', action: 'Hard block until reset', color: 'text-red-400' }
];

const QuotaSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-16"
      data-testid="quota-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Gauge className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">Fair Usage Policy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Quota & Usage Limits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ₹625/student/month budget with transparent limits across all platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Platform Quotas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6 border border-border">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Monthly Limits Per Student
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quotaLimits.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="glass rounded-xl p-4 border border-border/50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm font-medium">{item.platform}</span>
                    </div>
                    <div className="text-xl font-bold" style={{ color: item.color }}>
                      {item.limit}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.daily}</div>
                    {item.percent > 0 && (
                      <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${item.percent * 4}%`, 
                            backgroundColor: item.color 
                          }}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Alert Thresholds */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-6 border border-border">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5 text-yellow-500" />
                Alert Thresholds
              </h3>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <span className={`font-bold ${alert.color}`}>{alert.level}</span>
                    <span className="text-xs text-muted-foreground">{alert.action}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-green-500/30 bg-green-500/5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                Benefits
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-green-500" />
                  Predictable costs for institution
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-green-500" />
                  Fair access for all students
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-green-500" />
                  Prevents abuse & overspending
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-green-500" />
                  Real-time usage dashboard
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Budget allocation bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 glass rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Budget Allocation (₹625/month)</span>
            <span className="text-sm text-muted-foreground">7% buffer included</span>
          </div>
          <div className="h-4 rounded-full overflow-hidden flex">
            {quotaLimits.filter(q => q.percent > 0).map((item, index) => (
              <div
                key={index}
                className="h-full transition-all"
                style={{ 
                  width: `${item.percent}%`, 
                  backgroundColor: item.color 
                }}
                title={`${item.platform}: ${item.percent}%`}
              />
            ))}
            <div className="h-full bg-gray-500" style={{ width: '7%' }} title="Buffer: 7%" />
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            {quotaLimits.filter(q => q.percent > 0).map((item, index) => (
              <div key={index} className="flex items-center gap-1 text-xs">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-muted-foreground">{item.platform}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuotaSlide;
