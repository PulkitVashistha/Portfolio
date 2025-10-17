import React from "react";
import { motion } from "framer-motion";
import aemLogo from "../assets/AEM.jpeg";
import reactLogo from "../assets/react.png";
import campaignLogo from "../assets/adobe-campaign.png";
import analyticsLogo from "../assets/adobe-analytics.png";
import dockerLogo from "../assets/docker.png";
import gitLogo from "../assets/git.png";
import graphqlLogo from "../assets/graphql.png";

// Placeholder for logos, use SVGs or PNGs in src/assets
const stack = [
  { label: "AEM", src: aemLogo },
  { label: "React", src: reactLogo },
  { label: "Adobe Campaign", src: campaignLogo },
  { label: "Adobe Analytics", src: analyticsLogo },
  { label: "Docker", src: dockerLogo },
  { label: "GIT", src: gitLogo },
  { label: "GraphQL", src: graphqlLogo }
];

function TechStack() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {stack.map((tech, idx) => (
          <img key={idx} src={tech.src} alt={tech.label} title={tech.label} className="w-12 h-12 opacity-85 hover:scale-105 transition" />
        ))}
      </div>
    </motion.div>
  );
}
export default TechStack;
