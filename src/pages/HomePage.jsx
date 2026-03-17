import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Event from '@/components/Event';
import Schedule from '@/components/Schedule';
import Sponsors from '@/components/Sponsors';
import Reel from '@/components/Reel';
import Footer from '@/components/Footer';

const sectionRefByState = {
  hero: 'heroRef',
  about: 'aboutRef',
  events: 'eventRef',
  schedule: 'scheduleRef',
  sponsors: 'sponsorsRef',
  reel: 'reelRef',
};

function HomePage({ scrollToRefs, scrollToSection, isScrolled }) {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollToEvents ? 'events' : location.state?.scrollTo;
    if (!scrollTarget) return;

    const refKey = sectionRefByState[scrollTarget];
    const targetRef = refKey ? scrollToRefs?.[refKey] : null;
    if (!targetRef?.current) return;

    const timeoutId = window.setTimeout(() => {
      targetRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
      window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`);
    }, 50);

    return () => window.clearTimeout(timeoutId);
  }, [
    location.state,
    scrollToRefs?.heroRef,
    scrollToRefs?.aboutRef,
    scrollToRefs?.eventRef,
    scrollToRefs?.scheduleRef,
    scrollToRefs?.sponsorsRef,
    scrollToRefs?.reelRef,
  ]);

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black z-9999 pointer-events-none"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar
          scrollToRefs={scrollToRefs}
          scrollToSection={scrollToSection}
          isScrolled={isScrolled}
        />

        <main className="grow bg-black">
          <Hero ref={scrollToRefs.heroRef} />
          <About ref={scrollToRefs.aboutRef} />
          <Event ref={scrollToRefs.eventRef} />
          <Schedule ref={scrollToRefs.scheduleRef} />
          <Sponsors ref={scrollToRefs.sponsorsRef} />
          <Reel ref={scrollToRefs.reelRef} />
        </main>

        <Footer
          scrollToRefs={scrollToRefs}
          scrollToSection={scrollToSection}
        />
      </div>
    </>
  );
}

export default HomePage;
