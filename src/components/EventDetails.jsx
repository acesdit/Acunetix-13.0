import React, { useEffect, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import eventsData from '../data/eventsData';
import Navbar from './Navbar';
import Footer from './Footer';
import GridScan from './GridScan';
import MatrixRain from './MatrixRain';
import InteractiveParticleField from './InteractiveParticleField';
import FloatingLines from './FloatingLines';
import CtrlAltEliteBackground from './CtrlAltEliteBackground';
import ShapeGrid from './ShapeGrid';

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
    const [isInstructionOpen, setIsInstructionOpen] = useState(false);

    const handleBack = useCallback(() => {
        navigate('/');
        setTimeout(() => {
            const el = document.getElementById('events');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }, [navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [eventName]);

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


    const { theme, id } = event;

    // Utility to invert a hex color (e.g. #4ac8c8 -> #b53737)
    function invertHex(hex) {
        let c = hex.replace('#', '');
        if (c.length === 3) c = c.split('').map(x => x + x).join('');
        if (c.length !== 6) return '#fff';
        const r = (255 - parseInt(c.slice(0, 2), 16)).toString(16).padStart(2, '0');
        const g = (255 - parseInt(c.slice(2, 4), 16)).toString(16).padStart(2, '0');
        const b = (255 - parseInt(c.slice(4, 6), 16)).toString(16).padStart(2, '0');
        return `#${r}${g}${b}`;
    }
    const invertedPrimary = invertHex(theme.primary);

    return (
        <motion.div
            key={`event-${id}`}
            className="min-h-screen relative flex flex-col overflow-x-hidden bg-black text-white"
            style={(id === 'treasure-trove' || id === 'dpl' ? { background: '#000' } : { background: theme.gradient })}
            initial={{ opacity: 0, position: 'absolute', width: '100%', top: 0, left: 0 }}
            animate={{ opacity: 1, position: 'relative' }}
            exit={{ opacity: 0, position: 'absolute', width: '100%', top: 0, left: 0, zIndex: 50 }}
            transition={{ duration: 0.6 }}
        >
            {/* ...existing code... */}


            {/* Matrix rain for codeoflies */}
            {id === 'codeoflies' && (
                <>
                    <MatrixRain color={theme.primary} />
                    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-slate-900" />
                    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.85)' }} />
                </>
            )}
            {id === 'ctrlaltelite' && (
                <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                    <CtrlAltEliteBackground />
                </div>
            )}

            {/* Interactive Particle Field for brainiac */}
            {id === 'brainiac' && (
                <div className="fixed inset-0 w-full h-full z-0">
                    <InteractiveParticleField />
                </div>
            )}

            {/* Floating Lines for treasure-trove */}
            {id === 'treasure-trove' && (
                <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                    <div style={{ width: '100%', height: '100%', position: 'absolute' }} className="pointer-events-auto">
                        <FloatingLines
                            linesGradient={['#fff5cc', theme.primary, theme.secondary, theme.primary, '#fff5cc']}
                            enabledWaves={["top", "bottom", "middle"]}
                            // Array - specify line count per wave; Number - same count for all waves
                            lineCount={5}
                            // Array - specify line distance per wave; Number - same distance for all waves
                            lineDistance={14.5}
                            bendRadius={13.5}
                            bendStrength={0}
                            interactive={true}
                            parallax={true}
                        />
                    </div>
                </div>
            )}
            {id === 'timescape' && (
                <div className="fixed inset-0 w-full h-full z-1 pointer-events-none bg-[#08000c]">
                    <GridScan
                        sensitivity={0.55}
                        lineThickness={1}
                        gridScale={0.1}
                        scanOpacity={0.30}
                        enablePost={true}
                        bloomIntensity={0.5} // Lowered to keep the purple from washing out
                        noiseIntensity={0.01}


                        linesColor="#260e35"


                        scanColor={theme.primary}


                        chromaticAberration={0.001}


                        scanSoftness={5}
                        scanGlow={0.8}
                    />
                    {/* This vignette helps hide any residual blue in the corners */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#08000c]" />
                </div>
            )}

            {/* ShapeGrid Animation for DPL */}
            {id === 'dpl' && (
                <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                    <div style={{ width: '100%', height: '100%', position: 'absolute' }} className="pointer-events-auto">
                        <ShapeGrid
                            speed={0.44}
                            squareSize={40}
                            direction="left" // up, down, left, right, diagonal
                            borderColor="#353317" // yellowish dark brown hue fitting DPL theme
                            hoverFillColor="#e8d020" // bright yellow DPL primary
                            shape="hexagon" // hexagon fits cricket/sports well
                            hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
                        />
                    </div>
                </div>
            )}

            {/* ...glow overlays removed... */}

            {/* Page content */}
            <div className="relative z-10 grow pt-24 pb-32">
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
                            boxShadow: 'none',
                        }}
                    >
                        ← Back to Events
                    </button>
                </motion.div>

                {/* Main layout */}
                <div className="px-4 sm:px-6 md:px-12 lg:px-20 mt-8 md:mt-12 overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full max-w-7xl mx-auto">
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
                                    boxShadow: 'none',
                                    border: `2px solid ${theme.primary}40`,
                                }}
                            >
                                <img
                                    src={event.poster}
                                    alt={event.name}
                                    className="w-full h-auto block"
                                />
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
                            <div className="mb-4 flex flex-wrap">
                                <span
                                    className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase border"
                                    style={{
                                        borderColor: `${theme.primary}50`,
                                        color: theme.primary,
                                        backgroundColor: `${theme.primary}15`,
                                        boxShadow: 'none',
                                    }}
                                >
                                    {event.category} · {event.categoryIcon}
                                </span>
                            </div>

                            {/* Event name */}
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight md:leading-none mb-4 break-words"
                                style={{
                                    fontFamily: "'VerminVibes', 'Orbitron', monospace",
                                    color: '#fff',
                                    textShadow: 'none',
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
                                className="h-0.5 w-full mb-8"
                                style={{
                                    background: `linear-gradient(to right, ${theme.primary}80, ${theme.primary}20, transparent)`,
                                    boxShadow: 'none',
                                }}
                            />

                            {/* Description */}
                            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 md:mb-8 font-mono break-words">
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
                                            className="w-2.5 h-2.5 rounded-full mt-1 shrink-0"
                                            style={{
                                                backgroundColor: theme.primary,
                                                boxShadow: 'none',
                                            }}
                                        />
                                        <span className="text-white/80 text-xs sm:text-sm font-semibold break-words">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Pricing */}
                            <motion.div
                                className="flex flex-row flex-wrap items-end gap-6 md:gap-10 mb-10"
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
                                            textShadow: 'none',
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
                                            textShadow: 'none',
                                        }}
                                    >
                                        {event.prizePool}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Register and Instructions buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <motion.a
                                    href={event.registerLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-10 py-4 border-2 border-transparent rounded-lg font-black text-sm tracking-[0.25em] uppercase text-black transition-all duration-300 no-underline hover:scale-105 active:scale-95"
                                    style={{
                                        backgroundColor: theme.primary,
                                        boxShadow: 'none',
                                    }}
                                >
                                    Register Now
                                </motion.a>

                                <motion.button
                                    onClick={() => setIsInstructionOpen(true)}
                                    className="inline-block px-10 py-4 rounded-lg font-black text-sm tracking-[0.25em] uppercase transition-all duration-300 border-2 cursor-pointer hover:scale-105 hover:bg-white/10 active:scale-95"
                                    style={{
                                        borderColor: theme.primary,
                                        color: theme.primary,
                                        backgroundColor: 'transparent',
                                    }}
                                >
                                    Instructions
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Right column - Floating poster (desktop only) */}
                        <motion.div
                            className="hidden lg:block shrink-0 py-8"
                            style={{ width: 'clamp(300px, 25vw, 420px)' }}
                            initial={{ opacity: 0, x: 60, rotate: 3 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
                        >
                            <motion.div
                                className="relative rounded-2xl overflow-hidden"
                                style={{
                                    boxShadow: 'none',
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
                                    className="w-full h-auto block"
                                />
                                {/* ...poster top glow removed... */}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Event meta info (date, time, venue) commented out for now */}
                {/**
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
                                    boxShadow: 'none',
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
                */}

            </div>

            {/* Bottom marquee */}
            <MarqueeStrip words={theme.marqueeWords} color={theme.primary} />
            {/* Sticky Navbar at bottom */}
            <Footer scrollToRefs={{ heroRef: true }} scrollToSection={() => navigate('/')} />
            <Navbar scrollToRefs={{}} scrollToSection={() => { }} isScrolled={true} />

            {/* Modal for Instructions */}
            <AnimatePresence>
                {isInstructionOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                            onClick={() => setIsInstructionOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative w-full max-w-3xl rounded-xl border p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
                            style={{
                                borderColor: `${theme.primary}60`,
                                backgroundColor: '#0a0a0a',
                            }}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white cursor-pointer"
                                onClick={() => setIsInstructionOpen(false)}
                                aria-label="Close"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                            </button>

                            <p
                                className="text-2xl md:text-3xl font-black uppercase mb-6 tracking-[0.2em] border-b pb-4"
                                style={{ color: theme.primary, borderColor: `${theme.primary}30` }}
                            >
                                Instructions
                            </p>

                            <ol className="list-decimal pl-7 space-y-4 text-white/90 text-lg md:text-xl leading-relaxed font-semibold">
                                <li>Please ensure that all the details provided in the form are accurate and complete.</li>
                                <li>The payment made must match the event you have registered for; incorrect selections or payments will not be accepted or refunded.</li>
                                <li>Further details and updates regarding the event will be communicated via email.</li>
                            </ol>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default EventDetails;
/* Glitch effect styles for GameStorm foreground */