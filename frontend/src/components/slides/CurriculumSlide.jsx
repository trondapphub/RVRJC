import { motion } from 'framer-motion';
import { BookOpenCheck, Users, GraduationCap, Briefcase, MessageSquare, RefreshCw, Building2 } from 'lucide-react';

const departments = [
  { code: 'CSE', name: 'Computer Science', color: '#3B82F6' },
  { code: 'AI/ML', name: 'CSE (AI & ML)', color: '#8B5CF6' },
  { code: 'DS', name: 'CSE (Data Science)', color: '#06B6D4' },
  { code: 'IoT', name: 'CSE (IoT)', color: '#10B981' },
  { code: 'IT', name: 'Information Tech', color: '#F97316' },
  { code: 'ECE', name: 'Electronics', color: '#EC4899' },
  { code: 'EEE', name: 'Electrical', color: '#EAB308' },
  { code: 'MECH', name: 'Mechanical', color: '#14B8A6' },
  { code: 'CIVIL', name: 'Civil Engineering', color: '#6366F1' },
  { code: 'CHEM', name: 'Chemical Engg', color: '#F43F5E' },
  { code: 'MCA', name: 'Computer Apps', color: '#A855F7' },
  { code: 'CSBS', name: 'CSE & Business', color: '#84CC16' }
];

const semesters = [
  { label: 'S1', name: 'AI Foundations', color: '#3B82F6' },
  { label: 'S2', name: 'AI for Department', color: '#8B5CF6' },
  { label: 'S3', name: 'Advanced AI & Industry', color: '#F97316' },
  { label: 'S4', name: 'Capstone & Placement', color: '#10B981' }
];

const CurriculumSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="curriculum-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3">
            <BookOpenCheck className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">AI-Enabled Curriculum</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Every Department, AI-Enabled</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Curriculum updated with HOD guidance — every student graduates with an AI portfolio employers demand
          </p>
        </motion.div>

        {/* 12 Departments Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-3 mb-4"
        >
          <div className="text-xs font-semibold mb-2 text-muted-foreground">12 Engineering Departments</div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {departments.map((dept, i) => (
              <div key={i} className="flex items-center gap-1.5 p-1.5 rounded-lg border border-border hover:bg-white/5 transition-all">
                <div className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: dept.color }}>
                  {dept.code.substring(0, 2)}
                </div>
                <span className="text-xs text-muted-foreground truncate">{dept.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4-Semester Track */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-3 mb-4"
        >
          <div className="text-xs font-semibold mb-2 text-muted-foreground">4-Semester Learning Track</div>
          <div className="grid grid-cols-4 gap-2">
            {semesters.map((sem, i) => (
              <div key={i} className="text-center p-2 rounded-lg relative" style={{ backgroundColor: `${sem.color}10` }}>
                <div className="text-xs font-bold" style={{ color: sem.color }}>{sem.label}</div>
                <div className="text-xs text-muted-foreground">{sem.name}</div>
                {i < 3 && <div className="absolute top-1/2 -right-1.5 text-muted-foreground hidden md:block text-xs">→</div>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* HOD-Driven + Industry Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-3 border border-blue-500/30 bg-blue-500/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-4 w-4 text-blue-400" />
              <span className="font-semibold text-sm text-blue-400">HOD-Driven Updates</span>
            </div>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><RefreshCw className="h-3 w-3 text-blue-400 flex-shrink-0" /> Curriculum updated based on HOD feedback</div>
              <div className="flex items-center gap-2"><Users className="h-3 w-3 text-blue-400 flex-shrink-0" /> Department-specific AI tasks & projects</div>
              <div className="flex items-center gap-2"><GraduationCap className="h-3 w-3 text-blue-400 flex-shrink-0" /> Industry software + AI tools per branch</div>
              <div className="flex items-center gap-2"><Building2 className="h-3 w-3 text-blue-400 flex-shrink-0" /> Placement partners mapped per department</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="glass rounded-xl p-3 border border-green-500/30 bg-green-500/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-4 w-4 text-green-400" />
              <span className="font-semibold text-sm text-green-400">Why Employers Demand AI</span>
            </div>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div>Every employer now expects AI skillsets from graduates</div>
              <div>Students without AI portfolio get filtered out</div>
              <div>AI-enabled graduates command <span className="text-green-400 font-medium">2-3x higher packages</span></div>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {['GitHub Copilot', 'ChatGPT API', 'LangChain', 'TensorFlow', 'Docker', 'AWS'].map((tool, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">{tool}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-6 text-center text-xs"
        >
          {[
            { value: '13+', label: 'Tasks/Dept', color: '#3B82F6' },
            { value: '2,550', label: 'Points/Track', color: '#F97316' },
            { value: '5', label: 'GitHub Repos', color: '#10B981' },
            { value: '24', label: 'Months', color: '#8B5CF6' },
            { value: 'PDF', label: 'Downloadable', color: '#EC4899' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-lg font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CurriculumSlide;
