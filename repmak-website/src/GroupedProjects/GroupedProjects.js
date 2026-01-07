import React from 'react';
import '../App.css';
import '../TextStyles.css';
import './GroupedProjects.css';
import Divider from "../Divider/Divider";
import Project from "../Project/Project";


export default function GroupedProjects({ dividerText, yearProjects }) {
    return (
        <div className="grouped-projects-container">
            <Divider text={dividerText} />

            {yearProjects.map((project, index) => {
                return (
                    <Project
                        key={'project-' + dividerText + '-' + index}
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
        </div>
    );
};
