import React, { forwardRef, useState, useEffect } from 'react';
import heroVideoMp4 from '../assets/bg.mp4';
import heroVideoWebm from '../assets/bg.webm'; 
import ShinyText from "../components/ShinyText";

const TARGET_DATE = new Date('2026-03-27T00:00:00+05:30').getTime();

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
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const TimerUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-2 shadow-2xl">
        <span className="text-2xl md:text-5xl font-mono font-bold text-white">
          {pad(value)}
        </span>
      </div>
      <ShinyText
        text={label}
        speed={3}
        color="#289371"
        shineColor="#7fffd4"
        className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]"
      />
    </div>
  );

  return (
    <section ref={ref} className="relative w-full min-h-screen h-[100dvh] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideoMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/40 z-10 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 w-full px-4">
        {/* Main Heading */}
        <h1
          className="w-full text-white font-[Audiowide,cursive] font-normal uppercase leading-none"
          style={{ 
            fontSize: 'clamp(2.5rem, 11vw, 12rem)', 
            textAlign: 'center',
            width: '100%',
            display: 'block',
            whiteSpace: 'nowrap',
            textShadow: 'none'
          }}
        >
          ACUNETIX 13.0
        </h1>

        {/* New Sub-heading Quote */}
        <p 
          className="text-white/90  tracking-[0.15em] mt-2 mb-8"
          style={{ 
            fontFamily: "'IM_Fell_DW_Pica_sc', bold",
            fontSize: 'clamp(0.8rem, 2vw, 1.5rem)'
          }}
        >
          Where the Journey is the Challenge.
        </p>
        
        <div className="mt-4 md:mt-8 w-full flex flex-col items-center">
          <span className="block text-sm md:text-xl font-semibold text-white/70 tracking-[0.4em] mb-8 uppercase">
            {Date.now() > TARGET_DATE ? "Event is Live" : "Game Begins In"}
          </span>

          <div className="flex gap-3 md:gap-6 justify-center items-center">
            <TimerUnit value={timeLeft.days} label="Days" />
            <TimerUnit value={timeLeft.hours} label="Hours" />
            <TimerUnit value={timeLeft.minutes} label="Mins" />
            <TimerUnit value={timeLeft.seconds} label="Secs" />
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;