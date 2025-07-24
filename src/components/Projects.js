import React from 'react';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio site built with React and Tailwind CSS.',
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'E-commerce Store',
    description: 'An online store with cart and payment integration.',
    link: 'https://your-store-link.com',
  },
  {
    title: 'Chat App',
    description: 'A real-time chat app using Socket.io and Node.js.',
    link: 'https://your-chatapp-link.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="all"
              className="bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.4)]"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
