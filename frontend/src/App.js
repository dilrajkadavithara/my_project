// frontend/src/App.js
import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection'; // <--- Add this import

function App() {
  return (
    <div className="App">
      {/* Header/Navigation will go here later */}

      <main>
        <HeroSection />
        <AboutUsSection />
        <ServicesSection /> {/* <--- Place the Services Section here */}
        {/* Contact Us Section will go here */}
      </main>

      {/* Footer will go here later */}
    </div>
  );
}

export default App;