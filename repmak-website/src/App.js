import React, { useMemo } from 'react';
import AboutMe from './AboutMe/AboutMe';
import ExternalLinks from './ExternalLinks/ExternalLinks';
import Project from './Project/Project';
import './App.css';
import {projects} from './projects-data';


export default function App() {

    return (
        <main>
            <AboutMe />
            <ExternalLinks />

            {projects.map((project, index) => {
                return (
                    <Project
                        key={'project-' + index}
                        title={project.title}
                        dates={project.dates}
                        imageCaption={project.imageCaption}
                        description={project.description}
                        githubUrl={project.githubUrl}
                        publicRepo={project.publicRepo}
                        techStack={project.techStack}
                        cols={project.cols}
                        rows={project.cols}
                        colorClass={project.colorClass}
                    />
                );
            })}
        </main>
    );
}
