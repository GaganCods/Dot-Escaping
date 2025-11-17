
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowToPlay from './components/HowToPlay';
import Screenshots from './components/Screenshots';
import Download from './components/Download';
import WhyLoveIt from './components/WhyLoveIt';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <HowToPlay />
        <Screenshots />
        <Download title="Ready to Play?" />
        <WhyLoveIt />
        <Reviews />
        <FAQ />
        <Download title="Download Dot Escape Now!" isFinalCTA={true} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
