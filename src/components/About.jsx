import React from "react";
import aboutImg from "../assets/aboutImg.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div id="about" className="text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 underline"
        >
          About Me
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12 text-gray-400 text-center"
        >
          
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-8 md:mb-0 md:mr-8 flex justify-center border-t-[5px] border-b-[5px] border-purple-500 shadow-blue-400 shadow-inner rounded-full"
          >
            <img src={aboutImg} className="w-2/3 sm:w-1/2 md:w-10/12 rounded-full" />
          </motion.div>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl "
          >
             As an aspiring Full Stack Web Developer and current BCA student,
             I'm dedicated to mastering Full-end technologies. My academic
             foundation is complemented by hands-on experience in personal
             web projects, where I tackle complex challenges and nurture my
             problem-solving skills. I thrive in the creative and dynamic world of
             web development.
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0">
          {/* <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-8xl font-bold md:my-6 text-purple-500">
              3+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="text-sm sm:text-base text-gray-300"
            >
              Years of Development Experience
            </motion.p>
          </motion.div> */}

          {/* <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.3 }}
          >
            <h3 className="text-3xl md:text-8xl font-bold md:my-6 text-purple-500">
              20+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="text-sm sm:text-base text-gray-300"
            >
              Successful Projects
            </motion.p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 0.3 }}
          >
            <h3 className="text-3xl md:text-8xl font-bold md:my-6 text-purple-500">
              10+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="text-sm sm:text-base text-gray-300"
            >
              Technologies Mastered
            </motion.p>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default About;