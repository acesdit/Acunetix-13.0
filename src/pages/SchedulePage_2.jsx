import React from 'react';
import { useNavigate } from 'react-router-dom';
import LaserFlow from '@/components/LaserFlow';
import PixelSnow from '@/components/PixelSnow';

const scheduleEvents = [
    { id: 1, name: "BRAINIAC", location: "B-508", time: "10:00 AM", align: "left" },
    { id: 2, name: "BUG BOUNTY", location: "B-409 AND B-411", time: "1:00 PM", align: "right" },
    { id: 3, name: "BUILD-A-THON", location: "Rooftop Strategy", time: "5:00 PM", align: "left" }
];

const SchedulePage = () => {
    const navigate = useNavigate();

    return (
        <div className="schedule-page" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* LaserFlow background – centered on screen */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                pointerEvents: 'none'
            }}>
                <PixelSnow
                    color="#ffffff"
                    flakeSize={0.01}
                    minFlakeSize={1.25}
                    pixelResolution={400}
                    speed={1.25}
                    density={0.1}
                    direction={125}
                    brightness={0.5}
                    depthFade={10}
                    farPlane={30}
                    gamma={0.4545}
                    variant="round"
                />
                <LaserFlow
                    color="#00ffc8"
                    horizontalBeamOffset={0.0}
                    verticalBeamOffset={-0.45}
                    flowSpeed={0.35}
                    verticalSizing={25.0}
                    horizontalSizing={0.8}
                    fogIntensity={0.45}
                    fogScale={0.3}
                    wispDensity={1}
                    wispSpeed={15.0}
                    wispIntensity={5.0}
                    flowStrength={0.25}
                    decay={1.1}
                    falloffStart={1.2}
                    fogFallSpeed={0.6}
                />
            </div>

            {/* Content on top */}
            <button className="schedule-back-btn" style={{ zIndex: 1 }} onClick={() => navigate('/')}>
                ← Back
            </button>
            <h1 className="schedule-title" style={{ zIndex: 1, position: 'relative' }}>Schedule</h1>
            <h2 className="schedule-subtitle" style={{ zIndex: 1, position: 'relative' }}>(28th March)</h2>

            {/* Alternating Cards Container */}
            <div className="schedule-cards-container" style={{ zIndex: 1, position: 'relative' }}>
                {scheduleEvents.map((evt) => (
                    <div key={evt.id} className={`schedule-card-wrapper ${evt.align}`}>
                        <div className="schedule-card">
                            <h3 className="schedule-card-name">{evt.name}</h3>
                            <p className="schedule-card-detail">
                                <span className="schedule-icon">📍</span> {evt.location}
                            </p>
                            <p className="schedule-card-detail">
                                <span className="schedule-icon">🕒</span> {evt.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SchedulePage;
