
// https://create-react-app.dev/docs/deployment/

// git checkout main
// git add .
// git commit -m "update name and tagline"
// git push origin main

import './App.css';
import { motion, AnimatePresence } from 'motion/react';

function App() {
    return (
        <html>
        <body>
        <div className="header">
            <div className="header-name">
                <span>J</span><span>U</span><span>S</span><span>T</span><span>I</span><span>N</span><span>&nbsp;</span><span>K</span><span>A</span><span>M</span><span>P</span><span>E</span><span>R</span>
            </div>
            <div className="header-tagline">I'm a penultimate-year Computer Science student at the University of St Andrews who enjoys solving meaningful problems through forward-thinking software design. Scroll down to see what I've been working on.</div>
        </div>

        <div className="projects-container">
            <div className="project">
                <div className="project-title">
                    Financial Risk Forecasting
                </div>
                <div className="project-status project-status-in-development">
                    In development
                </div>
                <div className="project-description">
                </div>
            </div>

            <div className="project">
                <div className="project-title">
                    Connect 4
                </div>
                <div className="project-status project-status-completed">
                    Completed (06/2024 - 07/2024)
                </div>
                <div className="project-description">

                </div>
            </div>

            <div className="project">
                <div className="project-title">
                    Bike Part Picker
                </div>
                <div className="project-status project-status-completed">
                    Completed (01/2024 - 03/2024)
                </div>
                <div className="project-description">

                </div>
            </div>

            <div className="project">
                <div className="project-title">
                    Auditorium Booking System
                </div>
                <div className="project-status project-status-completed">
                    Completed (03/2023 - 05/2023)
                </div>
                <div className="project-description">

                </div>
            </div>
        </div>

        </body>
        </html>
    );
}

export default App;
