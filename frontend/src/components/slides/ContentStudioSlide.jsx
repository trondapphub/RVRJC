import { motion } from 'framer-motion';
import { Palette, FileText, Volume2, Image, Share2, Video, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const topFeatures = [
  { 
    icon: Video, 
    emoji: '🎥',
    title: 'AI Reel & Video Generator', 
    desc: '1-Click Content Creation',
    details: ['Ideas → Instagram reels', 'YouTube shorts', 'Educational videos'],
    example: '"Explain AI in 30 sec" → Full video',
    benefit: 'Create 100+ videos/day',
    color: '#EC4899'
  },
  { 
    icon: FileText, 
    emoji: '🧠',
    title: 'Script + Storyboard', 
    desc: 'Auto Content Planning',
    details: ['Viral hooks', 'Scene-by-scene breakdown', 'Structured flow'],
    example: 'Topic → Complete script',
    benefit: 'No creative block',
    color: '#8B5CF6'
  },
  { 
    icon: Volume2, 
    emoji: '🎙️',
    title: 'AI Voiceover', 
    desc: 'Multilingual Dubbing',
    details: ['Text → Natural voice', '12+ languages', 'Multiple accents'],
    example: 'Script → Pro narration',
    benefit: 'No recording needed',
    color: '#10B981'
  },
  { 
    icon: Image, 
    emoji: '🎨',
    title: 'Auto Visuals', 
    desc: 'Thumbnails & Graphics',
    details: ['Video backgrounds', 'Scene visuals', 'Click-worthy thumbnails'],
    example: 'Topic → Scroll-stopping art',
    benefit: 'No design skills needed',
    color: '#F97316'
  },
  { 
    icon: Share2, 
    emoji: '📊',
    title: 'Multi-Platform Publish', 
    desc: 'Scale Your Reach',
    details: ['Instagram', 'YouTube', 'TikTok (soon)'],
    example: 'One click → All platforms',
    benefit: 'Build audience fast',
    color: '#3B82F6'
  }
];

const ContentStudioSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="content-studio-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-4">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
              <Palette className="h-5 w-5 text-pink-500" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Studio AI</div>
              <div className="text-xs text-pink-400">studio.saketh.ai</div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">AI Content Creation Studio</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            From idea to viral content in minutes - videos, reels, scripts & more
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
                <div className="space-y-1 mb-2">
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: feature.color }} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground italic mb-2 text-center">
                  {feature.example}
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

        {/* Student Benefits + Monetization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-4 mb-4 border border-pink-500/30 bg-pink-500/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-pink-500" />
            <span className="font-semibold">Student Benefits & Monetization</span>
          </div>
          <div className="flex items-center justify-around flex-wrap gap-4 text-center">
            <div>
              <div className="text-xs text-muted-foreground">Create</div>
              <div className="text-sm font-medium">Reels, videos, scripts</div>
            </div>
            <div className="text-pink-500">→</div>
            <div>
              <div className="text-xs text-muted-foreground">Publish</div>
              <div className="text-sm font-medium">Instagram, YouTube, TikTok</div>
            </div>
            <div className="text-pink-500">→</div>
            <div>
              <div className="text-xs text-muted-foreground">Monetize</div>
              <div className="text-sm font-medium text-pink-400">Freelance content + Ad revenue</div>
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
          <a href="https://studio.saketh.ai" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 bg-pink-600 hover:bg-pink-500">
              Try Studio AI <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentStudioSlide;
