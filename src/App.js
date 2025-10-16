import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Seo from "./seo";
import Section from "./components/Section";

function App() {
  return (
    <div className="bg-indigo-50 text-gray-800 min-h-screen font-sans">
      <Seo />
      <Navbar />
      <main className="pt-16">
        <section id="home"><Hero /></section>
        <Section id="about"><About /></Section>
        <Section id="experience"><Experience /></Section>
        <Section id="projects"><Projects /></Section>
        <Section id="skills"><Skills /></Section>
        <Section id="techstack"><TechStack /></Section>
        <Section id="certifications"><Certifications /></Section>
        <Section id="education"><Education /></Section>
        <Section id="contact"><Contact /></Section>
      </main>
    </div>
  );
}

export default App;
