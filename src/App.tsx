import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import './styles/animations.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative">
      <AnimatedBackground />
      <Layout>
      <Home />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      </Layout>
    </div>
  );
}

export default App;