import React, {useState} from 'react';
import '../../App.css';
import '../../Text.css';
import '../Widget.css';
import './ProjectWidget.css';
import ExternalLinkIcon from "../../assets/ExternalLinkIcon";


export default function ProjectWidget({
    title, dates, description, image, techStack, repo, publicRepo,
    sizing="",
    color="",
}) {
    const classNamesOuter = `widget-container ${sizing}`;
    const classNamesInner = `widget ${color}`;

    return (
        <div className={classNamesOuter}>
            <div className={classNamesInner}>
                <div className="project-header">
                    <h1>{title}</h1>
                    {publicRepo && (
                        <a href={repo} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="project-external-link" />
                        </a>
                    )}
                </div>

                <h2>{dates}</h2>

                {description && (
                    <p>{description}</p>
                )}

                <img src={image} alt={"demo"}/>

                <div className="tech-stack-container">
                    {techStack.map(text => (
                        <div className={`tech-stack-bubble tech-stack-${color}`}>
                            <h3>{text}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
