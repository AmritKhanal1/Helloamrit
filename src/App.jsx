import React, { useEffect, useRef } from "react";
import "./assets/css/index.css";

import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

export default function App() {
  const sectionsRef = useRef([]);
  
  useEffect(() => {
    const fadeInOnScroll = () => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("visible");
        }
      });
    };
    
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger initially
    return () => window.removeEventListener("scroll", fadeInOnScroll);
  }, []);
  
  return (
    <>
      <Header />
      <main>
        {[
          { id: "home", component: <Hero /> },
          { id: "skills", component: <Skills /> },
          { id: "experience", component: <Experience /> },
          { id: "education", component: <Education /> },
          { id: "projects", component: <Projects /> },
          { id: "contact", component: <Contact /> },
        ].map(({ id, component }, index) => (
          <section
            id={id}
            key={id}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="fade-in"
          >
            {component}
          </section>
        ))}
      </main>
    </>
  );
}


