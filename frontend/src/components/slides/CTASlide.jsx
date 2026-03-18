import { motion } from 'framer-motion';
import { Handshake, ExternalLink, Mail, ArrowRight } from 'lucide-react';
import { ctaData } from '@/data/presentationData';
import { Button } from '@/components/ui/button';

const CTASlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-20"
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

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[80px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <Handshake className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">Let's Build Together</span>
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="gradient-text">{ctaData.title}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          {ctaData.subtitle}
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://llm.foundryailabs.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="rounded-full px-10 py-7 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
              data-testid="cta-demo-btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                Try Live Demo Now
                <ExternalLink className="h-5 w-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </a>
          
          <a href={`mailto:${ctaData.contact.email}`}>
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-10 py-7 text-lg font-semibold glass hover:bg-white/10"
              data-testid="cta-contact-btn"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-8 max-w-lg mx-auto"
        >
          <p className="text-lg mb-4">{ctaData.contact.message}</p>
          <a 
            href={`mailto:${ctaData.contact.email}`}
            className="text-primary hover:text-primary/80 font-semibold flex items-center justify-center gap-2"
          >
            {ctaData.contact.email}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Logo footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
              RV
            </div>
            <span className="font-semibold">RVRJC</span>
          </div>
          <span className="text-2xl text-muted-foreground">×</span>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
              F
            </div>
            <span className="font-semibold">FoundryAI Labs</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASlide;
