import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0D1220] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Branding */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Amith's Portfolio</h1>
          <p className="text-gray-400">Building beautiful things for the web.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Connect with Me</h2>
          <div className="flex justify-center md:justify-start gap-4 text-2xl text-gray-300">
            <a href="https://github.com/amithak211/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/amith-ak-696464284/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaLinkedin /></a>
            <a href="mailto:you@example.com" className="hover:text-cyan-400"><FaEnvelope /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Amith. All rights reserved.
      </div>
    </footer>
  );
}
