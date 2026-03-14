import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Timeline } from '@/components/timeline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const scheduleEvents = [
    { id: 1, name: "GAMESTROM", location: "B-508", time: "10:00 AM" },
    { id: 2, name: "ESCAPE ROOM", location: "B-409 AND B-411", time: "1:00 PM" },
    { id: 3, name: "CTRL ALT ELITE", location: "Rooftop Strategy", time: "5:00 PM" }
];

const SchedulePageNew_1 = () => {
    const navigate = useNavigate();

    const timelineData = scheduleEvents.map(evt => ({
        title: evt.time,
        content: (
            <div>
                <h3 className="text-2xl font-bold text-white mb-2">{evt.name}</h3>
                <p className="text-neutral-300"><span className="schedule-icon">📍</span> {evt.location}</p>
            </div>
        )
    }));

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar scrollToRefs={{}} isScrolled={true} />

            <div className="flex-grow relative flex flex-col items-center pt-24 pb-12">
                <button className="absolute left-8 top-28 border border-white/15 text-white px-4 py-2 rounded-lg text-sm hover:border-[#00ffc8]/50 hover:text-[#00ffc8]/90 transition-all z-10" onClick={() => navigate('/')}>
                    ← Back
                </button>
                <h1 className="schedule-title" style={{ zIndex: 1, position: 'relative' }}>Schedule</h1>
                <h2 className="schedule-subtitle text-white/70" style={{ zIndex: 1, position: 'relative', marginTop: '-0.5rem' }}>(27th March)</h2>

                {/* Timeline Container */}
                <div style={{ zIndex: 1, position: 'relative', width: '100%', maxWidth: '1200px', marginTop: '2rem' }}>
                    <Timeline data={timelineData} />
                </div>
            </div>

            <Footer scrollToRefs={{}} />
        </div>
    );
};

export default SchedulePageNew_1;
