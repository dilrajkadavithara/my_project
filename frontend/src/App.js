// frontend/src/App.js
import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection'; // <--- Add this import

function App() {
  return (
    <div className="App">
      {/* Header/Navigation will go here later */}

      <main>
        <HeroSection />
        <AboutUsSection /> {/* <--- Place the About Us Section here */}
        {/* Services Section will go here */}
        {/* Contact Us Section will go here */}
      </main>

      {/* Footer will go here later */}
    </div>
  );
}

export default App;