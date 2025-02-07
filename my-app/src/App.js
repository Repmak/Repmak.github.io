import './App.css';
import { motion } from "framer-motion";

function App() {
    return (
        <html>
        <body>
        <div className="header">
            JUSTIN KAMPER
            <div className="flex justify-center items-center h-screen">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    width="60"
                    height="60"
                    animate={{y: [0, 10, 0]}}
                    transition={{repeat: Infinity, duration: 1.5, ease: "easeInOut"}}
                >
                    <path
                        d="M12 2v16m0 0l-6-6m6 6l6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.svg>
            </div>
        </div>

        <div className="projects-container">
            <div className="project">
                <div className="project-title">
                    Financial Risk Forecasting
                </div>
                <div className="project-status project-status-in-development">
                    In development
                </div>

            </div>

            <div className="project">
                <div className="project-title">
                    Connect 4
                </div>
                <div className="project-status project-status-completed">
                    Completed (06/2024 - 07/2024)
                </div>
            </div>
        </div>

        </body>
        </html>
    );
}

export default App;
