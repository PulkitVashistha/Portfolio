import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Max Bögl Renewables",
    period: "Feb 2025–Present",
    description:
      "Managed go-live, implemented DeepL translation and SEO-friendly dispatcher configurations.",
    tech: ["AEMaaCS", "DeepL", "Dispatcher"],
  },
  {
    name: "TTN Retail",
    period: "07/2022 – 11/2024",
    description:
      "• Led the development of master websites for an eCommerce platform using AEM asa Cloud Service (AEMaaCS). Integrated React SPA, Adobe Campaign Standard, and AEM Analytics for personalized user experiences. • Successfully implemented Adobe Journey Optimizer to launch campaigns",
    tech: ["AEMaaCS", "DeepL", "Dispatcher"],
  },
  {
    name: "PWC Viewpoint",
    period: "03/2023 – 11/2024",
    description:
      "Worked extensively on AEM Guides and Adobe XML Add-On for DITA-based content authoring to create a robust CMS for regulatory and technical content.",
    tech: ["AEMaaCS", "DeepL", "Dispatcher"],
  },
  {
    name: "Maxlife Product Launch Track",
    period: "08/2019 – 06/2021 ",
    description:
      "Extensively worked on AEM Forms and integrated Billdesk and Paytm payment gateways, ensuring seamless server-to-server payment flows and secure transactions using Jose encryption.",
    tech: ["AEMaaCS", "DeepL", "Dispatcher"],
  }
];

function ProjectCard({ project }) {
  return (
    <motion.div
      className="rounded-xl shadow-lg border border-indigo-100 bg-white p-5 mb-6 cursor-pointer hover:border-indigo-400 hover:shadow-indigo-100 transition-all"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-indigo-700 font-bold text-lg">{project.name}</h3>
      <span className="text-sm text-gray-400">{project.period}</span>
      <p className="my-2 text-gray-700">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="text-indigo-700 bg-indigo-100 rounded-full px-3 py-1 text-xs shadow">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      {projects.map((proj) => (
        <ProjectCard key={proj.name} project={proj} />
      ))}
    </>
  );
}
