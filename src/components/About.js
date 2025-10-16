import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p>
        AEM Certified Developer with 6.5 years of hands-on experience in Adobe Cloud Suites (AEM, AEMaaCS, Analytics, Journey Optimizer, Campaign, AEP), and strong proficiency in modern JavaScript frameworks (jQuery, VueJs, ReactJS).
        Experienced in web development, enterprise content management, and high-complexity projects in insurance and eCommerce domains.
        Known for exceptional problem-solving, analytical thinking, technical troubleshooting, and mentoring junior devs.
      </p>
    </motion.div>
  );
}
export default About;
