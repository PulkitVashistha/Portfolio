import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.JPG";

export default function Hero() {
  return (
    <div className="w-full bg-indigo-50 pt-28 pb-10"> {/* Light section color */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Text Section: LEFT */}
        <div className="flex-1 flex flex-col md:items-start items-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-2 md:text-left text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Pulkit Vashistha
          </motion.h1>
          <motion.h2
            className="text-lg md:text-2xl text-indigo-600 mb-2 md:text-left text-center"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Adobe Experience Cloud Enthusiast
          </motion.h2>
          <p className="mt-2 text-base text-gray-700 md:text-left text-center">
            Senior AEM Developer | Gurugram, Haryana, India
          </p>
          <motion.div
            className="flex flex-wrap gap-6 mt-4 md:justify-start justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a href="mailto:sharmapulkit43@gmail.com" className="text-indigo-700 hover:text-indigo-500 transition">
              Email
            </a>
            <a href="https://linkedin.com/in/pulkit-vashistha-a2361482" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:text-indigo-500 transition">
              LinkedIn
            </a>
            <a href="https://experienceleaguecommunities.adobe.com/t5/user/viewprofilepage/user-id/16639683" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:text-indigo-500 transition">
              Adobe Advisor
            </a>
          </motion.div>
        </div>
        {/* Image Section: RIGHT */}
        <div className="flex-1 flex flex-col items-center mt-10 md:mt-0">
          <motion.img
            src={profilePic}
            alt="Pulkit Vashistha"
            className="w-72 h-72 md:w-[420px] md:h-[420px] rounded-full object-cover shadow-2xl border-4 border-violet-300"
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          {/* Properly centered, below the image */}
          <motion.a
            href="/resume.pdf"
            download
            className="
              mt-7
              bg-gradient-to-r from-indigo-500 to-purple-600
              text-white
              px-8 py-3
              rounded-xl shadow font-semibold
              hover:from-indigo-600 hover:to-purple-700 transition
              text-lg
              text-center
            "
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
}
