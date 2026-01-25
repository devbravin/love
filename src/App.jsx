import { useState, useEffect, useCallback } from 'react';
import KeywordGate from './components/KeywordGate';
import BackgroundAnimations from './components/BackgroundAnimations';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MemoriesSection from './components/MemoriesSection';
import TimelineSection from './components/TimelineSection';
import QuotesSection from './components/QuotesSection';
import ReasonsSection from './components/ReasonsSection';
import FinalSection from './components/FinalSection';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem('birthday_unlocked') === 'true';
    setIsUnlocked(unlocked);
  }, []);

  const handleUnlock = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsUnlocked(true);
      setIsTransitioning(false);
    }, 400);
  }, []);

  const handleReset = useCallback(() => {
    localStorage.removeItem('birthday_unlocked');
    setIsTransitioning(true);
    setTimeout(() => {
      setIsUnlocked(false);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  }, []);

  if (!isUnlocked) {
    return (
      <div className={`transition-opacity duration-400 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <BackgroundAnimations />
        <KeywordGate onUnlock={handleUnlock} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen overflow-x-hidden transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      <BackgroundAnimations />
      <Header onReset={handleReset} />
      
      <main>
        <HeroSection />
        <MemoriesSection />
        <TimelineSection />
        <QuotesSection />
        <ReasonsSection />
        <FinalSection />
      </main>
    </div>
  );
}

export default App;
