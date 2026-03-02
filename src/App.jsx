import React from 'react'
import './App.css'
import BounceCards from "./components/BounceCards";

function App() {

  const images = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  ];

  return (
    <>
      {/* Header Section */}
      {/* <div className="text-center py-10">
        <h1 className="text-5xl font-black text-white tracking-tighter">
          Acunetix 13.0
        </h1>
      </div> */}

      {/* Bounce Cards Section */}
      <div className="flex justify-center items-center min-h-[500px]">
        <BounceCards
          images={images}
          containerWidth={500}
          containerHeight={500}
          animationDelay={2}
          animationStagger={0}
          enableHover={true}
        />
      </div>
    </>
  )
}

export default App
