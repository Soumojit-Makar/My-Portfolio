import React, { useEffect, useState } from 'react';
import avatar from "../assets/sm.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
const typingTexts = ["Full Stack Web Developer", "Backend Developer"];
const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < typingTexts[textIndex].length) {
        setTypedText((prev) => prev + typingTexts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedText("");
          setCharIndex(0);
          setTextIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
        }, 1000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [charIndex, textIndex]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="text-white py-4">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        src={avatar}
        className="mx-auto w-2/3 md:w-1/3 lg:w-1/4 rounded-full border-4 border-purple-500 shadow-lg "
        alt="Profile Avatar"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4 cursor-pointer"
        >
          Crafting Scalable & Secure Apps
          <motion.span
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl text-purple-300 font-bold text-center mb-12 cursor-pointer"
        >
          {typedText}
          <span className="text-purple-500">|</span>
        </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-gray-400 text-lg mb-8 cursor-pointer"
        >
          Passionate about building secure, scalable applications with modern web technologies.
        </motion.p>

        <div className="flex justify-center space-x-4 mb-10">
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="bg-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-600 transition"
          >
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              Hire Me
            </Link>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-white border border-white px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-black transition"
          >
            <Link to="work" smooth={true} duration={500} offset={-70}>
              My Projects
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;