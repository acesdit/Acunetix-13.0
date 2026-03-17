import React, { forwardRef } from 'react';
import TiltedCard from './TiltedCard';
import ShapeGrid from './ShapeGrid';

const sponsors = [
  {
    image: 'https://placehold.co/300x300/1a1a1a/00ffc8?text=Sponsor+1',
    name: 'Sponsor 1',
  },
  {
    image: 'https://placehold.co/300x300/1a1a1a/00ffc8?text=Sponsor+2',
    name: 'Sponsor 2',
  },
  {
    image: 'https://placehold.co/300x300/1a1a1a/00ffc8?text=Sponsor+3',
    name: 'Sponsor 3',
  },
];

const Sponsors = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="sponsors" className="relative w-full min-h-screen px-4 sm:px-6 lg:px-8 bg-black overflow-hidden flex items-center">
      {/* ShapeGrid background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <ShapeGrid
          direction="diagonal"
          speed={0.5}
          borderColor="#00ffc826"
          squareSize={40}
          hoverFillColor="#222"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2
          className="uppercase tracking-wider text-center mb-16"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            letterSpacing: '0.08em',
            lineHeight: 1.05,
          }}
        >
          <span className="text-white">Our Sponsors</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 lg:gap-10 place-items-center items-center">
          {sponsors.map((sponsor, i) => (
            <TiltedCard
              key={i}
              imageSrc={sponsor.image}
              altText={sponsor.name}
              captionText={sponsor.name}
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <p className="text-white text-lg font-bold px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm mt-[250px]">
                  {sponsor.name}
                </p>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Sponsors.displayName = 'Sponsors';
export default Sponsors;