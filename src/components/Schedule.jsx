import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CometCard } from './comet-card';
import day1Svg from '../assets/cards/day-1.svg';
import day2Svg from '../assets/cards/day-2.svg';
import day3Svg from '../assets/cards/day-3.svg';

const events = [
    { id: 1, title: 'Day 1', subtitle: 'Opening Ceremony', image: day1Svg },
    { id: 2, title: 'Day 2', subtitle: 'Main Events', image: day2Svg },
    { id: 3, title: 'Day 3', subtitle: 'Grand Finale', image: day3Svg },
];

const Schedule = forwardRef((props, ref) => {
    const navigate = useNavigate();

    return (
        <section ref={ref} id="schedule" className="events-section"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,255,200,0.18) 0%, rgba(0,255,200,0.06) 70%, #000 80%)", position: "relative" }}
        >
            {/* Remove this comment to apply particle effect (would not recommend cuz it looks shit) */}
            {/* <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                <Particles
                    particleColors={["#ffffff"]}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div> */}

            <h2 className="events-heading text-2xl md:text-7xl lg:text-8xl" style={{ position: 'relative', zIndex: 1 }}>Schedule</h2>

            <div className="stacked-cards-container" style={{ position: 'relative', zIndex: 1 }}>
                {events.map((evt, idx) => (
                    <div
                        key={evt.id}
                        className={`stacked-card stacked-card-${idx}`}
                        style={{ zIndex: idx + 1 }}
                    >
                        <CometCard className="stacked-comet-card">
                            <div
                                className="stacked-card-content"
                                onClick={() => navigate(`/schedule/${evt.id}`)}
                                style={evt.image ? { backgroundImage: `url(${evt.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                            >
                                {!evt.image && (
                                    <>
                                        <span className="stacked-card-number">0{evt.id}</span>
                                        <h3 className="stacked-card-title">{evt.title}</h3>
                                        <p className="stacked-card-subtitle">{evt.subtitle}</p>
                                        <span className="event-card-cta 5xl">View Schedule →</span>
                                    </>
                                )}
                            </div>
                        </CometCard>
                    </div>
                ))}
            </div>
        </section>
    );
});

Schedule.displayName = 'Schedule';
export default Schedule;