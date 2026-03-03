/* Resolved App.jsx structure */
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BotpressChat from './components/BotpressChat'; 
import BounceCards from "./components/BounceCards";
import './App.css';

function App() {
  const emptyRefs = { heroRef: null, eventRef: null, aboutRef: null, scheduleRef: null };
  const dummyScroll = () => {};
  const images = ["/src/assets/logo.png", "/src/assets/instagram.svg"]; // Add your real assets here

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      <Navbar scrollToRefs={emptyRefs} scrollToSection={dummyScroll} isScrolled={true} />
      <main className="flex-grow flex flex-col items-center justify-center">
         <h1 className="text-white text-5xl font-bold tracking-widest mb-10">ACUNETIX 13.0</h1>
         <BounceCards images={images} containerWidth={500} containerHeight={500} />
      </main>
      <Footer scrollToRefs={emptyRefs} scrollToSection={dummyScroll} />
      <BotpressChat />
    </div>
  );
}
export default App;