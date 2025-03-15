import React from 'react';
import { FaCode, FaLock, FaDatabase, FaCloud, FaComments, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const servicesData = [
    {
      title: "Full Stack Development",
      description:
        "Building scalable and efficient web applications using Spring Boot, React.js, and FastAPI.",
      icon: <FaCode className="text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,
    },
    {
      title: "API Development",
      description:
        "Creating RESTful and GraphQL APIs with OpenAPI documentation for seamless integration.",
      icon: <FaServer className="text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,
    },
    {
      title: "Cloud Deployment & DevOps",
      description:
        "Deploying applications on AWS, Docker for scalable cloud solutions.",
      icon: <FaCloud className="text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,
    },
    // {
    //   title: "Database Design & Optimization",
    //   description:
    //     "Structuring efficient databases using MySQL, PostgreSQL, and MongoDB for optimal performance.",
    //   icon: <FaDatabase className="text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />,
    // }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div id='services' className="text-white py-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold underline mb-8">
          Services
        </h2>
        <p className="mb-12 text-gray-400">
          Leveraging expertise in Full Stack Development, Security, and Cloud Deployments to build robust applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300"
            >
              {service.icon}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;