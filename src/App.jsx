import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Event from './components/Event'
import Sponsors from './components/Sponsors'
import Reel from './components/Reel'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const eventRef = useRef(null);
  const sponsorsRef = useRef(null);
  const reelRef = useRef(null);

  const scrollToRefs = { heroRef, aboutRef, eventRef, sponsorsRef, reelRef };
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
    <div className="min-h-screen flex flex-col">
      <Navbar 
        scrollToRefs={scrollToRefs} 
        scrollToSection={scrollToSection} 
        isScrolled={isScrolled}
      />
      
      <main className="grow bg-black">
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Event ref={eventRef} />
        <Sponsors ref={sponsorsRef} />
        <Reel ref={reelRef} />
      </main>

      <Footer 
        scrollToRefs={scrollToRefs} 
        scrollToSection={scrollToSection}
      />
    </div>
  )
}

export default App
