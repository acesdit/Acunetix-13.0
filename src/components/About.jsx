import React, { forwardRef, useState, useEffect } from 'react';
import MagicRings from './MagicRings';
import './About.css';

const About = forwardRef((props, ref) => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        isMobile: window.innerWidth < 768
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scaleFactor = Math.min(Math.max(dimensions.width / 1200, 0.4), 1.0);

  return (
    <section 
      ref={ref} 
      id="about" 
      className="about-section min-h-[70vh] md:min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center bg-black px-6 py-16 md:py-0"
    >
      
      {/* BACKGROUND LAYER */}
      {/* CRITICAL: Changed pointer-events-none to pointer-events-auto for interaction */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <MagicRings
          color="#ffffff"
          
          ringCount={dimensions.isMobile ? 14 : 10}
          speed={0.5}
          attenuation={dimensions.isMobile ? 4 : 5}
          lineThickness={2}
          
          baseRadius={dimensions.isMobile ? 0.4 : 0.3 * (1 / scaleFactor)} 
          radiusStep={dimensions.isMobile ? 0.1 : 0.15 * scaleFactor}

          scaleRate={0.1}
          opacity={0.8}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          
          // --- INTERACTION SETTINGS ---
              // Must be true for movement
             // Higher value = more dramatic movement
                  // Adds depth to the movement
          clickBurst={true}       // Provides feedback on click
          // ----------------------------
          followMouse={!dimensions.isMobile} 
  mouseInfluence={dimensions.isMobile ? 0 : 0.4}
  hoverScale={dimensions.isMobile ? 1.0 : 1.3}
  parallax={dimensions.isMobile ? 0 : 0.1}
        />
      </div>

      {/* CONTENT LAYER */}
      {/* Added pointer-events-none here so the mouse "passes through" the text to the rings */}
      <div className="relative z-10 w-full flex flex-col items-center pointer-events-none">
        <div className="about-header text-center mb-8 md:mb-20">
          <h2 className="about-title text-5xl md:text-9xl font-black uppercase tracking-wider text-white mb-2">
            About Us
          </h2>
        </div>

        <p className="about-paragraph text-center text-base md:text-3xl text-gray-200 leading-relaxed max-w-4xl mx-auto px-4">
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