import React, { useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import eventsData from '../data/eventsData';
import gamestormBg from '../assets/gamestrom bg.jpg';
import gamestormFg from '../assets/foreground gamestrom.png';
import Navbar from './Navbar';
import Footer from './Footer';
import FlickeringGrid from './FlickeringGrid';
import MatrixRain from './MatrixRain';
import LetterGlitch from './LetterGlitch';
import InteractiveParticleField from './InteractiveParticleField';
import FloatingLines from './FloatingLines';
import BugBountyBackground from './BugBountyBackground';
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


    // GameStorm custom background
    const isGameStorm = id === 'gamestorm';

    return (
        <motion.div
            className="min-h-screen relative flex flex-col overflow-x-hidden bg-black"
            style={isGameStorm ? { background: `url(${gamestormBg}) center/cover, ${theme.gradient}` } : (id === 'treasure-trove' || id === 'dpl' ? { background: '#000' } : { background: theme.gradient })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* GameStorm: normal background image */}
            {isGameStorm && (
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            background: `url(${gamestormBg}) center/cover no-repeat`,
                        }}
                    />
                </div>
            )}
            {/* ...existing code... */}


            {/* Matrix rain for build-a-thon and codeoflies, FlickeringGrid for ctrlaltelite, all with bg-slate-900/90 overlay */}
            {(id === 'build-a-thon' || id === 'codeoflies') && (
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

            {/* Custom Icon Matrix background for bugbounty */}
            {id === 'bugbounty' && (
                <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                    <BugBountyBackground />
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

            {/* Large ambient glows — very visible */}
            {(id !== 'treasure-trove' && id !== 'dpl') && (
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
            )}

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
                            boxShadow: `0 0 15px ${theme.primary}15`,
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
                            <div className="mb-4 flex flex-wrap">
                                <span
                                    className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase border"
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
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight md:leading-none mb-4 break-words"
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
                                className="h-0.5 w-full mb-8"
                                style={{
                                    background: `linear-gradient(to right, ${theme.primary}80, ${theme.primary}20, transparent)`,
                                    boxShadow: `0 0 15px ${theme.primary}40`,
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
                                                boxShadow: `0 0 10px ${theme.primary}80`,
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
                            className="hidden lg:block shrink-0 py-8"
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
            {/* Sticky Navbar at bottom */}
            <Footer scrollToRefs={{ heroRef: true }} scrollToSection={() => navigate('/')} />
            <Navbar className="fixed bottom-0 left-0 w-full z-50" />
        </motion.div>
    );
};

export default EventDetails;
/* Glitch effect styles for GameStorm foreground */