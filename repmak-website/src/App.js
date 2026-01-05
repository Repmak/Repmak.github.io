import React from 'react';
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

            {projects.map((project) => (
                <Project
                    title={project.title}
                    dates={project.dates}
                    imageCaption={project.imageCaption}
                    description={project.description}
                    githubUrl={project.githubUrl}
                    publicRepo={project.publicRepo}
                    cols={project.cols}
                    rows={project.rows}
                    bgColour={project.bgColour}
                />
            ))}
        </main>
    );
}
