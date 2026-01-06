import React, { useMemo } from 'react';
import Hero from './Hero/Hero';
import Project from './Project/Project';
import './App.css';
import {projects} from './projects-data';
import BackgroundGradient from "./BackgroundGradient/BackgroundGradient";
import Glow from "./Glow/Glow";


export default function App() {

    return (
        // <BackgroundGradient>
            <main>
                <Hero />

                {projects.map((project, index) => {
                    return (
                        <Project
                            key={'project-' + index}
                            title={project.title}
                            dates={project.dates}
                            image={project.image}
                            imageCaption={project.imageCaption}
                            imageLeft={project.imageLeft}
                            description={project.description}
                            githubUrl={project.githubUrl}
                            pypiUrl={project.pypiUrl}
                            publicRepo={project.publicRepo}
                            techStack={project.techStack}
                            sizeClass={project.sizeClass}
                            colorClass={project.colorClass}
                        />
                    );
                })}
            </main>
        // </BackgroundGradient>
    );
}
