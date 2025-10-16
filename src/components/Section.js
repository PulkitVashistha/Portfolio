import React from "react";
import { motion } from "framer-motion";

export default function Section({ id, children }) {
  return (
    <motion.section
      id={id}
      className="max-w-5xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-xl shadow-lg p-6">{children}</div>
    </motion.section>
  );
}
