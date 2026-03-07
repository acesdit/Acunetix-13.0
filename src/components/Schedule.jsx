import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CometCard } from './comet-card';

const events = [
    { id: 1, title: 'Day 1', subtitle: 'Opening Ceremony' },
    { id: 2, title: 'Day 2', subtitle: 'Main Events' },
    { id: 3, title: 'Day 3', subtitle: 'Grand Finale' },
];

const Schedule = forwardRef((props, ref) => {
    const navigate = useNavigate();

    return (
        <section ref={ref} id="events" className="events-section">
            <h2 className="events-heading">Events</h2>

            <div className="stacked-cards-container">
                {events.map((evt, idx) => (
                    <div
                        key={evt.id}
                        className={`stacked-card stacked-card-${idx}`}
                        style={{ zIndex: idx + 1 }}
                    >
                        <CometCard className="stacked-comet-card">
                            <div
                                className="stacked-card-content"
                                onClick={() => navigate('/schedule')}
                            >
                                <span className="stacked-card-number">0{evt.id}</span>
                                <h3 className="stacked-card-title">{evt.title}</h3>
                                <p className="stacked-card-subtitle">{evt.subtitle}</p>
                                <span className="event-card-cta">View Schedule →</span>
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