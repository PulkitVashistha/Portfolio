import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aemLogo from "../assets/AEM.jpeg";
import reactLogo from "../assets/react.png";
import campaignLogo from "../assets/adobe-campaign.png";
import analyticsLogo from "../assets/adobe-analytics.png";
import dockerLogo from "../assets/docker.png";
import gitLogo from "../assets/git.png";
import aepLogo from "../assets/adobe-experience-platform.png";
import ajoLogo from "../assets/adobe-journey-optimizer.png";
import launchLogo from "../assets/adobe-launch.png";
import deeplLogo from "../assets/deepl.jpeg";
import javaLogo from "../assets/java.png";
import jsLogo from "../assets/javascript.png";
import graphqlLogo from "../assets/graphql.png";

const stack = [
  { label: "AEM", src: aemLogo },
  { label: "Adobe Experience Platform", src: aepLogo },
  { label: "Adobe Journey Optimizer", src: ajoLogo },
  { label: "Adobe Launch", src: launchLogo },
  { label: "Adobe Campaign", src: campaignLogo },
  { label: "Adobe Analytics", src: analyticsLogo },
  { label: "Docker", src: dockerLogo },
  { label: "GIT", src: gitLogo },
  { label: "React", src: reactLogo },
  { label: "Javascript", src: jsLogo },
  { label: "Java", src: javaLogo },
  { label: "DeepL", src: deeplLogo },
  { label: "GraphQL", src: graphqlLogo }
];

export default function TechStack() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-12 md:p-16 mx-auto mt-6">
      <h2 className="text-3xl mb-10 font-extrabold text-gray-800 text-center tracking-tight">
        Tech Stack
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {stack.map((tech, idx) => (
          <motion.div
            key={tech.name}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            tabIndex={0}
            onFocus={() => setHovered(idx)}
            onBlur={() => setHovered(null)}
          >
            <motion.img
              src={tech.src}
              alt={tech.label}
              className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] cursor-pointer transition-shadow rounded-xl"
              initial={false}
              animate={{
                scale: hovered === idx ? 1.18 : 1,
                boxShadow: hovered === idx
                  ? "0 6px 24px 0 rgba(107,70,193,0.16)"
                  : "0 2px 8px 0 rgba(99,102,241,0.11)",
                zIndex: hovered === idx ? 10 : 1
              }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            />
            <AnimatePresence>
              {hovered === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 8 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.23 }}
                  className="
        absolute left-1/2 -translate-x-1/2 
        top-full mt-2 
        bg-gradient-to-r from-indigo-100 to-purple-50 
        px-3 py-1 rounded-lg shadow text-sm 
        font-semibold text-indigo-700 
        w-max text-center z-50 whitespace-nowrap
      "
                >
                  {tech.label}
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        ))}
      </div>
    </div>
  );
}