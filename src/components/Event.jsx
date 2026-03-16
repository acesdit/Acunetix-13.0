import React, { forwardRef, useRef, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import eventsData from '../data/eventsData';

/* ─── Lightweight card — zero animation libraries ─── */
const EventCard = React.memo(({ event, isActive }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="flex-shrink-0 snap-center px-3 md:px-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative cursor-pointer rounded-xl"
        style={{
          width: 'clamp(260px, 22vw, 340px)',
          aspectRatio: '3/4.2',
          transition: 'transform 0.35s ease, opacity 0.35s ease',
          transform: isActive ? 'scale(1.05)' : 'scale(0.92)',
          opacity: isActive ? 1 : 0.55,
          willChange: 'transform, opacity',
        }}
        onClick={() => navigate(`/events/${event.id}`)}
      >
        {/* Glow behind card */}
        <div
          className="absolute -inset-2 rounded-2xl pointer-events-none"
          style={{
            transition: 'opacity 0.4s ease',
            opacity: isActive ? 1 : 0,
            background: `radial-gradient(circle, ${event.theme.primary}66 0%, transparent 70%)`,
          }}
        />

        {/* Card */}
        <div
          className="relative z-10 w-full h-full rounded-xl overflow-hidden bg-black"
          style={{
            border: `2px solid ${isActive ? event.theme.primary + '99' : 'rgba(255,255,255,0.08)'}`,
            transition: 'border-color 0.35s ease',
          }}
        >
          <img
            src={event.poster}
            alt={event.name}
            className="w-full h-full object-cover"
          />

          {/* Hover overlay — always in DOM, toggled via opacity */}
          <div
            className="absolute inset-0 flex items-center justify-center z-20"
            style={{
              transition: 'opacity 0.2s ease',
              opacity: hovered ? 1 : 0,
              pointerEvents: hovered ? 'auto' : 'none',
              background: `linear-gradient(to top, ${event.theme.secondary}dd 0%, ${event.theme.secondary}88 40%, transparent 100%)`,
            }}
          >
            <button
              className="px-6 py-3 rounded-lg font-bold text-sm tracking-widest uppercase border-2 cursor-pointer"
              style={{
                borderColor: event.theme.primary,
                color: event.theme.primary,
                backgroundColor: 'rgba(0,0,0,0.4)',
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/events/${event.id}`);
              }}
            >
              Enter The Game →
            </button>
          </div>
        </div>
      </div>

      {/* Card info */}
      <div
        className="mt-4 text-center"
        style={{
          transition: 'opacity 0.3s ease',
          opacity: isActive ? 1 : 0.35,
        }}
      >
        <div className="flex justify-center mb-2">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase border"
            style={{
              borderColor: `${event.theme.primary}40`,
              color: event.theme.primary,
              backgroundColor: `${event.theme.primary}10`,
            }}
          >
            {event.category}
          </span>
        </div>
        <h3
          className="text-lg md:text-xl font-black tracking-wider uppercase"
          style={{
            color: isActive ? '#fff' : '#666',
          }}
        >
          {event.name}
        </h3>
        <p className="text-xs text-white/40 mt-1">
          Prize:{' '}
          <span style={{ color: event.theme.primary }} className="font-bold">
            {event.prizePool}
          </span>
          {'  ·  '}
          Entry: {event.entryFee}
        </p>
      </div>
    </div>
  );
});

EventCard.displayName = 'EventCard';

/* ─── Main Event Section ─── */
const Event = forwardRef((props, ref) => {
  const scrollRef = useRef(null);
  // Find the index of ctrlaltelite, default to middle if not found
  const initialIndex = eventsData.findIndex(e => e.id === 'ctrlaltelite');
  const startIndex = initialIndex !== -1 ? initialIndex : Math.floor(eventsData.length / 2);
  const [activeIndex, setActiveIndex] = useState(startIndex);

  const scrollSnapTimeoutRef = useRef(null);

  const scrollToCard = useCallback((index) => {
    const container = scrollRef.current;
    if (!container) return;
    
    // 1. Temporarily disable CSS scroll snapping so it doesn't fight JS smooth scrolling (causes 'stuck' glitches)
    container.style.scrollSnapType = 'none';
    if (scrollSnapTimeoutRef.current) clearTimeout(scrollSnapTimeoutRef.current);

    // 2. Wait slightly for React to render the active scaling (1.05x) before measuring widths!
    setTimeout(() => {
      if (!scrollRef.current) return;
      const cards = scrollRef.current.children;
      if (!cards[index]) return;
      const card = cards[index];
      const containerCenter = scrollRef.current.offsetWidth / 2;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      
      scrollRef.current.scrollTo({
        left: cardCenter - containerCenter,
        behavior: 'smooth',
      });

      // 3. Re-enable CSS scroll snapping after the smooth scroll finishes (~600ms)
      scrollSnapTimeoutRef.current = setTimeout(() => {
        if (scrollRef.current) scrollRef.current.style.scrollSnapType = 'x mandatory';
      }, 600);
    }, 50);
  }, []);

  // Center on mount
  useEffect(() => {
    const t = setTimeout(() => scrollToCard(activeIndex), 150);
    return () => clearTimeout(t);
  }, []);

  // Debounced scroll detection — only fires after scroll stops
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let timer = null;

    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const center = container.scrollLeft + container.offsetWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        for (let i = 0; i < container.children.length; i++) {
          const child = container.children[i];
          const d = Math.abs(center - (child.offsetLeft + child.offsetWidth / 2));
          if (d < bestDist) { bestDist = d; best = i; }
        }
        setActiveIndex(best);
      }, 120);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  const navigate = useNavigate();
  const theme = eventsData[activeIndex]?.theme;

  return (
    <section
      ref={ref}
      id="events"
      className="relative min-h-screen bg-black py-16 md:py-24 overflow-hidden"
    >
      {/* Background glow — single div, CSS transition */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          transition: 'background 0.6s ease',
          background: `radial-gradient(ellipse at 50% 55%, ${theme?.primary}60 0%, ${theme?.primary}28 45%, transparent 75%)`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 md:mb-16 px-4">
        {/* <p className="text-[10px] md:text-xs font-semibold tracking-[0.4em] text-white/30 uppercase mb-4">
          Acunetix Presents
        </p> */}
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider"
        >
          <span className="text-white">Choose Your </span>
          <span
            style={{
              transition: 'color 0.5s ease',
              color: theme?.primary || '#ff4500',
            }}
          >
            Game
          </span>
        </h2>
      </div>

      {/* Carousel with buttons */}
      <div className="relative z-10 w-full">
        {/* Left button */}
        <button
          onClick={() => {
            if (activeIndex > 0) {
              const next = activeIndex - 1;
              setActiveIndex(next);
              scrollToCard(next);
            }
          }}
          className={`absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/90 border border-white/20 text-white cursor-pointer ${activeIndex === 0 ? 'invisible' : ''}`}
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6" /></svg>
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex items-center py-8 overflow-x-auto hide-scrollbar"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingLeft: 'calc(50vw - clamp(130px, 11vw, 170px))',
            paddingRight: 'calc(50vw - clamp(130px, 11vw, 170px))',
          }}
        >
          {eventsData.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              isActive={index === activeIndex}
            />
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={() => {
            if (activeIndex < eventsData.length - 1) {
              const next = activeIndex + 1;
              setActiveIndex(next);
              scrollToCard(next);
            }
          }}
          className={`absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/90 border border-white/20 text-white cursor-pointer ${activeIndex === eventsData.length - 1 ? 'invisible' : ''}`}
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>

      {/* Pagination dots */}
      <div className="relative z-10 flex justify-center items-center gap-2 mt-8">
        {eventsData.map((evt, index) => (
          <button
            key={index}
            className="rounded-full cursor-pointer border-none"
            style={{
              width: index === activeIndex ? 24 : 8,
              height: 8,
              transition: 'width 0.3s ease, background-color 0.3s ease',
              backgroundColor: index === activeIndex ? (theme?.primary || '#ff4500') : 'rgba(255,255,255,0.2)',
            }}
            onClick={() => { setActiveIndex(index); scrollToCard(index); }}
            aria-label={`Event ${index + 1}`}
          />
        ))}
      </div>

      {/* Active name */}
      <div className="relative z-10 text-center mt-6">
        <p
          className="text-lg md:text-2xl font-black tracking-[0.3em] uppercase"
          style={{
            transition: 'color 0.4s ease',
            color: theme?.primary || '#ff4500',
          }}
        >
          {eventsData[activeIndex]?.name}
        </p>
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-12 md:mt-16 overflow-hidden border-t border-b border-white/5 py-3">
        <div className="marquee-track">
          {[...Array(3)].map((_, si) => (
            <React.Fragment key={si}>
              {eventsData.map((event) => (
                <span
                  key={`${si}-${event.id}`}
                  className="inline-flex items-center gap-3 mx-4 text-xs md:text-sm font-bold tracking-widest uppercase whitespace-nowrap"
                  style={{ color: `${event.theme.primary}60` }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: event.theme.primary }}
                  />
                  {event.name}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
});

Event.displayName = 'Event';
export default Event;