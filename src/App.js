// src/App.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.classList.remove('page-blur');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            if (section !== 'hero') {
              document.body.classList.add('page-blur');
            } else {
              document.body.classList.remove('page-blur');
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/228982_medium.mp4" type="video/mp4" />
      </video>

      {/* Global overlay with gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 z-10" />

      {/* Blur overlay that shows on non-hero sections */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-5 pointer-events-none transition-opacity duration-300"
        style={{ opacity: activeSection !== 'hero' ? 1 : 0 }}
      />

      {/* Page content */}
      <div className="relative z-20 text-white">
        <Header />

        <main>
          <section id="hero" className="min-h-screen flex items-center justify-center">
            <Hero />
          </section>

          <section id="about" className="min-h-screen py-20 relative">
            <div className="absolute inset-0 -z-10 bg-black/30 backdrop-blur-sm" />
            <About />
          </section>

          <section id="skills" className="min-h-screen py-20 relative">
  <div className="absolute inset-0 -z-10 bg-transparent" />
  <Skills />
</section>


          <section id="projects" className="min-h-screen py-20 relative">
            <div className="absolute inset-0 -z-10 bg-black/30 backdrop-blur-sm" />
            <Projects />
          </section>

          <section id="contact" className="min-h-screen py-20 relative">
            <div className="absolute inset-0 -z-10 bg-black/30 backdrop-blur-sm" />
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
