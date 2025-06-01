// git checkout main
// git add .
// git commit -m "add projects"
// git push origin main

import './homepage.css';
import './project-page.css';
import Connect4 from "./assets/connect 4.gif"
import FinancialRiskAnalysis from "./assets/financial risk analysis.png"
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from 'motion/react';


const sections = [
  {
    id: 1,
    content: (
      <div className="homepage-container">
        <div className="homepage-name">
          {"JUSTIN KAMPER".split("").map((char, i) => (
            <span key={i}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </div>
        <div className="homepage-tagline">
          I'm a penultimate-year Computer Science student at the University of St Andrews who enjoys solving meaningful problems through forward-thinking software design.
          <br/><br/>
          Scroll down to see what I've been working on.
        </div>
        <div className="homepage-links">
          <a href="https://github.com/Repmak" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/justin-kamper/" target="_blank">Linkedin</a>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="project-container">
        <div className="project-header">
          <div className="project-name">
            {"Connect 4".split("").map((char, i) => (
              <span key={i}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </div>
          <div className="project-development-dates">
            Developed from 07/2024 - 08/2024
          </div>
        </div>

        <div className="project-content">
          <figure className="project-image">
            <img src={Connect4} alt="Connect 4 demo"/>
            <figcaption>
              A quick game of Connect 4.
            </figcaption>
          </figure>
          <div className="project-tagline">
            A Connect 4 game built with Pyglet, featuring an interactive GUI and an AI opponent powered by the minimax algorithm.
            <br/><br/>
            <b>Fun fact:</b> This was the very code that helped gain permission for second-year direct entry at university.
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="project-container">
        <div className="project-header">
          <div className="project-name">
            {"Connect 4".split("").map((char, i) => (
              <span key={i}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </div>
          <div className="project-development-dates">
            Developed from 06/2025 - Present
          </div>
        </div>

        <div className="project-content">
          <figure className="project-image">
            <img src={FinancialRiskAnalysis} alt="Financial Risk Analysis demo"/>
            <figcaption>
              Scheduling tasks and generating evaluations of associated financial risks.
            </figcaption>
          </figure>
          <div className="project-tagline">
            A TensorFlow-based tool designed to optimise task scheduling by analysing data from previous projects. The backend uses Flask for efficient routing, while the frontend is built with React to provide a responsive user interface.
          </div>
        </div>
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

            container.scrollTo({top: next, behavior: "smooth"});

            isThrottled = true;
            setTimeout(() => (isThrottled = false), 1000); // control scroll speed
        };

        container.addEventListener("wheel", handleScroll, {passive: false});

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