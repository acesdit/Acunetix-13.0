import React, { forwardRef, useState, useEffect } from 'react';
import heroVideoMp4 from '../assets/bg.mp4';
import heroVideoWebm from '../assets/bg.webm'; 
// import heroPoster from '../assets/poster.jpg'; // Recommended: Add a first-frame screenshot

const TARGET_DATE = new Date('2026-03-07T00:00:00+05:30').getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(TARGET_DATE - now, 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

const Hero = forwardRef((props, ref) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative w-full min-h-screen h-[100dvh] overflow-hidden flex items-center justify-center bg-black">
      {/* Video background with dual sources */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        // poster={heroPoster} 
      >
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideoMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Darker semi-transparent overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/40 z-10 pointer-events-none" />

      {/* Centered content above video/overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 w-full px-4">
        <h1
          className="w-full text-white font-[Audiowide,Arial,sans-serif] font-normal uppercase leading-none drop-shadow-2xl"
          style={{ 
            fontSize: 'clamp(2rem, 11vw, 12rem)', 
            textAlign: 'center',
            width: '100%',
            display: 'block',
            whiteSpace: 'nowrap' 
          }}
        >
          ACUNETIX 13.0
        </h1>
        
        <div className="mt-8 md:mt-16 w-full flex flex-col items-center">
          <span className="block text-base md:text-2xl font-semibold text-white/80 tracking-widest mb-2 uppercase">
            {Date.now() > TARGET_DATE ? "Event is Live" : "Event Starts In"}
          </span>
          <div
            className="inline-block text-2xl md:text-5xl font-mono font-bold text-white bg-black/60 backdrop-blur-sm rounded-lg px-6 py-4 shadow-2xl border border-white/10"
            style={{ width: 'fit-content', minWidth: '220px', textAlign: 'center' }}
          >
            {pad(timeLeft.days)}:{pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;