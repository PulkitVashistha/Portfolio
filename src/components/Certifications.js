import React from "react";
import { motion } from "framer-motion";
import aemLogo from "../assets/AEM.jpeg";

function Certifications() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <div className="flex items-center gap-4">
        <img src={aemLogo} alt="AEM Sites Developer Expert" className="w-16 h-16" />
        <div>
          <span className="font-bold">AEM Sites Developer Expert Certificate (08/2020–08/2026)</span>
          <br />
          <a href="https://www.credly.com/badges" target="_blank" rel="noreferrer" className="text-indigo-700 underline">View Credly Badge</a>
        </div>
      </div>
    </motion.div>
  );
}
export default Certifications;
