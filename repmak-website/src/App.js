import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from "./NavigationBar/NavigationBar";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import BackgroundGradient from "./BackgroundGradient/BackgroundGradient";
import Glow from "./Glow/Glow";
import './App.css';


export default function App() {
    return (
        <Router>
            <Glow />
            <main>
                <BackgroundGradient
                    BLrad='6px'
                    BRrad='6px'
                >
                    <NavigationBar />
                </BackgroundGradient>
                <Routes>
                    <Route path="/"
                        element={
                        <BackgroundGradient
                            TLrad='6px'
                            TRrad='6px'
                        >
                            <AboutMe />
                        </BackgroundGradient>
                        }
                    />
                    <Route path="/projects"
                        element={
                        <BackgroundGradient
                            TLrad='6px'
                            TRrad='6px'
                        >
                            <Projects />
                        </BackgroundGradient>
                        }
                    />
                </Routes>
            </main>
        </Router>
    );
}
