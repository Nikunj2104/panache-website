import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import Journey from './components/Journey';
import ProcessSolutions from './components/ProcessSolutions';
import SurabhiSection from './components/SurabhiSection';
import Installations from './components/Installations';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (prefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="app-container">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <VisionMission />
        <Journey />
        <ProcessSolutions />
        {/* <SurabhiSection /> */}
        {/* <Installations /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
