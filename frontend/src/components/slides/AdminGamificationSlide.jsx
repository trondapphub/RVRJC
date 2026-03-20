import { motion } from 'framer-motion';
import { Trophy, BookOpenCheck, Download, Medal, Star, BarChart3, FileCheck, Users, Flame, Award } from 'lucide-react';

const adminFeatures = [
  { icon: FileCheck, title: 'Submission Review', desc: 'Approve/reject with feedback, auto-award points, stats dashboard', color: '#8B5CF6' },
  { icon: BookOpenCheck, title: '12 Department Curricula', desc: 'Engineering department selector, 4-semester tabs, expandable tasks', color: '#3B82F6' },
  { icon: BarChart3, title: 'Compare Departments', desc: 'Side-by-side comparison (up to 3), download curriculum PDF', color: '#10B981' },
  { icon: Download, title: 'Top Talent Export', desc: 'Recruiter-ready PDF download of top performing students', color: '#F97316' }
];

const badges = [
  { name: 'First Step', desc: '1st submission', color: '#3B82F6' },
  { name: 'Task Master', desc: '10 tasks done', color: '#8B5CF6' },
  { name: 'Achiever', desc: '500 points', color: '#10B981' },
  { name: 'Sem 1 Star', desc: 'Semester complete', color: '#F97316' },
  { name: 'Dept Top 10', desc: 'Department leader', color: '#EC4899' },
  { name: 'College Top 10', desc: 'Institution leader', color: '#EF4444' },
  { name: 'AI Builder', desc: 'AI project built', color: '#06B6D4' },
  { name: 'Code Master', desc: 'Code excellence', color: '#EAB308' },
  { name: '5-Day Streak', desc: 'Consistency', color: '#14B8A6' },
  { name: '500 Club', desc: 'Elite member', color: '#F43F5E' }
];

const rankingTypes = [
  { title: 'Global', desc: 'All students across college', color: '#EAB308' },
  { title: 'Department', desc: 'Within your branch', color: '#3B82F6' },
  { title: 'Monthly', desc: 'This month\'s top performers', color: '#8B5CF6' },
  { title: 'Projects', desc: 'By project submissions', color: '#10B981' }
];

const AdminGamificationSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="admin-gamification-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3">
            <Trophy className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">Admin Portal & Gamification</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Review, Track & Gamify</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Powerful admin tools + leaderboard & badges to drive student engagement
          </p>
        </motion.div>

        {/* Admin Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {adminFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass rounded-xl p-3 border border-border"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: `${item.color}20` }}>
                  <Icon className="h-4 w-4" style={{ color: item.color }} />
                </div>
                <h4 className="font-bold text-xs" style={{ color: item.color }}>{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Leaderboard Rankings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-3 mb-3"
        >
          <div className="flex items-center gap-2 mb-2 justify-center">
            <Medal className="h-4 w-4 text-amber-500" />
            <span className="font-semibold text-sm">4 Ranking Types</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {rankingTypes.map((rank, i) => (
              <div key={i} className="text-center p-2 rounded-lg" style={{ backgroundColor: `${rank.color}10` }}>
                <div className="text-xs font-bold" style={{ color: rank.color }}>{rank.title}</div>
                <div className="text-xs text-muted-foreground">{rank.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 10 Badge Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass rounded-xl p-3 mb-3 border border-amber-500/30 bg-amber-500/5"
        >
          <div className="flex items-center gap-2 mb-2 justify-center">
            <Award className="h-4 w-4 text-amber-500" />
            <span className="font-semibold text-sm">10 Achievement Badges</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-1 px-2 py-1 rounded-full text-xs border" style={{ borderColor: `${badge.color}40`, backgroundColor: `${badge.color}10` }}>
                <Star className="h-3 w-3" style={{ color: badge.color }} />
                <span style={{ color: badge.color }}>{badge.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How to Improve + Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-6 text-xs"
        >
          <div className="flex items-center gap-2 glass px-3 py-2 rounded-full">
            <Flame className="h-3 w-3 text-orange-400" />
            <span className="text-muted-foreground">"How to Improve" tips with point values</span>
          </div>
          <div className="flex items-center gap-2 glass px-3 py-2 rounded-full">
            <Users className="h-3 w-3 text-blue-400" />
            <span className="text-muted-foreground">My Rank card: global + dept rank + points</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminGamificationSlide;
