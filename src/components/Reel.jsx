import React from "react";
import video1 from "../assets/Reel-Acunetix5.mp4";
import video2 from "../assets/Reel-Acunetix6.mp4";
import video3 from "../assets/Reel-Acunetix7.mp4";

import card1 from "../assets/cards/ace_of_clubs.svg";
import card2 from "../assets/cards/king_of_hearts.svg";
import card3 from "../assets/cards/queen_of_spades.svg";
import card4 from "../assets/cards/jack_of_diamonds.svg";
import card5 from "../assets/cards/10_of_hearts.svg";
import card6 from "../assets/cards/2_of_diamonds.svg";
import card7 from "../assets/cards/5_of_spades.svg";
import card8 from "../assets/cards/3_of_hearts.svg";

const CARDS = [card1, card2, card3, card4, card5, card6, card7, card8];

// Cards scattered across the viewport with 3D tilt angles and varied sizes for depth
const CARD_POSITIONS = [
  // Large foreground cards
  { left: "38%", top: "20%", size: 110, rX: 25, rY: -30, rZ: -15, opacity: 0.9, delay: 0, drift: "driftA" },
  { left: "65%", top: "55%", size: 95, rX: -20, rY: 35, rZ: 10, opacity: 0.85, delay: 0.6, drift: "driftB" },
  // Medium cards mid-ground
  { left: "12%", top: "30%", size: 75, rX: 30, rY: -20, rZ: -25, opacity: 0.7, delay: 1.0, drift: "driftC" },
  { left: "78%", top: "15%", size: 70, rX: -15, rY: 25, rZ: 20, opacity: 0.7, delay: 0.3, drift: "driftA" },
  { left: "25%", top: "60%", size: 80, rX: 20, rY: -35, rZ: 15, opacity: 0.75, delay: 1.4, drift: "driftB" },
  { left: "55%", top: "75%", size: 72, rX: -25, rY: 20, rZ: -10, opacity: 0.7, delay: 0.9, drift: "driftC" },
  // Smaller background cards
  { left: "5%", top: "8%", size: 48, rX: 35, rY: -15, rZ: 30, opacity: 0.5, delay: 1.8, drift: "driftA" },
  { left: "88%", top: "40%", size: 50, rX: -30, rY: 40, rZ: -20, opacity: 0.5, delay: 0.4, drift: "driftB" },
  { left: "48%", top: "88%", size: 45, rX: 20, rY: -25, rZ: 35, opacity: 0.45, delay: 2.0, drift: "driftC" },
  { left: "70%", top: "3%", size: 42, rX: -35, rY: 30, rZ: -25, opacity: 0.45, delay: 1.2, drift: "driftA" },
  // Tiny distant cards
  { left: "2%", top: "70%", size: 35, rX: 40, rY: -20, rZ: 15, opacity: 0.35, delay: 2.2, drift: "driftB" },
  { left: "92%", top: "75%", size: 38, rX: -25, rY: 35, rZ: -30, opacity: 0.35, delay: 1.6, drift: "driftC" },
  { left: "20%", top: "5%", size: 40, rX: 15, rY: -40, rZ: 20, opacity: 0.4, delay: 0.7, drift: "driftB" },
  { left: "50%", top: "45%", size: 36, rX: -40, rY: 15, rZ: -35, opacity: 0.3, delay: 2.5, drift: "driftA" },
];

function FloatingCards() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ perspective: "800px" }}
      aria-hidden="true"
    >
      {CARD_POSITIONS.map((pos, i) => (
        <img
          key={i}
          src={CARDS[i % CARDS.length]}
          alt=""
          className="absolute"
          style={{
            width: `${pos.size}px`,
            height: "auto",
            left: pos.left,
            top: pos.top,
            opacity: pos.opacity,
            pointerEvents: "none",
            transformStyle: "preserve-3d",
            transform: `rotateX(${pos.rX}deg) rotateY(${pos.rY}deg) rotateZ(${pos.rZ}deg)`,
            animation: `${pos.drift} ${5 + (i % 3)}s ${pos.delay}s ease-in-out infinite`,
            filter: `drop-shadow(0 4px ${8 + pos.size * 0.1}px rgba(255,255,255,0.12))`,
            "--rx": `${pos.rX}deg`,
            "--ry": `${pos.rY}deg`,
            "--rz": `${pos.rZ}deg`,
          }}
        />
      ))}
    </div>
  );
}

function Reel() {
  return (
    <section
      className="relative min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center, rgba(0,255,200,0.18) 0%, rgba(0,255,200,0.06) 70%, #000 80%)" }}
    >
      <style>{`
        @keyframes driftA {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotateX(var(--rx)) rotateY(var(--ry)) rotateZ(var(--rz));
          }
          25% {
            transform: translateY(-8px) translateX(5px) rotateX(calc(var(--rx) + 6deg)) rotateY(calc(var(--ry) - 4deg)) rotateZ(calc(var(--rz) + 3deg));
          }
          50% {
            transform: translateY(-15px) translateX(-3px) rotateX(calc(var(--rx) - 5deg)) rotateY(calc(var(--ry) + 7deg)) rotateZ(calc(var(--rz) - 2deg));
          }
          75% {
            transform: translateY(-6px) translateX(-6px) rotateX(calc(var(--rx) + 3deg)) rotateY(calc(var(--ry) - 5deg)) rotateZ(calc(var(--rz) + 4deg));
          }
        }
        @keyframes driftB {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotateX(var(--rx)) rotateY(var(--ry)) rotateZ(var(--rz));
          }
          30% {
            transform: translateY(-12px) translateX(7px) rotateX(calc(var(--rx) - 7deg)) rotateY(calc(var(--ry) + 5deg)) rotateZ(calc(var(--rz) - 4deg));
          }
          60% {
            transform: translateY(-5px) translateX(-5px) rotateX(calc(var(--rx) + 4deg)) rotateY(calc(var(--ry) - 8deg)) rotateZ(calc(var(--rz) + 3deg));
          }
        }
        @keyframes driftC {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotateX(var(--rx)) rotateY(var(--ry)) rotateZ(var(--rz));
          }
          40% {
            transform: translateY(-10px) translateX(-6px) rotateX(calc(var(--rx) + 5deg)) rotateY(calc(var(--ry) + 6deg)) rotateZ(calc(var(--rz) - 5deg));
          }
          70% {
            transform: translateY(-16px) translateX(4px) rotateX(calc(var(--rx) - 4deg)) rotateY(calc(var(--ry) - 3deg)) rotateZ(calc(var(--rz) + 2deg));
          }
        }
      `}</style>
      <FloatingCards />
      <div className="relative z-10  max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl py-4 font-black uppercase italic text-center mb-8 text-[#00ffc8] drop-shadow-[0_0_15px_rgba(0,255,200,0.5)]">
          Carrying the Legacy
        </h2>

        <div className="flex overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible">
          {/* First Reel */}
          <a
          href="https://www.instagram.com/acunetix.dit/reel/DHblKP0qE4C/"
            
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-full mr-4 md:mr-0 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-120 rounded-2xl overflow-hidden shadow-xl">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={video1}
                 type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </a>

          {/* Second Reel */}
          <a
            href="https://www.instagram.com/acunetix.dit/reel/DHeK-3ISMWk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-full mr-4 md:mr-0 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-120 rounded-2xl overflow-hidden shadow-xl">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={video2}
                 type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </a>

          {/* Third Reel */}
          <a
            
            href="https://www.instagram.com/acunetix.dit/reel/DHdYGQDKG0E/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-full mr-4 md:mr-0 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-120 rounded-2xl overflow-hidden shadow-xl">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={video3}
                 type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reel;
