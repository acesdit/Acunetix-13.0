import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BotpressChat from './components/BotpressChat';

function App() {
  const emptyRefs = { heroRef: null, eventRef: null, aboutRef: null, scheduleRef: null };
  const dummyScroll = () => {};

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      <Navbar 
        scrollToRefs={emptyRefs} 
        scrollToSection={dummyScroll} 
        isScrolled={true} 
      />
      
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold tracking-widest">
          ACUNETIX 13.0
        </h1>
      </main>

      <Footer scrollToRefs={emptyRefs} scrollToSection={dummyScroll} />
      <BotpressChat />
    </div>
  );
}

export default App;
