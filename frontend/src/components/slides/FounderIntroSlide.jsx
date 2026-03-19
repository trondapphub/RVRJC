import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Building2, Linkedin, Mail, Globe } from 'lucide-react';

const FounderIntroSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="founder-intro-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-500/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-5"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border-3 border-blue-500/50 mx-auto shadow-lg shadow-blue-500/20">
            <img
              src="/founder.png"
              alt="SasiMohan Motaparthy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-1">SasiMohan Motaparthy</h2>
          <p className="text-lg gradient-text font-semibold mb-4">Founder, FoundryAILabs.io</p>
        </motion.div>

        {/* Key Identity Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 max-w-2xl mx-auto"
        >
          <div className="glass rounded-xl p-4 border border-blue-500/30 bg-blue-500/5 text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-blue-400" />
              </div>
              <span className="font-bold text-blue-400">Proud RVRJC Alumni</span>
            </div>
            <p className="text-sm text-muted-foreground">
              RVRJC Engineering College, 1997–2001 Batch. Giving back to the institution that shaped my career.
            </p>
          </div>

          <div className="glass rounded-xl p-4 border border-orange-500/30 bg-orange-500/5 text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-orange-400" />
              </div>
              <span className="font-bold text-orange-400">AI Ecosystem Builder</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Founder of FoundryAILabs.io — a complete AI ecosystem with 6 platforms powering the future of AI.
            </p>
          </div>
        </motion.div>

        {/* Career Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-4 mb-5 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-3 justify-center">
            <Briefcase className="h-4 w-4 text-purple-400" />
            <span className="font-semibold text-sm">Career Highlights</span>
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {['IBM', 'Cognizant', 'Top Consulting Roles', 'FoundryAILabs.io', 'CodeFoundry.sh', 'OptimoAI.io'].map((item, i) => (
              <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-5"
        >
          <a href="mailto:Mohan0805@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-4 w-4 text-blue-400" /> Mohan0805@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/sasim1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-4 w-4 text-blue-400" /> LinkedIn
          </a>
          <a href="https://foundryailabs.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="h-4 w-4 text-orange-400" /> foundryailabs.io
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-5 text-base italic text-muted-foreground"
        >
          "An alumnus returning to transform his college into an AI powerhouse."
        </motion.p>
      </div>
    </div>
  );
};

export default FounderIntroSlide;
