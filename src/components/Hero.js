import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 3000); // Adjust to match animation speed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Video already handled globally in App.js */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center px-6"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
        >
          <TypeAnimation
            sequence={['Hi, I\'m Amith', 10000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>

        <p className="mt-4 text-xl md:text-2xl font-medium text-white">
          Frontend Developer | React | Tailwind CSS Enthusiast
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-8 py-3 rounded-full text-lg font-semibold text-white 
                     bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 
                     transition shadow-lg"
        >
          Get In Touch
        </motion.a>

        {/* Down Arrow Scroll Button */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Reference for auto scroll (optional) */}
      <div ref={scrollRef} />
    </section>
  );
}
