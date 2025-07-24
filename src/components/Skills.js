import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs
} from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
import { SiTailwindcss, SiMongodb, SiPython } from 'react-icons/si';
import './Skills.css'; // ⬅️ For tilt effect styles

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'Java', icon: <DiJava className="text-orange-600" /> },
  { name: 'Python', icon: <SiPython className="text-blue-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card cursor-pointer p-6 rounded-xl bg-gray-800 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_25px_#00f0ff] tilt"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
