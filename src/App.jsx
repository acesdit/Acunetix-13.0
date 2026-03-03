import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  const emptyRefs = { heroRef: null, eventRef: null, aboutRef: null, scheduleRef: null };
  const dummyScroll = () => {};

  const images = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
       {/* Navbar */}
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

      {/* Footer */}
      <Footer scrollToRefs={emptyRefs} scrollToSection={dummyScroll} />
    </div>
  );
}

export default App;