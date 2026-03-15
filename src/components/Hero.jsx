import React, { forwardRef, useState, useEffect } from 'react';
import shibuyaCrossing from '../assets/shibuya crossing_2.png';

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
    <section
      ref={ref}
      id="home"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${shibuyaCrossing})` }}
    >
      {/* Countdown – positioned on the billboard */}
      <div className="billboard-countdown">
        <span className="billboard-heading">EVENT STARTS IN</span>
        <span className="billboard-time" key={`t-${timeLeft.seconds}`}>
          {pad(timeLeft.days)}:{pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
        </span>
      </div>

      {/* Acunetix 13.0 Card with Glitch Effect */}
      <div className="acunetix-card">
        <div className="acunetix-card-inner flex justify-center items-center w-full mt-8">
          <h1
            className="mx-auto"
            style={{
              fontFamily: "'Audiowide Local', 'Audiowide', Arial, sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(3rem, 14vw, 10rem)',
              lineHeight: 1,
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap',
              color: '#fff',
              textTransform: 'uppercase',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            Acunetix 13.0
          </h1>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;