// git checkout main
// git add .
// git commit -m "new icon"
// git push origin main

import './App.css';
import './id-1.css';
import './id-2.css';
import './id-3.css';
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from 'motion/react';


const sections = [
  {
    id: 1,
    content: (
      <div className="header">
        <div className="name">
          {"JUSTIN KAMPER".split("").map((char, i) => (
            <span key={i}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </div>
        <div className="tagline">
          I'm a penultimate-year Computer Science student at the University of St Andrews who enjoys solving meaningful problems through forward-thinking software design. Scroll down to see what I've been working on.
        </div>
        <div className="links">
          <a href="https://github.com/Repmak" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/justin-kamper/" target="_blank">Linkedin</a>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="section-content">
        <div className="tagline">Here are some things I've built...</div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="section-content">
        <div className="tagline">More stuff I've built...</div>
      </div>
    )
  }
];

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let isThrottled = false;

    const handleScroll = (e) => {
      e.preventDefault();
      if (isThrottled) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentScroll = container.scrollTop;
      const next = Math.round((currentScroll + direction * window.innerHeight) / window.innerHeight) * window.innerHeight;

      container.scrollTo({ top: next, behavior: "smooth" });

      isThrottled = true;
      setTimeout(() => (isThrottled = false), 1000); // control scroll speed
    };

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-container">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          className="section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {section.content}
        </motion.div>
      ))}
    </div>
  );
}