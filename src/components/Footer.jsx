import React from 'react';
import acunetixLogo from '../assets/acunetix-logo.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.svg';
import instagram from '../assets/instagram.svg';

export default function Footer({ scrollToRefs, scrollToSection, className = "" }) {
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (scrollToRefs?.heroRef) scrollToSection(scrollToRefs.heroRef);
  };

  return (
    <footer className={`sticky bottom-0 left-0 w-full bg-black text-white text-center overflow-hidden border-t border-white/10 z-50 ${className}`} style={{marginTop: 'auto'}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[-1]" />

      {/* Main content */}
      <div className="flex flex-wrap justify-around items-center gap-10 px-6 py-10 sm:px-10 md:px-16 lg:px-24">
        {/* Branding */}
        <div className="flex-1 min-w-[180px] space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide">ACUNETIX 13.0</h1>
          <p className="font-family:'IM_Fell_DW_Pica_sc', bold; text-gray-400 text-sm sm:text-base">Where the Journey is the Challenge</p>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <a href="#home" onClick={handleLogoClick}>
            <img
              src={acunetixLogo}
              alt="Acunetix Logo"
              className="h-24 hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Socials */}
        <div className="flex-1 min-w-[180px] space-y-3">
          <h2 className="text-lg font-medium">Socials</h2>
          <ul className="flex justify-center items-center gap-4">
            <li>
              <a href="https://www.instagram.com/acunetix.dit/" target="_blank" rel="noreferrer"
                className="hover:opacity-75 transition-opacity duration-300 block">
                <img src={instagram} alt="Instagram" width={36} height={36} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/acunetix-dit/" target="_blank" rel="noreferrer"
                className="hover:opacity-75 transition-opacity duration-300 block">
                <img src={linkedin} alt="LinkedIn" width={32} height={32} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@AcunetixDIT" target="_blank" rel="noreferrer"
                className="hover:opacity-75 transition-opacity duration-300 block">
                <img src={youtube} alt="YouTube" width={38} height={38} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-4">
        <p className="text-xs sm:text-sm text-gray-500">© 2026 Acunetix 13.0. All rights reserved.</p>
      </div>
    </footer>
  );
}