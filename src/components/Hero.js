import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" data-aos="fade-up">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/228982_medium.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay with correct bg */}
      <div className="absolute w-full h-full bg-black bg-opacity-60 z-10"></div>

      {/* 🔹 Content */}
      <div className="z-20 text-center text-blue-500 px-4">
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
