import React from 'react';

const About = () => {
  return (
   <section id="about" className="py-20 bg-white dark:bg-[#0D1220] text-gray-900 dark:text-white">

      <div className="max-w-5xl mx-auto px-4">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-6 text-center">
          About Me
        </h2>

        <div data-aos="fade-up" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-lg leading-relaxed">
          <p className="mb-4">
            Hello! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Amith</span>, a passionate frontend developer from Kundapura.
            I specialize in building responsive and visually appealing websites using modern technologies like <span className="font-semibold">React, Tailwind CSS</span>, and more.
          </p>
          <p className="mb-4">
            I love crafting clean UI, exploring new tools in the web ecosystem, and turning ideas into interactive, accessible digital experiences.
            When I'm not coding, I enjoy learning about open-source projects and contributing to the dev community.
          </p>
          <p>
            My goal is to continue growing as a developer and work on meaningful projects that make an impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
