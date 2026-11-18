import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function getThemeByTime() {
  const hours = new Date().getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(getThemeByTime());
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }

  return (
    <div>

      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Reviews />
      </main>
      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;