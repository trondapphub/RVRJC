import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroData } from '@/data/presentationData';

const HeroSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      data-testid="hero-slide"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmslMjB0ZWNobm9sb2d5JTIwYmx1ZXxlbnwwfHx8fDE3NzM4NDUxMjZ8MA&ixlib=rb-4.1.0&q=85')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo badges */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
              RV
            </div>
            <span className="text-sm font-semibold">RVRJC</span>
          </div>
          <span className="text-muted-foreground">×</span>
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
              F
            </div>
            <span className="text-sm font-semibold">FoundryAI Labs</span>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">{heroData.title}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          {heroData.subtitle}
        </motion.p>

        {/* Tagline metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12"
        >
          {heroData.tagline.split(' • ').map((item, index) => (
            <div key={index} className="glass px-6 py-3 rounded-full">
              <span className="font-semibold text-lg">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg hover:shadow-xl transition-all"
            data-testid="explore-vision-btn"
          >
            {heroData.cta.primary}
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
          <a 
            href="https://llm.foundryailabs.io" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-semibold glass hover:bg-white/10"
              data-testid="try-demo-btn"
            >
              {heroData.cta.secondary}
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSlide;
