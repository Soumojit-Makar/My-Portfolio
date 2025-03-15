import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithubAlt, FaGithub, FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-2">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold cursor-pointer"
        >
          Let's Discuss Your <span className="text-purple-500">Project</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-slate-400 mt-4 cursor-pointer"
        >
          Let's make something new, different, and meaningful.
        </motion.p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaPhone className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500 cursor-pointer">Call Me</p>
              <p className="text-white">+91 8250431994</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaEnvelope className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500 cursor-pointer">Email</p>
              <a href="mailto:soumojitmakar1234@gmail.com" target="_blank" className="text-white">soumojitmakar1234@gmail.com</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaGithub className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500 cursor-pointer">Github</p>
              <a href="https://github.com/Soumojit-Makar" target="_blank" className="text-white">Soumojit-Makar</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaLinkedin className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500 cursor-pointer">LinkedIn</p>
              <a href="https://www.linkedin.com/in/soumojit-makar-a9a119304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-white">Soumojit Makar</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-purple-500 p-4 rounded-full">
              <FaDiscord className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500 cursor-pointer">Discord</p>
              <a href="https://discord.com/users/mr.soumojitmakar" target="_blank" className="text-white">Soumojit-Makar</a>
            </div>
          </motion.div>
          
        </div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="space-y-4 text-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full name" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full" />
            <input type="email" placeholder="Your email" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full" />
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> */}
            <input type="text" placeholder="Phone number" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full" />
            {/* <input type="email" placeholder="Budget" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full" /> */}
          {/* </div> */}
          <textarea placeholder="Message" className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200"
          >
            Submit Message
          </motion.button>
        </motion.form>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-11 flex justify-center space-x-2 items-center p-2 text-white border-t-2 border-purple-500"
      >
        <p>© 2025. All Rights Reserved</p>
        {/* <p>Soumojit Makar</p> */}
        {/* <div className="flex justify-center space-x-4">
          <a className="hover:text-purple-500"><FaFacebook className="w-6 h-6" /></a>
          <a className="hover:text-purple-500"><FaTwitter className="w-6 h-6" /></a>
          <a className="hover:text-purple-500"><FaLinkedin className="w-6 h-6" /></a>
          <a className="hover:text-purple-500"><FaInstagram className="w-6 h-6" /></a>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Contact;
