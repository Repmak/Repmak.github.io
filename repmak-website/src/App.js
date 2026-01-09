import React, {useEffect, useState} from 'react';
import './App.css';
import './Text.css';
import {projects} from './projects-data';
import Widget from './Widgets/Widget';
import ButtonsWidget1 from './Widgets/ButtonsWidget/ButtonsWidget1';
import ButtonsWidget2 from './Widgets/ButtonsWidget/ButtonsWidget2';
import ProjectWidget1 from './Widgets/ProjectWidget/ProjectWidget1';
import ProjectWidget2 from './Widgets/ProjectWidget/ProjectWidget2';
import BackgroundGradient from "./BackgroundGradient/BackgroundGradient";


export default function App() {

    // const [brightness, setBrightness] = useState(1);

    // useEffect(() => {
    //     const root = document.documentElement;
    //     root.style.setProperty('--bg-color', 'rgb(34, 34, 34)');
    // }, [brightness]);

    const [darkMode, setDarkMode] = useState(1);

    useEffect(() => {

    }, [darkMode]);

    return (
        // <BackgroundGradient>
            <main>
                <Widget sizing={"extra-wide"} positioning={"centered"} color={"color-set-1"}
                        header={"Justin Kamper"} content={"Studying Computer Science in my penultimate year at the University of St Andrews, I enjoy tackling meaningful problems through forward-thinking software design."} />

                <ButtonsWidget2 darkMode={darkMode} setDarkMode={setDarkMode} />

                <Widget sizing={"tall"} positioning={"bottom-left"} color={"color-set-2"}
                        header={""} content={""} />

                {projects.map((project, index) => (
                    <ProjectWidget1 key={index} sizing={project.sizing} positioning={project.positioning} color={project.color}
                                    title={project.title} dates={project.dates} description={project.description}
                                    techStack={project.techStack} repo={project.repo} publicRepo={project.publicRepo}/>
                ))}
            </main>
        // </BackgroundGradient>
    );
}
