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
    <nav className={`text-white py-2 max-sm:px-5 md:px-4 lg:px-12 fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-black/90  backdrop-blur-lg shadow-md" 
        : "bg-black/50"
    }`}>
      <div className="flex items-center justify-between" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Left as - Desktop */}
        <div className="hidden md:flex space-x-12 gap-16">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(scrollToRefs.heroRef);
            }}
            className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium px-4 mx-5"
          >
            Home
          </a>
          <a
            href="#events"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(scrollToRefs.eventRef);
            }}
            className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium px-4"
          >
            Events
          </a>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(scrollToRefs.heroRef);
            }}
          >
            <img
              src={logo}
              alt="Logo"
              className="transform hover:scale-105 ml-8 transition-transform duration-300 "
            />
          </a>
        </div>

        {/* Right as - Desktop */}
        <div className="hidden md:flex space-x-12 gap-16">
          <a
            href="#schedule"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(scrollToRefs.scheduleRef);
            }}
            className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium px-4 mx-5"
          >
            Schedule
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(scrollToRefs.aboutRef);
            }}
            className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium px-4"
          >
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
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
        style={{ width: "190px", background: "rgba(0, 0, 0, 0.971)" }}
      >
        <div className="flex flex-col space-y-4 text-center bg-[#0000006f]">
          <button
            className="self-end focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            style={{ padding: "1rem 1.5rem" }}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex  flex-col py-4" style={{ height: "90vh" }}>
            <div className="flex justify-center align-middle  flex-col py-4" style={{ gap: "1rem" }}>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(scrollToRefs.heroRef);
                }}
                className="py-2 hover:text-gray-400 transition-colors duration-300"
                style={{ fontSize: "1.5rem", padding: "1rem 2rem" }}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(scrollToRefs.aboutRef);
                }}
                className="py-2 hover:text-gray-400 transition-colors duration-300"
                style={{ fontSize: "1.5rem", padding: "1rem 1rem" }}
              >
                About
              </a>
              <a
                href="#events"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(scrollToRefs.eventRef);
                }}
                className="py-2 hover:text-gray-400 transition-colors duration-300"
                style={{ fontSize: "1.5rem", padding: "1rem 1rem" }}
              >
                Events
              </a>
              <a
                href="#schedule"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(scrollToRefs.scheduleRef);
                }}
                className="py-2 hover:text-gray-400 transition-colors duration-300"
                style={{ fontSize: "1.5rem", padding: "1rem 1rem" }}
              >
                Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;