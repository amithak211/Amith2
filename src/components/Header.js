import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header({ activeSection, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Amith
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <motion.button
                key={link.id}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative py-2 font-medium transition-colors ${
                  activeSection === link.id ? 'text-blue-400' : 'text-white hover:text-blue-300'
                }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                  />
                )}
              </motion.button>
            ))}

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full 
                         transition-colors shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <FiX className="w-6 h-6 text-white" /> : <FiMenu className="w-6 h-6 text-white" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 text-white backdrop-blur-sm border-t border-gray-700"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map(link => (
                <motion.button
                  key={link.id}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.id 
                      ? 'text-blue-400' 
                      : 'text-white hover:bg-gray-800'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
