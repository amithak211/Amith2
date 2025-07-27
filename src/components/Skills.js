import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript / ES6+", level: 85, icon: "📜" },
        { name: "HTML5 / CSS3", level: 95, icon: "🌐" },
        { name: "Tailwind CSS", level: 88, icon: "💨" },
        { name: "TypeScript", level: 75, icon: "📘" },
      ]
    },
    backend: {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 70, icon: "🟢" },
        { name: "Git & GitHub", level: 85, icon: "🔧" },
        { name: "REST APIs", level: 80, icon: "🔌" },
        { name: "Firebase", level: 75, icon: "🔥" },
      ]
    },
    design: {
      title: "Design & Others",
      skills: [
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "Responsive Design", level: 90, icon: "📱" },
        { name: "UI/UX Principles", level: 80, icon: "🧠" },
        { name: "Accessibility", level: 85, icon: "♿" },
      ]
    }
  };

  return (
   <section
  id="skills"
  className="py-20 px-6 backdrop-blur-md  dark:bg-black-900/40 transition-colors duration-300"
>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 space-y-12"
      >
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mt-2">
            My technical skills categorized into frontend, backend, and design areas.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 flex-wrap">
          {Object.keys(skillCategories).map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer
                ${activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'}`}
            >
              {skillCategories[category].title}
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
  <Tilt
    key={skill.name}
    glareEnable={true}
    glareMaxOpacity={0.2}
    scale={1.05}
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    transitionSpeed={250}
    className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.6)] transition duration-300"
  >
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-3">
        <span className="text-xl">{skill.icon}</span>
        <h3 className="text-base font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
      </div>
      <span className="text-sm font-mono text-blue-600 dark:text-blue-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-blue-300 dark:to-cyan-400 rounded-full"
      />
    </div>
  </Tilt>
))}

        </motion.div>

        {/* Extra Skills */}
        <div className="text-center pt-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Redux", "Next.js", "Webpack", "Jest", "GraphQL", "Sass"].map(skill => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
