import { motion } from 'framer-motion';
import { MessageSquare, Cpu, Mic, Palette, Terminal, GraduationCap, ExternalLink, Layers } from 'lucide-react';
import { platformsData } from '@/data/presentationData';
import { Button } from '@/components/ui/button';

const iconMap = {
  MessageSquare,
  Cpu,
  Mic,
  Palette,
  Terminal,
  GraduationCap
};

const PlatformsSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-16"
      data-testid="platforms-slide"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Layers className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium">The Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{platformsData.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {platformsData.subtitle}
          </p>
        </motion.div>

        {/* Platform cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {platformsData.platforms.map((platform, index) => {
            const Icon = iconMap[platform.icon];
            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="group"
              >
                <div 
                  className="glass rounded-xl p-5 hover:bg-white/5 transition-all border border-border hover:border-opacity-50 h-full flex flex-col"
                  style={{ '--platform-color': platform.color }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${platform.color}20` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: platform.color }} />
                    </div>
                    <a
                      href={`https://${platform.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full"
                        data-testid={`platform-link-${platform.id}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-1">{platform.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3" style={{ color: platform.color }}>
                    {platform.url}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {platform.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {platform.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="text-xs px-2 py-1 rounded-full bg-muted/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href="https://llm.foundryailabs.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-500 hover:to-orange-400"
              data-testid="live-demo-cta"
            >
              Try LLM Platform Live
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PlatformsSlide;
