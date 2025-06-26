// frontend/src/App.js
import React from 'react';
import './App.css'; // Keep default styling for now
import HeroSection from './components/HeroSection'; // Import the HeroSection component

function App() {
  return (
    <div className="App">
      {/* Header/Navigation will go here later */}

      <main>
        <HeroSection /> {/* The Hero Section component is now placed here */}
        {/* About Us Section will go here */}
        {/* Services Section will go here */}
        {/* Contact Us Section will go here */}
      </main>

      {/* Footer will go here later */}
    </div>
  );
}

export default App;