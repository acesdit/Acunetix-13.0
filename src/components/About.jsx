import React, { forwardRef, useState, useEffect } from 'react';
import MagicRings from './MagicRings';
import './About.css';

const About = forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      ref={ref} 
      id="about" 
     
      className="about-section min-h-0 md:min-h-screen py-20 md:py-0 relative overflow-hidden flex items-center justify-center bg-black"
    >
      
      
      <div className="absolute inset-0 z-0">
        <MagicRings
          color="#ffffff"
          colorTwo="#42fcff"
          colorthree="#ff42e9"
          ringCount={isMobile ? 10 : 6}
          baseRadius={isMobile ? 0.2 : 0.35}
          radiusStep={isMobile ? 0.08 : 0.1}
          speed={0.8}
          
          attenuation={isMobile ? 12 : 10}
          opacity={0.8}
        />
      </div>

      {/* Content Container */}
      <div className="about-content relative z-10 container mx-auto px-6 text-center">
        <h2 className="about-title text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-wider text-white mb-4">
          About Us
        </h2>
        
        <p className="about-paragraph text-lg md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Acunetix 13.0 is a flagship event organised by ACES and CSI, offering
          a range of Tech &amp; Non-Tech events. Participants take part in
          diverse competitions, showcasing their skills and earning recognition.
          With exciting prizes and a mix of solo and team events, it&apos;s a
          unique opportunity for students to shine and be part of an
          unforgettable experience.
        </p>
      </div>
    </section>
  );
});

About.displayName = 'About';
export default About;