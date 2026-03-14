import React, { useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import eventsData from '../data/eventsData';
import Navbar from './Navbar';
import Footer from './Footer';

/* ── Particle Canvas — dramatic floating particles ── */
const ParticleCanvas = ({ color }) => {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // More particles, bigger, more visible
        const count = 90;
        particlesRef.current = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 0.8,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5 - 0.2,
            opacity: Math.random() * 0.7 + 0.2,
            pulse: Math.random() * Math.PI * 2,
        }));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesRef.current.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;
                p.pulse += 0.025;
                const alpha = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Main dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = color + Math.round(alpha * 255).toString(16).padStart(2, '0');
                ctx.fill();

                // Big soft glow around each particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
                const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
                g.addColorStop(0, color + Math.round(alpha * 100).toString(16).padStart(2, '0'));
                g.addColorStop(1, color + '00');
                ctx.fillStyle = g;
                ctx.fill();
            });
            animRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
        };
    }, [color]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-1"
        />
    );
};

/* ── Marquee Strip ────────────────────────────────── */
const MarqueeStrip = ({ words, color }) => (
    <div
        className="relative z-30 w-full overflow-hidden border-t py-3 mt-auto"
        style={{
            borderColor: `${color}30`,
            backgroundColor: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(10px)',
        }}
    >
        <div className="marquee-track">
            {[...Array(4)].map((_, si) => (
                <React.Fragment key={si}>
                    {words.map((word, wi) => (
                        <span
                            key={`${si}-${wi}`}
                            className="inline-flex items-center gap-3 mx-5 text-xs md:text-sm font-bold tracking-[0.25em] uppercase whitespace-nowrap"
                            style={{ color: `${color}` }}
                        >
                            <span style={{ color }}>◆</span>
                            {word}
                        </span>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </div>
);

/* ── Event Details Page ────────────────────────────── */
const EventDetails = () => {
    const { eventName } = useParams();
    const navigate = useNavigate();
    const event = eventsData.find((e) => e.id === eventName);

    const handleBack = useCallback(() => {
        navigate('/', { state: { scrollToEvents: true } });
    }, [navigate]);

    if (!event) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Event Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                    >
                        ← Back to Events
                    </button>
                </div>
            </div>
        );
    }

    const { theme } = event;

    return (
        <motion.div
            className="min-h-screen relative flex flex-col overflow-x-hidden"
            style={{ background: theme.gradient }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Navbar scrollToRefs={{ heroRef: true, aboutRef: true, eventRef: true, scheduleRef: true }} scrollToSection={() => navigate('/')} isScrolled={true} />

            {/* Particle background */}
            <ParticleCanvas color={theme.particleColor} />

            {/* Large ambient glows — very visible */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Top-right glow */}
                <div
                    className="absolute rounded-full"
                    style={{
                        top: '-15%',
                        right: '-10%',
                        width: '700px',
                        height: '700px',
                        background: theme.primary,
                        opacity: 0.12,
                        filter: 'blur(120px)',
                    }}
                />
                {/* Bottom-left glow */}
                <div
                    className="absolute rounded-full"
                    style={{
                        bottom: '-10%',
                        left: '-10%',
                        width: '500px',
                        height: '500px',
                        background: theme.primary,
                        opacity: 0.08,
                        filter: 'blur(100px)',
                    }}
                />
                {/* Center glow */}
                <div
                    className="absolute rounded-full"
                    style={{
                        top: '30%',
                        left: '40%',
                        width: '600px',
                        height: '600px',
                        background: theme.primary,
                        opacity: 0.05,
                        filter: 'blur(150px)',
                    }}
                />
                {/* Vignette overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
                    }}
                />
            </div>

            {/* Page content */}
            <div className="relative z-10 grow pt-24 pb-12">
                {/* Back button */}
                <motion.div
                    className="pt-6 md:pt-8 px-6 md:px-12 lg:px-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <button
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs tracking-[0.2em] uppercase border transition-all duration-300 hover:scale-105 cursor-pointer"
                        style={{
                            borderColor: `${theme.primary}60`,
                            color: theme.primary,
                            backgroundColor: `${theme.primary}15`,
                            boxShadow: `0 0 15px ${theme.primary}15`,
                        }}
                    >
                        ← Back to Events
                    </button>
                </motion.div>

                {/* Main layout */}
                <div className="px-6 md:px-12 lg:px-20 mt-8 md:mt-12">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start max-w-[1400px] mx-auto">
                        {/* Mobile poster (top) */}
                        <motion.div
                            className="lg:hidden w-full flex justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div
                                className="relative rounded-2xl overflow-hidden"
                                style={{
                                    width: 'min(85vw, 340px)',
                                    boxShadow: `0 0 50px ${theme.primary}40, 0 0 100px ${theme.primary}15, 0 20px 60px rgba(0,0,0,0.5)`,
                                    border: `2px solid ${theme.primary}40`,
                                }}
                            >
                                <img src={event.poster} alt={event.name} className="w-full h-auto" />
                            </div>
                        </motion.div>

                        {/* Left column - Event info */}
                        <motion.div
                            className="flex-1 min-w-0"
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {/* Category badge */}
                            <div className="mb-4">
                                <span
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase border"
                                    style={{
                                        borderColor: `${theme.primary}50`,
                                        color: theme.primary,
                                        backgroundColor: `${theme.primary}15`,
                                        boxShadow: `0 0 20px ${theme.primary}15`,
                                    }}
                                >
                                    {event.category} · {event.categoryIcon}
                                </span>
                            </div>

                            {/* Event name */}
                            <h1
                                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-none mb-4"
                                style={{
                                    fontFamily: "'VerminVibes', 'Orbitron', monospace",
                                    color: '#fff',
                                    textShadow: `0 0 60px ${theme.primary}40, 0 0 120px ${theme.primary}20`,
                                }}
                            >
                                {event.name}
                            </h1>

                            {/* Tagline */}
                            <p
                                className="text-sm md:text-base font-mono tracking-wider mb-6"
                                style={{ color: `${theme.primary}` }}
                            >
                                {event.tagline}
                            </p>

                            {/* Themed divider */}
                            <div
                                className="h-[2px] w-full mb-8"
                                style={{
                                    background: `linear-gradient(to right, ${theme.primary}80, ${theme.primary}20, transparent)`,
                                    boxShadow: `0 0 15px ${theme.primary}40`,
                                }}
                            />

                            {/* Description */}
                            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-mono">
                                {event.description}
                            </p>

                            {/* Highlights */}
                            <div className="space-y-3 mb-10">
                                {event.highlights.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                                    >
                                        <span
                                            className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0"
                                            style={{
                                                backgroundColor: theme.primary,
                                                boxShadow: `0 0 10px ${theme.primary}80`,
                                            }}
                                        />
                                        <span className="text-white/80 text-sm font-semibold">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Pricing */}
                            <motion.div
                                className="flex flex-wrap items-end gap-10 mb-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-1">
                                        Entry Fee
                                    </p>
                                    <p
                                        className="text-3xl md:text-4xl font-black"
                                        style={{
                                            color: theme.primary,
                                            textShadow: `0 0 20px ${theme.primary}50`,
                                        }}
                                    >
                                        {event.entryFee}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-1">
                                        Prize Pool
                                    </p>
                                    <p
                                        className="text-3xl md:text-4xl font-black"
                                        style={{
                                            color: theme.primary,
                                            textShadow: `0 0 20px ${theme.primary}50`,
                                        }}
                                    >
                                        {event.prizePool}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Register button */}
                            <motion.a
                                href={event.registerLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-10 py-4 rounded-lg font-black text-sm tracking-[0.25em] uppercase text-black transition-all duration-300 no-underline"
                                style={{
                                    backgroundColor: theme.primary,
                                    boxShadow: `0 0 40px ${theme.primary}60, 0 0 80px ${theme.primary}30, 0 10px 40px ${theme.primary}30`,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: `0 0 60px ${theme.primary}90, 0 0 120px ${theme.primary}40, 0 15px 60px ${theme.primary}40`,
                                }}
                                whileTap={{ scale: 0.97 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                Register Now
                            </motion.a>
                        </motion.div>

                        {/* Right column - Floating poster (desktop only) */}
                        <motion.div
                            className="hidden lg:block flex-shrink-0"
                            style={{ width: 'clamp(300px, 25vw, 420px)' }}
                            initial={{ opacity: 0, x: 60, rotate: 3 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
                        >
                            <motion.div
                                className="relative rounded-2xl overflow-hidden"
                                style={{
                                    boxShadow: `0 0 60px ${theme.primary}35, 0 0 120px ${theme.primary}15, 0 25px 80px rgba(0,0,0,0.5)`,
                                    border: `2px solid ${theme.primary}40`,
                                }}
                                animate={{
                                    y: [0, -14, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <img
                                    src={event.poster}
                                    alt={event.name}
                                    className="w-full h-auto"
                                />
                                {/* Poster top glow */}
                                <div
                                    className="absolute inset-0 opacity-15"
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${theme.primary} 0%, transparent 60%)`,
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Event meta info */}
                <motion.div
                    className="px-6 md:px-12 lg:px-20 mt-12 max-w-350 mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                >
                    <div className="flex flex-wrap gap-6 md:gap-10">
                        {[
                            { label: 'Date', value: event.date },
                            { label: 'Time', value: event.time },
                            { label: 'Venue', value: event.venue },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="px-5 py-3 rounded-lg border"
                                style={{
                                    borderColor: `${theme.primary}25`,
                                    backgroundColor: `${theme.primary}08`,
                                    boxShadow: `0 0 20px ${theme.primary}08`,
                                }}
                            >
                                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-0.5">
                                    {item.label}
                                </p>
                                <p className="text-sm font-bold text-white/80">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom marquee */}
            <MarqueeStrip words={theme.marqueeWords} color={theme.primary} />
            {/* Footer — solid background, no particle/glow bleed-through */}
            <div className="relative z-[50] bg-black">
                <Footer scrollToRefs={{ heroRef: true }} scrollToSection={() => navigate('/')} />
            </div>
        </motion.div>

    );
};

export default EventDetails;
