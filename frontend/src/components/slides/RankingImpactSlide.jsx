import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp, BookOpen, Briefcase, Building, Globe } from 'lucide-react';

const rankingFactors = [
  { icon: Briefcase, factor: 'Placement Score', impact: '↑ High', desc: 'AI-skilled = higher employability', color: '#10B981' },
  { icon: Star, factor: 'Innovation Score', impact: '↑ High', desc: 'AI labs + projects + startups', color: '#F97316' },
  { icon: BookOpen, factor: 'Research Output', impact: '↑ Medium', desc: 'AI-assisted papers & experiments', color: '#3B82F6' },
  { icon: Building, factor: 'Industry Collab', impact: '↑ High', desc: 'FoundryAILabs = industry partner', color: '#8B5CF6' },
  { icon: Globe, factor: 'Brand Perception', impact: '↑ High', desc: 'Social media + AI visibility', color: '#EC4899' }
];

const timeline = [
  { period: 'Year 1', milestone: 'Students explore ecosystem, start building agents, templates, apps, datasets, LLMs & research papers', status: 'foundation', label: 'Foundation' },
  { period: 'Year 2', milestone: 'Overall improvements visible — placements, startups, research output & brand perception rise', status: 'growth', label: 'Improvements' },
  { period: 'Year 3', milestone: 'High impact — top rankings, national recognition, industry partnerships & startup culture', status: 'impact', label: 'High Impact' }
];

const RankingImpactSlide = () => {
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="ranking-impact-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Trophy className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">National Recognition</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Ranking & Visibility Impact</h2>
          <p className="text-lg text-muted-foreground">How RVRJC climbs the national rankings</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Ranking Factors */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 border border-border"
          >
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Key Ranking Factors Impacted
            </h3>
            <div className="space-y-3">
              {rankingFactors.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{item.factor}</span>
                        <span className="text-xs font-bold" style={{ color: item.color }}>{item.impact}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.desc}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Expected Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Big Numbers */}
            <div className="glass rounded-2xl p-6 border border-yellow-500/30 bg-gradient-to-br from-yellow-500/5 to-orange-500/5">
              <h3 className="font-semibold mb-4 text-center">Expected Outcomes (by Year 3)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-background/50">
                  <div className="text-3xl font-bold text-green-500">+20-40%</div>
                  <div className="text-xs text-muted-foreground">Placement Rate</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50">
                  <div className="text-3xl font-bold text-purple-500">3-5x</div>
                  <div className="text-xs text-muted-foreground">Student Startups</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50">
                  <div className="text-3xl font-bold text-blue-500">+50-150</div>
                  <div className="text-xs text-muted-foreground">Ranking Positions</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50">
                  <div className="text-3xl font-bold text-orange-500">#1</div>
                  <div className="text-xs text-muted-foreground">AI College in Region</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="glass rounded-2xl p-6 border border-border">
              <h3 className="font-semibold mb-4">3-Year Impact Timeline</h3>
              <div className="space-y-3">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'foundation' ? 'bg-blue-500' : 
                        item.status === 'growth' ? 'bg-purple-500' : 'bg-green-500'
                      }`} />
                      {index < 2 && <div className="w-px h-8 bg-border" />}
                    </div>
                    <div className="flex-1 -mt-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold ${
                          item.status === 'foundation' ? 'text-blue-400' : 
                          item.status === 'growth' ? 'text-purple-400' : 'text-green-400'
                        }`}>{item.period}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          item.status === 'foundation' ? 'bg-blue-500/15 text-blue-400' : 
                          item.status === 'growth' ? 'bg-purple-500/15 text-purple-400' : 'bg-green-500/15 text-green-400'
                        }`}>{item.label}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{item.milestone}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-xl p-4 text-center border border-yellow-500/30"
        >
          <div className="text-lg font-semibold">
            <span className="text-yellow-500">Goal:</span> RVRJC becomes the{' '}
            <span className="gradient-text">Top AI-Enabled College</span> in the region
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RankingImpactSlide;
