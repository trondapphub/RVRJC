import { motion } from 'framer-motion';
import { Handshake, ExternalLink, Mail, ArrowRight, Linkedin, Building2, GraduationCap, Briefcase } from 'lucide-react';
import { ctaData } from '@/data/presentationData';
import { Button } from '@/components/ui/button';

const CTASlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-10"
      data-testid="cta-slide"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1705871433057-4bf8911f136f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwYWklMjBsYWJvcmF0b3J5JTIwZGF0YSUyMHNjcmVlbnxlbnwwfHx8fDE3NzM4NDUxMjZ8MA&ixlib=rb-4.1.0&q=85')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Handshake className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">Let's Build Together</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-2"
        >
          <span className="gradient-text">{ctaData.title}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
        >
          {ctaData.subtitle}
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
        >
          <a href="https://llm.foundryailabs.io" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg"
              data-testid="cta-demo-btn"
            >
              Try Live Demo Now <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="mailto:Mohan0805@gmail.com">
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-semibold glass hover:bg-white/10"
              data-testid="cta-contact-btn"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Us
            </Button>
          </a>
        </motion.div>

        {/* Founder Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-5 max-w-2xl mx-auto mb-5"
        >
          <div className="flex items-center gap-5">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/40">
                <img
                  src="/founder.jpg"
                  alt="SasiMohan Motaparthy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Details */}
            <div className="text-left flex-1">
              <h3 className="font-bold text-lg">SasiMohan Motaparthy</h3>
              <p className="text-sm text-muted-foreground mb-2">Founder, FoundryAILabs.io AI Ecosystem</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                  <span>RVRJC Engineering College Alumni — 1997–2001 Batch</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Briefcase className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                  <span>Successful tech career at IBM, Cognizant & top consulting roles</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5 text-orange-400 flex-shrink-0" />
                  <span>Building AI platforms: FoundryAILabs.io, CodeFoundry.sh, OptimoAI.io</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <a href="mailto:Mohan0805@gmail.com" className="text-xs text-primary hover:underline flex items-center gap-1">
                  <Mail className="h-3 w-3" /> Mohan0805@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/sasim1/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline flex items-center gap-1">
                  <Linkedin className="h-3 w-3" /> LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logo footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
              RV
            </div>
            <span className="font-semibold text-sm">RVRJC</span>
          </div>
          <span className="text-xl text-muted-foreground">×</span>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
              F
            </div>
            <span className="font-semibold text-sm">FoundryAI Labs</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASlide;
