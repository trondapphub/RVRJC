import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Home, Presentation, Moon, Sun } from 'lucide-react';
import { slides } from '@/data/presentationData';
import HeroSlide from '@/components/slides/HeroSlide';
import ProblemSlide from '@/components/slides/ProblemSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import PlatformsSlide from '@/components/slides/PlatformsSlide';
import LLMPlatformSlide from '@/components/slides/LLMPlatformSlide';
import AgentOSSlide from '@/components/slides/AgentOSSlide';
import VoiceAgentsSlide from '@/components/slides/VoiceAgentsSlide';
import ContentStudioSlide from '@/components/slides/ContentStudioSlide';
import CodeFoundrySlide from '@/components/slides/CodeFoundrySlide';
import K12AcademySlide from '@/components/slides/K12AcademySlide';
import SSOAuthSlide from '@/components/slides/SSOAuthSlide';
import MultiTenantSlide from '@/components/slides/MultiTenantSlide';
import StudentPortalSlide from '@/components/slides/StudentPortalSlide';
import AdminGamificationSlide from '@/components/slides/AdminGamificationSlide';
import SSOTiersSlide from '@/components/slides/SSOTiersSlide';
import QuotaSlide from '@/components/slides/QuotaSlide';
import QuotaArchitectureSlide from '@/components/slides/QuotaArchitectureSlide';
import TransformationSlide from '@/components/slides/TransformationSlide';
import WhyAINowSlide from '@/components/slides/WhyAINowSlide';
import MandatoryEnrollmentSlide from '@/components/slides/MandatoryEnrollmentSlide';
import FounderIntroSlide from '@/components/slides/FounderIntroSlide';
import PlacementImpactSlide from '@/components/slides/PlacementImpactSlide';
import RankingImpactSlide from '@/components/slides/RankingImpactSlide';
import StudentOpportunitiesSlide from '@/components/slides/StudentOpportunitiesSlide';
import CareerImpactSlide from '@/components/slides/CareerImpactSlide';
import EarnBackSlide from '@/components/slides/EarnBackSlide';
import EarningJourneySlide from '@/components/slides/EarningJourneySlide';
import MetricsSlide from '@/components/slides/MetricsSlide';
import TimelineSlide from '@/components/slides/TimelineSlide';
import PricingSlide from '@/components/slides/PricingSlide';
import CTASlide from '@/components/slides/CTASlide';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slideComponents = {
  HeroSlide,
  ProblemSlide,
  SolutionSlide,
  PlatformsSlide,
  LLMPlatformSlide,
  AgentOSSlide,
  VoiceAgentsSlide,
  ContentStudioSlide,
  CodeFoundrySlide,
  K12AcademySlide,
  SSOAuthSlide,
  MultiTenantSlide,
  StudentPortalSlide,
  AdminGamificationSlide,
  SSOTiersSlide,
  QuotaSlide,
  QuotaArchitectureSlide,
  TransformationSlide,
  WhyAINowSlide,
  MandatoryEnrollmentSlide,
  FounderIntroSlide,
  PlacementImpactSlide,
  RankingImpactSlide,
  StudentOpportunitiesSlide,
  CareerImpactSlide,
  EarnBackSlide,
  EarningJourneySlide,
  MetricsSlide,
  TimelineSlide,
  PricingSlide,
  CTASlide
};

const PresentationPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentSlide) return;
    if (index >= 0 && index < slides.length) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slideComponents[slides[currentSlide].component];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-background"
      data-testid="presentation-page"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full overflow-y-auto md:overflow-hidden pt-12 md:pt-0 pb-4 md:pb-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls - side on desktop, bottom-right on mobile */}
      <div className="fixed right-2 bottom-16 md:bottom-auto md:right-6 md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col gap-1 md:gap-2 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0 || isAnimating}
          className="rounded-full glass w-8 h-8 md:w-10 md:h-10"
          data-testid="prev-slide-btn"
        >
          <ChevronUp className="h-3 w-3 md:h-4 md:w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1 || isAnimating}
          className="rounded-full glass w-8 h-8 md:w-10 md:h-10"
          data-testid="next-slide-btn"
        >
          <ChevronDown className="h-3 w-3 md:h-4 md:w-4" />
        </Button>
      </div>

      {/* Slide indicators - hidden on mobile via CSS */}
      <div className="fixed right-6 bottom-8 flex flex-col gap-2 z-50" data-testid="slide-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-150' 
                : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
            }`}
            data-testid={`slide-indicator-${index}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 p-2 md:p-4 flex items-center justify-between z-50">
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon" className="rounded-full glass w-8 h-8 md:w-10 md:h-10" data-testid="home-btn">
              <Home className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </Link>
          <div className="glass px-3 py-1 md:px-4 md:py-2 rounded-full">
            <span className="text-xs md:text-sm font-medium text-muted-foreground">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 md:gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsDark(!isDark)}
            className="rounded-full glass w-8 h-8 md:w-10 md:h-10"
            data-testid="theme-toggle-btn"
          >
            {isDark ? <Sun className="h-3 w-3 md:h-4 md:w-4" /> : <Moon className="h-3 w-3 md:h-4 md:w-4" />}
          </Button>
          <Link to="/" className="hidden md:block">
            <Button variant="outline" className="rounded-full glass gap-2" data-testid="dashboard-link">
              <Presentation className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-muted z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-orange-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Keyboard hints */}
      <div className="fixed bottom-8 left-4 md:left-6 glass px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs text-muted-foreground z-50 hidden md:block">
        Use ↑↓ or swipe to navigate
      </div>
    </div>
  );
};

export default PresentationPage;
