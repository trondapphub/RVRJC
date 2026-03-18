import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Brain, ClipboardCheck, Award, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Brain, title: "Personal AI Tutor", desc: "1-on-1 adaptive learning, 24/7" },
  { icon: ClipboardCheck, title: "Homework Helper", desc: "Instant grading & explanations" },
  { icon: Users, title: "Teacher Support", desc: "Grade entire class in 5 minutes" },
  { icon: BookOpen, title: "108 Courses", desc: "Math, Science, CS, English & more" },
  { icon: Award, title: "Certifications", desc: "Industry-recognized credentials" },
  { icon: GraduationCap, title: "Career Paths", desc: "AI Engineer, Data Scientist & more" }
];

const stats = [
  { value: "108", label: "K-12 Courses" },
  { value: "324", label: "Cloud Labs" },
  { value: "Gr 6-12", label: "Coverage" },
  { value: "CBSE/ICSE", label: "Aligned" }
];

const subjects = ["Math (12)", "Science (17)", "CS & AI (15)", "English (12)", "Social (18)", "Languages (24)"];

const K12AcademySlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-16"
      data-testid="k12-academy-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">K-12 Academy</div>
              <div className="text-xs text-cyan-400">sakethacademy.com</div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">AI-Powered K-12 Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personal AI tutors, homework help & teacher support for grades 6-12
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-4 gap-4 mb-6"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-cyan-500">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Subjects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {subjects.map((subject, index) => (
            <span key={index} className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
              {subject}
            </span>
          ))}
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a href="https://sakethacademy.com" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 bg-cyan-600 hover:bg-cyan-500">
              Explore Academy <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default K12AcademySlide;
