import { motion } from 'framer-motion';
import { Building2, Users, CreditCard, Settings, Database, BarChart3, UserPlus } from 'lucide-react';

const tenantFeatures = [
  { icon: Building2, title: 'Tenant Model', desc: 'Billing config, domains, branding, max students per institution', color: '#3B82F6' },
  { icon: Database, title: 'Complete Data Isolation', desc: 'All queries filtered by tenant_id — institutions never see each other\'s data', color: '#8B5CF6' },
  { icon: Settings, title: 'Onboarding Wizard', desc: 'Create institution → Set billing → Auto-create admin — fully automated', color: '#10B981' },
  { icon: BarChart3, title: 'Platform-Wide Stats', desc: 'Revenue, total students, submissions — Super Admin overview dashboard', color: '#F97316' }
];

const MultiTenantSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="multi-tenant-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-purple-500/12 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3">
            <Building2 className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium">Multi-Tenant Architecture</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">One Platform, Many Institutions</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            RVRJC is just the beginning — the platform scales to any number of colleges
          </p>
        </motion.div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {tenantFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.06 }}
                className="glass rounded-xl p-3 border border-border"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}20` }}>
                    <Icon className="h-4 w-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm" style={{ color: item.color }}>{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Billing Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="grid grid-cols-2 gap-3 mb-4"
        >
          <div className="glass rounded-xl p-4 border border-blue-500/30 bg-blue-500/5 text-center">
            <CreditCard className="h-5 w-5 text-blue-400 mx-auto mb-2" />
            <div className="font-bold text-sm text-blue-400">Per-Student Billing</div>
            <div className="text-2xl font-bold text-blue-400 my-1">₹9,999</div>
            <div className="text-xs text-muted-foreground">per student / year</div>
            <div className="text-xs text-muted-foreground mt-1">Auto-assign 7,500 credits/year</div>
          </div>
          <div className="glass rounded-xl p-4 border border-green-500/30 bg-green-500/5 text-center">
            <Building2 className="h-5 w-5 text-green-400 mx-auto mb-2" />
            <div className="font-bold text-sm text-green-400">Institutional License</div>
            <div className="text-2xl font-bold text-green-400 my-1">Custom</div>
            <div className="text-xs text-muted-foreground">volume pricing</div>
            <div className="text-xs text-muted-foreground mt-1">Bulk enrollment + dedicated support</div>
          </div>
        </motion.div>

        {/* Enrollment Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-3 mb-3"
        >
          <div className="flex items-center gap-2 mb-2 justify-center">
            <UserPlus className="h-4 w-4 text-green-400" />
            <span className="font-semibold text-sm">Student Enrollment Flow</span>
          </div>
          <div className="flex items-center justify-around flex-wrap gap-2 text-center text-xs">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <div className="font-medium text-blue-400">POST /enroll</div>
              <div className="text-muted-foreground">Student email</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-purple-500/10">
              <div className="font-medium text-purple-400">Auto-Detect Tenant</div>
              <div className="text-muted-foreground">Duplicate prevention</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-green-500/10">
              <div className="font-medium text-green-400">Assign Credits</div>
              <div className="text-muted-foreground">7,500 credits/year</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-orange-500/10">
              <div className="font-medium text-orange-400">Auto Password</div>
              <div className="text-muted-foreground">prefix + "2024"</div>
            </div>
          </div>
        </motion.div>

        {/* Seeded Tenants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex items-center justify-center gap-4 text-xs text-muted-foreground"
        >
          <Users className="h-4 w-4 text-purple-400" />
          <span>Seeded tenants: <span className="text-blue-400 font-medium">RVRJC</span> (primary) + <span className="text-green-400 font-medium">VNR VJIET</span> (demo)</span>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiTenantSlide;
