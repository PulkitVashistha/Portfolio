import React from "react";
import { motion } from "framer-motion";

// Placeholder for logos, use SVGs or PNGs in src/assets
const stack = [
  { label: "AEM", src: "assets/aem-logo.svg" },
  { label: "React", src: "assets/react-logo.svg" },
  { label: "VueJs", src: "assets/vue-logo.svg" },
  { label: "Adobe Campaign", src: "assets/campaign-logo.svg" },
  { label: "Adobe Analytics", src: "assets/analytics-logo.svg" },
  { label: "Docker", src: "assets/docker-logo.svg" },
  { label: "GIT", src: "assets/git-logo.svg" },
  { label: "GraphQL", src: "assets/graphql-logo.svg" }
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
