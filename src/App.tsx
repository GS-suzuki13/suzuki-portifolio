import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Differentials from './components/Differentials';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="scroll-animate">
        <About />
      </div>
      <div className="scroll-animate">
        <Skills />
      </div>
      <div className="scroll-animate">
        <Differentials />
      </div>
      <div className="scroll-animate">
        <Projects />
      </div>
      <div className="scroll-animate">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
