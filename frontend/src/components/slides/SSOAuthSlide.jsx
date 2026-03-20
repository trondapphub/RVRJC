import { motion } from 'framer-motion';
import { Shield, Key, Users, UserCheck, Mail, Globe, Lock } from 'lucide-react';

const authFeatures = [
  {
    icon: Key,
    title: 'JWT Auth with Tenant Context',
    desc: 'Every token carries tenant_id for complete data isolation across institutions',
    color: '#3B82F6'
  },
  {
    icon: Mail,
    title: 'Email Alias Login',
    desc: 'admin@foundryailabs.io maps to admin@rvrjcce.ac.in — seamless institutional identity',
    color: '#8B5CF6'
  },
  {
    icon: Globe,
    title: 'Domain-Based Auto-Detection',
    desc: 'System auto-detects tenant from email domain — no manual selection needed',
    color: '#10B981'
  },
  {
    icon: Lock,
    title: 'Proper HTTP Security',
    desc: '401 Unauthorized / 403 Forbidden — standard security status codes enforced',
    color: '#F97316'
  }
];

const roles = [
  { name: 'Super Admin', desc: 'Platform-wide access, all tenants, billing, analytics', color: '#EF4444' },
  { name: 'Admin', desc: 'Institution-level control, student management, curriculum', color: '#8B5CF6' },
  { name: 'Student', desc: 'Personal dashboard, submissions, credits, leaderboard', color: '#3B82F6' }
];

const SSOAuthSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="sso-auth-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/12 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3">
            <Shield className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">Authentication & SSO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Enterprise-Grade Single Sign-On</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            One login, one wallet, all 6 platforms — powered by auth.foundryailabs.io
          </p>
        </motion.div>

        {/* 4 Auth Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {authFeatures.map((item, index) => {
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

        {/* 3 Role Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass rounded-xl p-4 mb-4"
        >
          <div className="flex items-center gap-2 mb-3 justify-center">
            <Users className="h-4 w-4 text-purple-400" />
            <span className="font-semibold text-sm">3 Role Types — Role-Based Routing</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {roles.map((role, i) => (
              <div key={i} className="text-center p-3 rounded-lg" style={{ backgroundColor: `${role.color}10` }}>
                <UserCheck className="h-5 w-5 mx-auto mb-1" style={{ color: role.color }} />
                <div className="text-sm font-bold" style={{ color: role.color }}>{role.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{role.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Auth Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-3 border border-blue-500/30 bg-blue-500/5"
        >
          <div className="flex items-center justify-around flex-wrap gap-2 text-center text-xs">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <div className="font-medium text-blue-400">Student Login</div>
              <div className="text-muted-foreground">@rvrjcce.ac.in</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-purple-500/10">
              <div className="font-medium text-purple-400">Auto-Detect Tenant</div>
              <div className="text-muted-foreground">RVRJC identified</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-green-500/10">
              <div className="font-medium text-green-400">JWT Issued</div>
              <div className="text-muted-foreground">tenant_id + role</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-orange-500/10">
              <div className="font-medium text-orange-400">Role-Based Portal</div>
              <div className="text-muted-foreground">Student dashboard</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SSOAuthSlide;
