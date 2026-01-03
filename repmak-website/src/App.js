import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useEffect, useRef} from 'react';
import NavigationBar from "./NavigationBar/NavigationBar";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Glow from "./Glow/Glow";
import './App.css';


export default function App() {
    return (
        <Router>
            <Glow />
            <main>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </main>
        </Router>
    );
}
