import React from 'react';

const icons = [
  "fa-solid fa-shield-halved",
  "fa-solid fa-gear",
  "fa-solid fa-folder",
  "fa-solid fa-code",
  "fa-solid fa-bug",
  "fa-solid fa-code-compare",
  "fa-solid fa-microchip",
  "fa-solid fa-code-branch",
  "fa-solid fa-terminal",
  "fa-solid fa-qrcode",
  "fa-solid fa-fire-extinguisher",
  "fa-solid fa-laptop-code",
  "fa-solid fa-ghost",
  "fa-solid fa-diagram-project",
  "fa-solid fa-file-code",
  "fa-solid fa-cubes",
  "fa-solid fa-dice",
  "fa-solid fa-code-fork",
  "fa-solid fa-chess-rook"
];

export default function BugBountyBackground() {
  // We use multiple rows to fill the screen since they are rotated -30deg
  const rows = Array.from({ length: 15 });

  return (
    <section className="bugbounty-bg-section pointer-events-auto">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <div className="bugbounty-wrapper pointer-events-none">
        {rows.map((_, i) => (
          <div className="bugbounty-row pointer-events-none" key={i}>
            <div className="pointer-events-none">
              {icons.map((icon, idx) => (
                <i key={`a-${idx}`} className={`${icon} pointer-events-auto`}></i>
              ))}
            </div>
            <div className="pointer-events-none">
              {icons.map((icon, idx) => (
                <i key={`b-${idx}`} className={`${icon} pointer-events-auto`}></i>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .bugbounty-bg-section {
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: #0e0d0d;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            z-index: 0;
            top: 0;
            left: 0;
        }

        .bugbounty-wrapper {
            position: absolute;
            width: 250vw;
            height: 250vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transform: rotate(-30deg);
        }

        .bugbounty-row {
            position: relative;
            width: 100%;
            display: flex;
            padding: 10px 0;
            white-space: nowrap;
            font-size: 64px;
        }

        .bugbounty-row i {
            color: rgba(0, 0, 0, 0.5);
            transition: 1s;
            padding: 0 5px;
            user-select: none;
            cursor: default;
        }

        .bugbounty-row i:hover {
            color: #ac2a2a;
            transition: 0s;
            text-shadow: 0 0 120px #ac2a2a;
        }

        .bugbounty-row div {
            font-size: 1.5em;
            display: flex;
        }

        .bugbounty-row div:nth-child(1) {
            animation: animatebb1 80s linear infinite;
            animation-delay: -80s;
        }

        .bugbounty-row div:nth-child(2) {
            animation: animatebb2 80s linear infinite;
            animation-delay: -40s;
        }

        @keyframes animatebb1 {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        @keyframes animatebb2 {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-200%); }
        }
      `}} />
    </section>
  );
}
