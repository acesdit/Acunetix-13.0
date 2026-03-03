import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BotpressChat from './components/BotpressChat'; 
import BounceCards from "./components/BounceCards";
import './App.css';

// IMPORT ASSETS FOR VERCEL PATHS
import acunetixLogo from './assets/acunetix-logo.svg';
import instagramIcon from './assets/instagram.svg';

function App() {
  const emptyRefs = { heroRef: null, eventRef: null, aboutRef: null, scheduleRef: null };
  const dummyScroll = () => {};
  const images = [acunetixLogo, instagramIcon]; 

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Container for Navbar Alignment */}
      <div className="w-full max-w-7xl mx-auto px-6">
        <Navbar 
          scrollToRefs={emptyRefs} 
          scrollToSection={dummyScroll} 
          isScrolled={true} 
        />
      </div>
      
      <main className="flex-grow flex flex-col items-center justify-center pt-24">
         <h1 className="text-white text-5xl font-bold tracking-widest mb-10 text-center">
            ACUNETIX 13.0
         </h1>
         <div className="flex justify-center items-center w-full">
            <BounceCards images={images} containerWidth={500} containerHeight={500} />
         </div>
      </main>

      {/* Container for Footer Alignment */}
      <div className="w-full max-w-7xl mx-auto px-6">
        <Footer scrollToRefs={emptyRefs} scrollToSection={dummyScroll} />
      </div>

      <BotpressChat />
    </div>
  );
}
export default App;