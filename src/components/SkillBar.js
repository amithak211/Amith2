import React from 'react';

const SkillBar = ({ name, percent, delay }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1 text-white/80">
      <span>{name}</span>
      <span>{percent}%</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
      <div
        data-aos="fade-right"
        data-aos-delay={delay}
        className="h-full bg-cyan-400 rounded-full"
        style={{ width: `${percent}%`, transition: 'width 1s ease-in-out' }}
      />
    </div>
  </div>
);

export default SkillBar;
