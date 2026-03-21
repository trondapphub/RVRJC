import { motion } from 'framer-motion';
import { ShieldCheck, DollarSign, GraduationCap, CheckCircle2, RefreshCw, Target, Award } from 'lucide-react';

const requirements = [
  'Complete all 4 semesters of the AI Engineer program',
  'Submit all required GitHub projects with passing reviews',
  'Maintain minimum attendance and credit usage',
  'Actively participate in placement preparation activities',
  'Build minimum 5 portfolio-ready AI projects'
];

const PlacementGuaranteeSlide = () => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden py-12"
      data-testid="placement-guarantee-slide"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-green-500/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-3 border border-green-500/30">
            <ShieldCheck className="h-4 w-4 text-green-500" />
            <span className="text-sm font-bold text-green-400">Placement Guarantee</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            No Placement? <span className="text-green-400">Full Refund.</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            We stand behind our program — if a student doesn't get placed after completing all requirements, we refund 2 years of fees
          </p>
        </motion.div>

        {/* Pricing & Refund Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-5 mb-4 border border-green-500/30 bg-green-500/5"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Per Student / Year</div>
              <div className="text-3xl font-bold text-blue-400">$300</div>
              <div className="text-xs text-muted-foreground">≈ ₹25,000/year</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">2-Year Program Cost</div>
              <div className="text-3xl font-bold text-purple-400">$600</div>
              <div className="text-xs text-muted-foreground">Total per student</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Refund If No Placement</div>
              <div className="text-3xl font-bold text-green-400">$600</div>
              <div className="text-xs text-muted-foreground font-medium text-green-400">100% money back</div>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-4 mb-4"
        >
          <div className="flex items-center gap-2 mb-3 justify-center">
            <RefreshCw className="h-4 w-4 text-blue-400" />
            <span className="font-semibold text-sm">How the Guarantee Works</span>
          </div>
          <div className="flex items-center justify-around flex-wrap gap-2 text-center text-xs">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <DollarSign className="h-4 w-4 text-blue-400 mx-auto mb-1" />
              <div className="font-medium text-blue-400">Student Pays</div>
              <div className="text-muted-foreground">$300/yr × 2 yrs</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-purple-500/10">
              <GraduationCap className="h-4 w-4 text-purple-400 mx-auto mb-1" />
              <div className="font-medium text-purple-400">Completes Program</div>
              <div className="text-muted-foreground">All 4 semesters + projects</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-orange-500/10">
              <Target className="h-4 w-4 text-orange-400 mx-auto mb-1" />
              <div className="font-medium text-orange-400">Placement Drive</div>
              <div className="text-muted-foreground">AI-powered portfolio</div>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
              <Award className="h-4 w-4 text-green-400 mx-auto mb-1" />
              <div className="font-medium text-green-400">Placed or Refunded</div>
              <div className="text-muted-foreground">Zero risk for students</div>
            </div>
          </div>
        </motion.div>

        {/* Requirements for Refund */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-4"
          >
            <div className="font-semibold text-sm mb-2 text-blue-400">Refund Eligibility Requirements</div>
            <div className="space-y-1.5">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{req}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="glass rounded-xl p-4"
          >
            <div className="font-semibold text-sm mb-2 text-green-400">Cost Estimator (Per Department)</div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Departments</span><span className="font-medium">12</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Students per department</span><span className="font-medium">100</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>CodeFoundry per student</span><span className="font-medium">$500</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Avg total per student</span><span className="font-medium">$532</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-medium">We charge per student</span>
                <span className="font-bold text-green-400">$600</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Confidence Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <blockquote className="text-base md:text-lg font-bold">
            "We're so confident in our program that we guarantee placement —
            <br />
            <span className="text-green-400">or your money back. Zero risk.</span>"
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default PlacementGuaranteeSlide;
