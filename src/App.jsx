import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Event from './components/Event'
import Schedule from './components/Schedule'
import Sponsors from './components/Sponsors'
import Reel from './components/Reel'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import SchedulePage from './components/SchedulePage'
import EventDetails from './components/EventDetails'

function HomePage({ scrollToRefs, scrollToSection, isScrolled }) {
  return (
    <>
      <Navbar
        scrollToRefs={scrollToRefs}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />

      <main className="grow bg-black">
        <Hero ref={scrollToRefs.heroRef} />
        <About ref={scrollToRefs.aboutRef} />
        <Event ref={scrollToRefs.eventRef} />
        <Schedule ref={scrollToRefs.scheduleRef} />
        <Sponsors ref={scrollToRefs.sponsorsRef} />
        <Reel ref={scrollToRefs.reelRef} />
      </main>

      <Footer
        scrollToRefs={scrollToRefs}
        scrollToSection={scrollToSection}
      />
    </>
  )
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const scheduleRef = useRef(null);
  const eventRef = useRef(null);
  const sponsorsRef = useRef(null);
  const reelRef = useRef(null);

  const scrollToRefs = { heroRef, aboutRef, scheduleRef, eventRef, sponsorsRef, reelRef };
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle scroll event for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                scrollToRefs={scrollToRefs}
                scrollToSection={scrollToSection}
                isScrolled={isScrolled}
              />
            }
          />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
        <Chatbot />
    </div>
    </BrowserRouter>
  )
}

export default App