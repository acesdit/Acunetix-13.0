import { useState } from "react";
import React from "react";
import logo from "../assets/acunetix-logo.svg";

const Navbar = ({ scrollToRefs, scrollToSection, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (ref) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      scrollToSection(ref);
    }, 300);
  };

  return (
    <nav className={`text-white py-2 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-black/90 backdrop-blur-lg shadow-md" 
        : "bg-black/50"
    }`}>
      {/* 1. ADDED: px-6 and max-w-7xl to prevent edge-bleeding in production.
          2. REMOVED: manual margin: "0 auto" in favor of mx-auto.
      */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Left Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleLinkClick(scrollToRefs.heroRef); }}
            className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium"
          >
            Home
          </a>
          <a
            href="#events"
            onClick={(e) => { e.preventDefault(); handleLinkClick(scrollToRefs.eventRef); }}
            className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium"
          >
            Events
          </a>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleLinkClick(scrollToRefs.heroRef); }}
          >
            {/* REMOVED: ml-8 which was pushing the logo off-center */}
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto transform hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Right Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          <a
            href="#schedule"
            onClick={(e) => { e.preventDefault(); handleLinkClick(scrollToRefs.scheduleRef); }}
            className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium"
          >
            Schedule
          </a>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); handleLinkClick(scrollToRefs.aboutRef); }}
            className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium"
          >
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-md"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed backdrop-blur-xl z-50 top-0 right-0 h-full text-white transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "240px", background: "rgba(0, 0, 0, 0.98)" }}
      >
        <div className="flex flex-col h-full">
          <button
            className="self-end p-6 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-8 mt-10">
            {['Home', 'About', 'Events', 'Schedule'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(scrollToRefs[`${item.toLowerCase()}Ref`] || scrollToRefs.heroRef);
                }}
                className="text-2xl hover:text-gray-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;