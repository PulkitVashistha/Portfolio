import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <ul className="list-disc ml-6">
        <li>B.Tech, Computer Science & Engineering (ABES Engineering College, 2015–2019)</li>
        <li>Delhi Public School, Intermediate Science</li>
      </ul>
    </motion.div>
  );
}
export default Education;
