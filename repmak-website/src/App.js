import React, {useEffect, useState} from 'react';
import './App.css';
import './Text.css';
import {projects} from './projects-data';
import Widget from './Widgets/Widget';
import ProjectWidgetDescr from './Widgets/ProjectWidget/ProjectWidgetDescr';
import ProjectWidgetImg from './Widgets/ProjectWidget/ProjectWidgetImg';
import ProjectWidgetDescrImg from './Widgets/ProjectWidget/ProjectWidgetDescrImg';
import BackgroundGradient from './BackgroundGradient/BackgroundGradient';
import ButtonWidget from './Widgets/ButtonWidget/ButtonWidget';

import LinkedInIcon from './assets/linkedin-icon.svg';
import GitHubIcon from './assets/github-icon.svg';


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
        <BackgroundGradient>
            <main>
                <Widget sizing={"extra-wide"} positioning={"centered"} color={"color-set-1"}
                        header={"Justin Kamper"} content={"Studying Computer Science in my penultimate year at the University of St Andrews, I enjoy tackling meaningful problems through forward-thinking software design."} />
                        {/*header={"Justin Kamper"} content={"I enjoy tackling meaningful problems through forward-thinking software design."} />*/}

                <ButtonWidget icon={LinkedInIcon} link={"https://www.linkedin.com/in/justin-kamper/"} alt={"LinkedIn"}/>

                <ButtonWidget icon={GitHubIcon} link={"https://github.com/Repmak"} alt={"GitHub"}/>

                {/*<Widget sizing={"tall"} positioning={"bottom-left"} color={"color-set-2"}*/}
                {/*        header={""} content={""} />*/}

                {projects.map((project, index) => (
                    <ProjectWidgetDescr key={index} sizing={project.sizing} positioning={project.positioning} color={project.color}
                                        title={project.title} dates={project.dates} description={project.description}
                                        techStack={project.techStack} repo={project.repo} publicRepo={project.publicRepo}/>
                ))}
            </main>
        </BackgroundGradient>
    );
}
