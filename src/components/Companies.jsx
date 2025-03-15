import React from "react";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";

const Companies = () => {
  const technologies = [
    "Spring Boot",
    "React.js",
    "MongoDB",
    "Docker",
    "Redis",
    "RabbitMQ",
    "GraphQL",
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "PHP",
    "C / C++",
  ];

  const techList = [...technologies, ...technologies];

  const scrollVariant1 = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  const scrollVariant2 = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Technologies I Work With
        </h2>
        <div className="overflow-hidden relative w-full">
          <motion.div
            variants={scrollVariant1}
            animate="animate"
            className="whitespace-nowrap flex space-x-10"
          >
            {techList.map((tech, index) => (
              <div
                key={index}
                className="text-lg bg-gray-800 px-2 py-3 rounded-full inline-block border border-purple-500  shadow-blue-400 shadow-inner"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
        <div className="overflow-hidden relative w-full mt-5">
          <motion.div
            variants={scrollVariant2}
            animate="animate"
            className="whitespace-nowrap flex space-x-10"
          >
            {techList.map((tech, index) => (
              <div
                key={index}
                className="text-lg bg-gray-800 px-6 py-3 rounded-full inline-block border border-purple-500 shadow-blue-400 shadow-inner"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Companies;