import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Brain, ClipboardCheck, HelpCircle, FileText, Globe, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const topFeatures = [
  { 
    icon: Brain, 
    emoji: '🎓',
    title: 'Personal AI Tutor', 
    desc: 'Adaptive Learning Assistant',
    details: ['Explains concepts step-by-step', 'Adapts to student level', 'Multiple subjects'],
    benefit: 'Learn at own pace, faster mastery',
    color: '#3B82F6'
  },
  { 
    icon: ClipboardCheck, 
    emoji: '📚',
    title: 'Homework Assistant', 
    desc: 'Problem Solving with Steps',
    details: ['Step-by-step explanations', 'Logic breakdown', 'Code walkthroughs'],
    benefit: 'Better understanding + grades',
    color: '#10B981'
  },
  { 
    icon: HelpCircle, 
    emoji: '💡',
    title: 'Instant Doubt Solver', 
    desc: 'Q&A Engine',
    details: ['Ask anything technical/theoretical', 'Instant structured answers', 'No waiting'],
    benefit: 'Continuous learning loop',
    color: '#F97316'
  },
  { 
    icon: FileText, 
    emoji: '🧾',
    title: 'Notes & Summaries', 
    desc: 'Exam Preparation',
    details: ['Chapters → short notes', 'PDFs → summaries', 'Revision points'],
    benefit: 'Save hours, exam ready',
    color: '#8B5CF6'
  },
  { 
    icon: Globe, 
    emoji: '🌐',
    title: 'Multilingual Support', 
    desc: '12 Indian Languages',
    details: ['Telugu, Hindi, Tamil', 'English + regional', 'Native explanations'],
    benefit: 'Inclusive learning for all',
    color: '#EC4899'
  }
];

const K12AcademySlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="k12-academy-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Saketh.AI Academy</div>
              <div className="text-xs text-cyan-400">saketh.ai / sakethacademy.com</div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">AI-Powered Learning Platform</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Personal AI tutor for every student - learn faster, understand better
          </p>
        </motion.div>

        {/* Top 5 Features */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
          {topFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-all border border-border"
              >
                <div className="text-center mb-3">
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <div className="text-center mb-2">
                  <h4 className="font-semibold text-sm" style={{ color: feature.color }}>{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
                <div className="space-y-1 mb-3">
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: feature.color }} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                <div 
                  className="text-xs p-2 rounded-lg text-center font-medium"
                  style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                >
                  {feature.benefit}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-4 mb-4"
        >
          <div className="flex items-center justify-around flex-wrap gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-500">108</div>
              <div className="text-xs text-muted-foreground">K-12 Courses</div>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-500">324</div>
              <div className="text-xs text-muted-foreground">Cloud Labs</div>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-500">12</div>
              <div className="text-xs text-muted-foreground">Languages</div>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-500">24/7</div>
              <div className="text-xs text-muted-foreground">AI Availability</div>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-500">CBSE/ICSE</div>
              <div className="text-xs text-muted-foreground">Aligned</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a href="https://saketh.ai" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 bg-cyan-600 hover:bg-cyan-500">
              Try Saketh.AI <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default K12AcademySlide;
