import React from 'react';
import NavigationBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ThreeColumnSection from './components/ThreeColumnSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <ThreeColumnSection />
      <Footer />
    </div>
  );
}

export default App;
