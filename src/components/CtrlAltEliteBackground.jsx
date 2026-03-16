import React from 'react';

const baseIcons = [
  "fa-brands fa-python",
  "fa-brands fa-java",
  "fa-brands fa-js",
  "fa-solid fa-c"
];

const icons = [
  ...baseIcons,
  ...baseIcons,
  ...baseIcons,
  ...baseIcons,
  ...baseIcons
];

export default function CtrlAltEliteBackground() {
  // We use multiple rows to fill the screen since they are rotated -30deg
  const rows = Array.from({ length: 15 });

  return (
    <section className="ctrlelite-bg-section pointer-events-auto">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <div className="ctrlelite-wrapper pointer-events-none">
        {rows.map((_, i) => (
          <div className="ctrlelite-row pointer-events-none" key={i}>
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
      <style dangerouslySetInnerHTML={{
        __html: `
        .ctrlelite-bg-section {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #1a1a1a;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            z-index: 0;
        }

        .ctrlelite-wrapper {
            position: absolute;
            width: 250vw;
            height: 250vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transform: rotate(-30deg);
        }

        .ctrlelite-row {
            position: relative;
            width: 100%;
            display: flex;
            padding: 10px 0;
            white-space: nowrap;
            font-size: 64px;
        }

        .ctrlelite-row i {
            color: rgba(0, 0, 0, 0.5);
            transition: 1s;
            padding: 0 5px;
            user-select: none;
            cursor: default;
        }

        .ctrlelite-row i:hover {
            color: #ac2a2a;
            transition: 0s;
            text-shadow: 0 0 120px #ac2a2a;
        }

        .ctrlelite-row div {
            font-size: 1.5em;
            display: flex;
        }

        .ctrlelite-row div:nth-child(1) {
            animation: animatectl1 80s linear infinite;
            animation-delay: -80s;
        }

        .ctrlelite-row div:nth-child(2) {
            animation: animatectl2 80s linear infinite;
            animation-delay: -40s;
        }

        @keyframes animatectl1 {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        @keyframes animatectl2 {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-200%); }
        }
      `}} />
    </section>
  );
}
