import { useState, useEffect } from 'react';
import './index.css';
import './styles/navbar.css';
import './styles/cta.css';
import './styles/home.css';
import './styles/obj.css';
import './styles/modo.css';
import './styles/trajetoria.css';
import './styles/trust.css';
import './styles/download.css';
import './styles/footer.css';
import './styles/quem.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeSection from './components/HomeSection';
import Objectives from './components/Objectives';
import HowItWorks from './components/HowItWorks';
import Timeline from './components/Timeline';
import Trust from './components/Trust';
import Download from './components/Download';
import Team from './components/Team';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || saved === 'light' ? saved : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <HomeSection />
      <Objectives />
      <HowItWorks />
      <Timeline />
      <Trust />
      <Download />
      <Team />
      <ScrollTop />
      <Footer />
    </>
  );
}
