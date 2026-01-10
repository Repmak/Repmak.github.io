import React, {useEffect, useState} from 'react';
import './App.css';
import './Text.css';
import {projects} from './projects-data';
import Widget from './Widgets/Widget';
import ProjectWidget from './Widgets/ProjectWidget/ProjectWidget';
import ProjectWidgetImg from './Widgets/ProjectWidget/ProjectWidgetImg';
import BackgroundGradient from './BackgroundGradient/BackgroundGradient';
import ButtonWidget from './Widgets/ButtonWidget/ButtonWidget';

import LinkedInIcon from "./assets/LinkedInIcon";
import GitHubIcon from "./assets/GitHubIcon";

export default function App() {

    // const [brightness, setBrightness] = useState(1);

    // useEffect(() => {
    //     const root = document.documentElement;
    //     root.style.setProperty('--bg-color', 'rgb(34, 34, 34)');
    // }, [brightness]);

    return (
        // <BackgroundGradient>
        <main>
            <Widget sizing={"extra-wide"} positioning={"centered"} color={"color-set-1"}
                    header={"Justin Kamper"} content={"Studying Computer Science in my penultimate year at the University of St Andrews, I enjoy tackling meaningful problems through forward-thinking software design."} />
                    {/*header={"Justin Kamper"} content={"I enjoy tackling meaningful problems through forward-thinking software design."} />*/}

            <ButtonWidget icon={LinkedInIcon} link={"https://www.linkedin.com/in/justin-kamper/"} />
            <ButtonWidget icon={GitHubIcon} link={"https://github.com/Repmak"} />

            {projects.map((project, index) => (
                project.image ? (
                    <ProjectWidgetImg key={index} sizing={project.sizing} positioning={project.positioning} color={project.color}
                                    title={project.title} dates={project.dates} description={project.description} image={project.image}
                                    techStack={project.techStack} repo={project.repo} publicRepo={project.publicRepo}/>
                ) : (
                    <ProjectWidget key={index} sizing={project.sizing} positioning={project.positioning} color={project.color}
                                   title={project.title} dates={project.dates} description={project.description}
                                   techStack={project.techStack} repo={project.repo} publicRepo={project.publicRepo}/>
                )
            ))}
        </main>
        // </BackgroundGradient>
    );
}
