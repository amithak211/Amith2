import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white">Amith</h1>
        <nav className="space-x-6 text-white hidden md:flex">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer capitalize hover:text-blue-400"
            >
              {section}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
