import React from 'react';
import Typewriter from 'typewriter-effect';
//import profileImage from '../assets/1.jpg';
//import bgVideo from '../assets/217643_tiny.mp4';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
     {/*{/* Background Video 
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>*/}

      {/* Overlay */}
      <div className="absolute w-full h-full bg-blue bg-opacity-60"></div>

      {/* Content */}
      <div
        data-aos="fade-up"
        className="z-10 text-center text-white px-4"
      >
        {/*<img
          src={profileImage}
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto border-4 border-white mb-6"
        />*/}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Amith
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-300 font-medium mb-4">
          <Typewriter
            options={{
              strings: ['Frontend Developer', 'React Enthusiast', 'Open Source Contributor'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <a
          href="#contact"
          className="inline-block mt-4 px-6 py-2 border border-white rounded hover:bg-blue-500 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
