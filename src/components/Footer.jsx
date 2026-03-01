import React from 'react';
import './Footer.css';
import acunetixLogo from '../assets/acunetix-logo.svg';
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";

export default function Footer({ scrollToRefs, scrollToSection }) {
  const handleLogoClick = (e) => {
    e.preventDefault();
    scrollToSection(scrollToRefs.heroRef);
  };

  return (
    <footer className="footer">
      <div className="overlay"></div>
      <div className="footer-content gap-4 flex max-sm:flex-col" style={{ gap: "4rem" }}>
        <div className="footer-section">
          <h1 className='text-4xl max-sm:text-2xl'>Acunetix 13.0</h1>
          <p>Dive into world of illusions</p>
        </div>

        <div className="logos">
          <a href="#home" onClick={handleLogoClick} className="smooth-scroll">
            <img 
              src={acunetixLogo} 
              alt="Acunetix Logo" 
              className="logo hover:scale-105 transition-transform duration-300" 
            />
          </a>
        </div>

        <div className="footer-section">
          <h1 className='text-xl'>Socials</h1>
          <ul className='flex justify-center items-center gap-3'>
            <li><a href="https://www.instagram.com/acunetix.dit/" target='_blank'><img src={instagram} alt="insta logo" height={39} width={39} /></a></li>
            <li><a href="https://www.linkedin.com/company/acunetix-dit/" target='_blank'><img src={linkedin} alt="linkedin" height={35} width={35} /></a></li>
            <li><a href="https://www.youtube.com/@AcunetixDIT" target='_blank'><img src={youtube} height={42} width={42} /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className='text-[12px] sm:text-[15px]'>© 2025 Acunetix 12.0 All rights reserved.</p>
      </div>
    </footer>
  );
}