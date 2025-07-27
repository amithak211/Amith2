import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";


export default function About() {
  const experiences = [
    { year: "2023", title: "Frontend Developer", company: "Tech Corp" },
    { year: "2022", title: "Web Developer Intern", company: "StartUp Inc" },
    { year: "2021", title: "Freelance Developer", company: "Self-employed" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 backdrop-blur-md  dark:bg-black-900/40 transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-10"
      >
        <motion.h2
          variants={containerVariants}
          className="text-4xl md:text-5xl font-bold text-center text-blue-700 dark:text-blue-400"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="text-gray-700 dark:text-gray-300 text-lg space-y-5 leading-relaxed"
        >
          <p>
            👋 I'm Amith, a final-year diploma student at Karnataka Government Polytechnic and a passionate Frontend Developer. I specialize in crafting beautiful and functional web experiences using modern technologies like React.
          </p>
          <p>
            My academic journey at KPT has provided me with a strong foundation in both theoretical concepts and practical implementation. Through hands-on mini-projects, lab work, and collaborative assignments, I've developed a comprehensive understanding of software development.
          </p>
          <p>
            I'm proficient in programming languages like C, C++, Python, and Java, with extensive experience in web technologies including HTML, CSS, JavaScript, and basic SQL. My focus has been on creating responsive, user-friendly interfaces that deliver exceptional experiences.
          </p>
          <p>
            Currently, I'm immersed in my final-year project which serves as the capstone to my diploma studies. This project is helping me refine my problem-solving abilities, enhance team collaboration skills, and deepen my understanding of building real-world software solutions.
          </p>
        </motion.div>

        {/* Experience Timeline with 3D Tilt */}
        <motion.div
          variants={containerVariants}
          className="mt-10 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">
            Professional Experience
          </h3>

          {experiences.map((exp, index) => (
            <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareColor="lightblue" className="w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-400 transition duration-300"
              >
                <div className="text-blue-500 dark:text-blue-400 font-mono whitespace-nowrap">
                  {exp.year}
                </div>
                <div className="border-l-2 border-blue-200 dark:border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
