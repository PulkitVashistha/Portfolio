import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur border-b shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-lg font-bold text-indigo-700">Pulkit Vashistha</span>
        <div className="md:hidden z-50">
          <button onClick={() => setOpen(!open)}>
            {!open ? (
              <svg width={32} height={32} fill="none" stroke="#6366f1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="7" x2="29" y2="7" />
                <line x1="3" y1="15" x2="29" y2="15" />
                <line x1="3" y1="23" x2="29" y2="23" />
              </svg>
            ) : (
              <svg width={32} height={32} fill="none" stroke="#6366f1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="4" x2="28" y2="28" />
                <line x1="28" y1="4" x2="4" y2="28" />
              </svg>
            )}
          </button>
        </div>
        <div className="space-x-6 md:flex hidden">
          {links.map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              className="text-gray-700 hover:text-indigo-600 transition font-semibold px-2 py-1 rounded"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>

      {open && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white/95 z-40 flex flex-col gap-6 items-center justify-center md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
        >
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl font-bold text-indigo-700 py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
