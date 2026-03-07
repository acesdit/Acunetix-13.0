import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LaserFlow from '../animation/Backgrounds/LaserFlow';
import Navbar from './Navbar';
import Footer from './Footer';

const SchedulePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRefs = {
    heroRef: null,
    aboutRef: null,
    eventRef: null,
    sponsorsRef: null,
    reelRef: null,
  };

  const scrollToSection = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar
        scrollToRefs={scrollToRefs}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />

      <main className="grow relative">
        {/* LaserFlow background spanning 2 full viewport heights */}
        <div className="absolute inset-x-0 top-0 z-0" style={{ height: '20vh' }}>
          <LaserFlow
            color="#00ffc8"
            horizontalBeamOffset={0.1}
            verticalBeamOffset={0.0}
            flowSpeed={0.35}
            verticalSizing={2.0}
            horizontalSizing={0.5}
            fogIntensity={0.45}
            fogScale={0.3}
            wispDensity={1}
            wispSpeed={15.0}
            wispIntensity={5.0}
            flowStrength={0.25}
            decay={1.1}
            falloffStart={1.2}
            fogFallSpeed={0.6}
          />
        </div>

        {/* Content overlaid on LaserFlow */}
        <div className="relative z-10" style={{ minHeight: '200vh' }}>
          <div className="flex flex-col items-center pt-32 px-4">
            <h1
              className="text-5xl md:text-7xl font-bold text-white text-center mb-6 tracking-wider"
              style={{ fontFamily: 'VerminVibes, sans-serif' }}
            >
              Schedule
            </h1>
            <div className="w-24 h-1 bg-[#00ffc8] rounded-full mb-16" />
          </div>
        </div>
      </main>

      <Footer
        scrollToRefs={scrollToRefs}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};

export default SchedulePage;
