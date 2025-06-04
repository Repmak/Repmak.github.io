// git checkout main
// git add .
// git commit -m "update name and tagline"
// git push origin main

import './homepage.css';
import './projects.css';
import Connect4 from "./assets/connect 4.gif"
import FinancialRiskAnalysis from "./assets/financial risk analysis.png"
import AuditoriumBookingSystem from "./assets/auditorium booking system.gif"
import { useEffect, useRef } from "react";
import React from "react";
import { motion, AnimatePresence } from 'motion/react';


const sections = [
    {
        id: 1,
        content: (
            <div className="homepage-container">
                <div className="homepage-name dotted-text">
                    {"JUSTIN KAMPER".split("").map((char, i) =>
                        char === " " ? (
                            <React.Fragment key={i}>
                                {" "}
                                <wbr/>
                            </React.Fragment>
                        ) : (
                            <span key={i}>{char}</span>
                        )
                    )}
                </div>
                <div className="homepage-tagline">
                    I'm a penultimate-year Computer Science student at the University of St Andrews who enjoys solving meaningful problems through forward-thinking software design.
                    <br/><br/>
                    Scroll down to see what I've been working on.
                </div>
                <div className="homepage-links">
                    <a href="https://github.com/Repmak" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/justin-kamper/" target="_blank">LinkedIn</a>
                </div>
            </div>
        )
     },
    {
        id: 2,
        content: (
            <div className="project-container">
                <div className="project-name dotted-text">
                    {"Financial Risk Forecasting".split("").map((char, i) =>
                        char === " " ? (
                            <React.Fragment key={i}>
                                {" "}
                                <wbr/>
                            </React.Fragment>
                        ) : (
                            <span key={i}>{char}</span>
                        )
                    )}
                </div>

                <div className="project-dates">
                    In development since 06/2025
                </div>

                <div className="project-content">
                    <figure>
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
    },
    {
        id: 3,
        content: (
            <div className="project-container">
                <div className="project-name dotted-text">
                    {"Connect 4".split("").map((char, i) =>
                        char === " " ? (
                            <React.Fragment key={i}>
                                {" "}
                                <wbr/>
                            </React.Fragment>
                        ) : (
                            <span key={i}>{char}</span>
                        )
                    )}
                </div>

                <div className="project-dates">
                    Developed from 07/2024 - 08/2024
                </div>

                <div className="project-content">
                    <div className="project-tagline">
                        A Connect 4 game built with Pyglet, featuring an interactive GUI and an AI opponent powered by the minimax algorithm.
                        <br/><br/>
                        <b>Fun fact:</b> This was the very code that helped gain permission for second-year direct entry at university.
                    </div>

                    <figure>
                        <img src={Connect4} alt="Connect 4 demo"/>
                        <figcaption>
                            A quick game of Connect 4.
                        </figcaption>
                    </figure>
                </div>
            </div>
        )
    },
    {
        id: 4,
        content: (
            <div className="project-container">
                <div className="project-name dotted-text">
                    {"Auditorium Booking System".split("").map((char, i) =>
                        char === " " ? (
                            <React.Fragment key={i}>
                                {" "}
                                <wbr/>
                            </React.Fragment>
                        ) : (
                            <span key={i}>{char}</span>
                        )
                    )}
                </div>

                <div className="project-dates">
                    Developed from 03/2023 - 05/2023
                </div>

                <div className="project-content">
                    <figure>
                        <img src={AuditoriumBookingSystem} alt="Auditorium Booking System demo"/>
                        <figcaption>
                            Reserving 5 seats for a showing of Ratatouille at 10 PM.
                        </figcaption>
                    </figure>

                    <div className="project-tagline">
                        An auditorium booking system built with Flask, HTML, JavaScript, CSS, and an SQL database featuring an intuitive interface for reserving seats to movies and plays.
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
            setTimeout(() => (isThrottled = false), 1000);
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
                    initial={{opacity: 0, y: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1.5}}
                >
                    {section.content}
                </motion.div>
            ))}
        </div>
    );
}