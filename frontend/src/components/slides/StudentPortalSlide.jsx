import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, FileCheck, Coins, BarChart3, Github, CheckCircle2, XCircle, Clock } from 'lucide-react';

const portalPages = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    features: ['Progress % completion', 'Credits & points balance', 'Submissions count', 'Semester progress bars', 'Active projects list'],
    color: '#3B82F6'
  },
  {
    icon: BookOpen,
    title: 'My Curriculum',
    features: ['Department-specific tasks', 'Submit button per task', 'GitHub URL dialog', 'Status tracking per task', 'Semester-wise organization'],
    color: '#8B5CF6'
  },
  {
    icon: FileCheck,
    title: 'My Submissions',
    features: ['Task & semester details', 'GitHub link display', 'Verification status', 'Admin feedback', 'History & timestamps'],
    color: '#10B981'
  },
  {
    icon: Coins,
    title: 'My Credits',
    features: ['Credit balance bars', 'Token usage tracking', 'Feature uses count', 'Top-up options', 'Usage history'],
    color: '#F97316'
  }
];

const StudentPortalSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="student-portal-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/12 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3">
            <LayoutDashboard className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">Student Portal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Complete Student Experience</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            4 dedicated pages — dashboard, curriculum, submissions & credits
          </p>
        </motion.div>

        {/* 4 Portal Pages */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          {portalPages.map((page, index) => {
            const Icon = page.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.06 }}
                className="glass rounded-xl p-3 border border-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${page.color}20` }}>
                    <Icon className="h-4 w-4" style={{ color: page.color }} />
                  </div>
                  <h4 className="font-bold text-sm" style={{ color: page.color }}>{page.title}</h4>
                </div>
                <div className="space-y-1">
                  {page.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: page.color }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Task Submission + GitHub Validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass rounded-xl p-4 mb-4 border border-green-500/30 bg-green-500/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Github className="h-5 w-5 text-green-400" />
            <span className="font-semibold">Task Submission with GitHub Validation</span>
          </div>
          <div className="flex items-center justify-around flex-wrap gap-2 text-center text-xs">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <div className="font-medium text-blue-400">Submit GitHub URL</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-purple-500/10">
              <div className="font-medium text-purple-400">Validate Format</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-orange-500/10">
              <div className="font-medium text-orange-400">Check Repo Exists</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-cyan-500/10">
              <div className="font-medium text-cyan-400">README + Commits</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-green-500/10">
              <div className="font-medium text-green-400">Pending Review</div>
            </div>
          </div>
        </motion.div>

        {/* Status Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          {[
            { icon: Clock, label: 'Not Started', color: '#6B7280' },
            { icon: Clock, label: 'Pending', color: '#F59E0B' },
            { icon: CheckCircle2, label: 'Approved', color: '#10B981' },
            { icon: XCircle, label: 'Rejected', color: '#EF4444' }
          ].map((status, i) => {
            const Icon = status.icon;
            return (
              <div key={i} className="flex items-center gap-1 text-xs">
                <Icon className="h-3 w-3" style={{ color: status.color }} />
                <span style={{ color: status.color }}>{status.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default StudentPortalSlide;
