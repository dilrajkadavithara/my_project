// frontend/src/App.js
import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import ContactUsSection from './components/ContactUsSection'; // <--- Add this import

function App() {
  return (
    <div className="App">
      {/* Header/Navigation will go here later */}

      <main>
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <ContactUsSection /> {/* <--- Place the Contact Us Section here */}
      </main>

      {/* Footer will go here later */}
    </div>
  );
}

export default App;