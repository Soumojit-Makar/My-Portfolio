import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Companies from "./Companies";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { FaGithub } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { ImImage } from "react-icons/im";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Secure File Sharing App",
      description: "A secure and role-based file-sharing application built with Spring Boot, allowing users to upload, share, and access files with controlled permissions.",
      details: "Technologies Used:\n- **Back-end**: Spring Boot (core logic, file handling, expiration management)\n- **Security**: Spring Security (authentication & role-based access control)\n- **API Documentation**: OpenAPI (Swagger) for interactive API documentation\n- **Database**: MySQL (stores user data, file metadata, access permissions)",
      image: null,
      livelink: "#",
      githubLink: "https://github.com/Soumojit-Makar/File-Sharing-Application"
    },
    {
      id: 2,
      title: "Real-Time Chat Room Application",
      description: "A simple chat room application built with Spring Boot and React.js, allowing users to join rooms and communicate in real time.",
      details: "Technologies Used:\n- **Back-end**: Spring Boot (manages chat rooms and messages)\n- **Front-end**: React.js (interactive chat UI)\n- **Real-time Communication**: WebSockets (instant messaging)\n- **Database**: MongoDB (stores chat rooms and messages)\n- **Security**: Password-protected chat rooms",
      image: project2,
      livelink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Contact Manager",
      description: "A secure and intuitive web application for managing and organizing contacts efficiently.",
      details: "Technologies Used:\n- **Back-end**: Spring Boot (core logic, user authentication, contact management)\n- **Security**: Spring Security (authentication, OAuth2, authorization)\n- **Email Service**: JavaMailSender (email verification during registration)\n- **Cloud Storage**: Cloudinary (image storage)\n- **Front-end**: Thymeleaf, HTML, CSS, Tailwind CSS\n- **Database**: MySQL (stores contacts, user data, verification tokens)",
      image: project3,
      livelink: "https://www.soumojitmakar.site",
      githubLink: "https://github.com/Soumojit-Makar/Contact-Manager"
    },
    {
      id: 4,
      title: "AI-Powered Email Enhancement & Delivery",
      description: "Welcome to AI Email Assistant, your ultimate solution for crafting professional, error-free, and compelling emails.",
      details: "Technologies Used:\n- **Back-end**: Spring Boot (core logic, user authentication, email management)\n- **AI Integration**: DeepSeek-R1 AI (grammar correction, email rewriting)\n- **Email Service**: JavaMailSender (email delivery)\n- **Front-end**: ReactJS, Tailwind CSS",
      image: project4,
      livelink: "#",
      githubLink: "https://github.com/Soumojit-Makar/Email-Sender"
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="work" className="py-8 mt-4 cursor-pointer">
      <div className=" mx-auto px-8 ">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          
          className="text-4xl text-white underline font-bold text-center mb-12"
        >
          My Work
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project) => {
            const { ref: projectRef, inView: projectInView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                ref={projectRef}
                initial={{ opacity: 0, y: 50 }}
                animate={projectInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: project.id * 0.2, duration: 0.5 }}
                key={project.id}
                className=" bg-gray-900  rounded-lg overflow-hidden border-2 border-purple-500 shadow-blue-400 shadow-lg scale-100 transform transition-transform duration-700 hover:scale-110 mb-4"
              >
                <div className="">
                {project.image ? (
                  <img src={project.image} className="w-full h-48 object-cover" alt={project.title} />
                ) : (
                  <ImImage className="w-full h-48 object-cover mb-4 text-white" />
                )}

                <div className="p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <button
                    className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </button>
                </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Companies />
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 w-full"
        >
          <div className="bg-gray-900 p-8 rounded-lg max-w-lg w-full border-t-4 border-b-4 border-purple-500 shadow-blue-400 shadow-inner">
            <h2 className="text-2xl text-white font-bold mb-4">{selectedProject.title}</h2>

            {selectedProject.image ? (
              <img src={selectedProject.image} className="w-full h-48 object-cover mb-4" alt={selectedProject.title} />
            ) : (
              <ImImage className="w-full h-48 object-cover mb-4 text-white" />
            )}

            <p className="text-slate-400 mb-4">{selectedProject.description}</p>
            <p className="text-gray-400 mb-4">
              {selectedProject.details.split("\n").map((line, index) => (
                <span key={index}>{line}<br /></span>
              ))}
            </p>

            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <a href={selectedProject.livelink} target="_blank" rel="noopener noreferrer" className="text-purple-500">
                  <FaEarthAsia size={30} />
                </a>
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="text-purple-500">
                  <FaGithub size={30} />
                </a>
              </div>
              <button
                className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Work;
