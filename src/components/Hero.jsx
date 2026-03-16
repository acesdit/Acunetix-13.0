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

import React, { forwardRef, useState, useEffect } from "react";
import heroVideo from "../assets/Hero.mp4";
import ShinyText from "../components/ShinyText";
import FuzzyText from "../components/FuzzyText";

const TARGET_DATE = new Date().getTime() + 1000 * 3600 * 48;

function pad(n) {
  return n < 10 ? "0" + n : n;
}

const Hero = forwardRef((props, ref) => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      let secondsLeft = (TARGET_DATE - currentDate) / 1000;

      const days = pad(parseInt(secondsLeft / 86400));
      secondsLeft = secondsLeft % 86400;

      const hours = pad(parseInt(secondsLeft / 3600));
      secondsLeft = secondsLeft % 3600;

      const minutes = pad(parseInt(secondsLeft / 60));
      const seconds = pad(parseInt(secondsLeft % 60));

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative w-full min-h-screen h-[100dvh] overflow-hidden flex items-center justify-center bg-black">
      {/* Video background with dual sources */}
    <section
      ref={ref}
      className="relative w-full min-h-screen h-[100dvh] overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
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
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">

        <div className="w-full flex justify-center mb-6">
          <FuzzyText
            fontSize="clamp(2.5rem, 11vw, 12rem)"
            fontWeight={900}
            fontFamily="Audiowide Local"
            baseIntensity={0.12}
            hoverIntensity={0.4}
            fuzzRange={25}
            direction="horizontal"
            // gradient={["#ffffff", "#47A88A", "#ffffff"]}
            className="max-w-[95vw]"
          >
            ACUNETIX 13.0
          </FuzzyText>
        </div>

        {/* Countdown Clock */}
        <div className="mt-12 relative">

          <div id="countdown">
            <div id="tiles">
              <span>{time.days}</span>
              <span>{time.hours}</span>
              <span>{time.minutes}</span>
              <span>{time.seconds}</span>
            </div>

            <div className="labels">
              <li>
                <ShinyText
                  text="Days"
                  speed={3}
                  color="#289371"
                  shineColor="#7fffd4"
                />
              </li>

              <li>
                <ShinyText
                  text="Hours"
                  speed={3}
                  color="#289371"
                  shineColor="#7fffd4"
                />
              </li>

              <li>
                <ShinyText
                  text="Mins"
                  speed={3}
                  color="#289371"
                  shineColor="#7fffd4"
                />
              </li>

              <li>
                <ShinyText
                  text="Secs"
                  speed={3}
                  color="#289371"
                  shineColor="#7fffd4"
                />
              </li>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;

