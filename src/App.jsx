import React, { useState, useEffect, useRef, useMemo } from 'react'
import ScrollToTop from '@/components/ScrollToTop'
import Chatbot from '@/components/Chatbot'
import AppRoutes from '@/routes/AppRoutes'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const scheduleRef = useRef(null);
  const eventRef = useRef(null);
  const sponsorsRef = useRef(null);
  const reelRef = useRef(null);

  const scrollToRefs = useMemo(() => ({
    heroRef,
    aboutRef,
    scheduleRef,
    eventRef,
    sponsorsRef,
    reelRef,
  }), []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle scroll event for navbar background and disable native scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <ScrollToTop />
      <AppRoutes
        scrollToRefs={scrollToRefs}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />
      <Chatbot />
    </div>
  )
}

export default App
