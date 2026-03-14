import React, { forwardRef } from 'react';
import { GridScan } from './GridScan';
import './About.css';

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="about-section min-h-screen relative overflow-hidden">
      {/* Animated grid background */}
      <div className="about-grid-bg">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#6FFCD8"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* Subtle dark overlay for readability */}
      <div className="about-overlay" />

      {/* Centered text content */}
      <div className="about-content">
        <h2 className="about-title text-8xl  md:text-8xl lg:text-9xl font-black uppercase tracking-wider text-white">About Us</h2>
        <p className="about-paragraph font-bold text-5xl">
          Acunetix 12.0 is a flagship event organised by ACES and CSI, offering
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