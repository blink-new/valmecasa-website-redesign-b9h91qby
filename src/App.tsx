import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Sectors from './components/Sectors';
import Facilities from './components/Facilities';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Sectors />
      <Facilities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;