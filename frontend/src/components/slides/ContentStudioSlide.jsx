import { motion } from 'framer-motion';
import { Palette, FileText, Volume2, Image, Hash, Video, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: FileText, title: "AI Script Generator", desc: "YouTube, Shorts, Reels & captions" },
  { icon: Volume2, title: "Voice Narration", desc: "ElevenLabs integration, multiple voices" },
  { icon: Image, title: "AI Image Creator", desc: "Thumbnails & social visuals with GPT" },
  { icon: Hash, title: "Hashtag Generator", desc: "Trending tags for YT, IG & TikTok" },
  { icon: Video, title: "Platform Optimized", desc: "Content tailored per platform" },
  { icon: Palette, title: "No Design Skills", desc: "Professional output instantly" }
];

const platforms = [
  { name: "YouTube", duration: "8-10 min videos" },
  { name: "Shorts", duration: "60 sec" },
  { name: "Reels", duration: "60 sec" },
  { name: "TikTok", duration: "Optimized" }
];

const ContentStudioSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-16"
      data-testid="content-studio-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-6">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
              <Palette className="h-5 w-5 text-pink-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Content Studio</div>
              <div className="text-xs text-pink-400">studio.saketh.ai</div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">AI Content Studio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create professional content across all platforms with AI-powered tools
          </p>
        </motion.div>

        {/* Platform badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-4 gap-4 mb-8"
        >
          {platforms.map((platform, index) => (
            <div key={index} className="glass rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-pink-500">{platform.name}</div>
              <div className="text-xs text-muted-foreground">{platform.duration}</div>
            </div>
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
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/5 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-pink-500" />
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
          <a href="https://studio.saketh.ai" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 bg-pink-600 hover:bg-pink-500">
              Try Content Studio <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentStudioSlide;
