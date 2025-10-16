import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "EPAM Systems",
    period: "Nov 2024–Present",
    details: [
      "Developed a Content Migration Tool to automate hundreds of pages migration to AEM using Excel/API and mapping.",
      "Implemented multithreading, custom workflows, servlets, and OSGi services.",
      "Integrated third-party APIs and optimized dispatcher/CDN settings for cloud.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "To The New",
    period: "Aug 2019–Nov 2024",
    details: [
      "Led multiple AEM Cloud Service web apps, SPA (React/Vue), campaign launches.",
      "Designed and developed scalable solutions for eCommerce sites.",
      "Mentored frontend/backend teams in best practices and automation.",
    ],
  }
  // Add more roles as needed
];

function Experience() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white shadow rounded-md p-4">
            <span className="text-xl font-bold">{exp.role}</span>
            <span className="ml-2 text-md text-gray-600">{exp.company} | {exp.period}</span>
            <ul className="list-disc ml-6 mt-2">
              {exp.details.map((d, jdx) => <li key={jdx}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
export default Experience;
