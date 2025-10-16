import React from "react";
import { motion } from "framer-motion";

const categories = {
  "Programming Languages": ["Java", "HTL", "jQuery", "JavaScript", "React", "VueJs", "GraphQL"],
  "Adobe Suite": ["AEM 6.2-6.5", "AEMaaCS", "Campaign Std", "Analytics", "AJO", "AEP"],
  "Frameworks/Cloud": ["Dispatcher", "Docker", "Apache Sling", "OSGi", "GIT"],
  "Platforms": ["Touch UI", "Sling Models", "Servlets", "JCR Queries", "Editable Templates", "Exp Fragments", "Workflows", "Tagging", "CDN", "Cache"],
};

function Skills() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(categories).map(([cat, tags], idx) => (
          <div key={idx}>
            <span className="font-bold">{cat}</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, jdx) => (
                <span key={jdx} className="bg-gray-200 rounded-full px-3 py-1 text-xs">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
export default Skills;
