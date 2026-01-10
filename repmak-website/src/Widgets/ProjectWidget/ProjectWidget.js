import React, {useState} from 'react';
import '../../App.css';
import '../../Text.css';
import '../Widget.css';
import './ProjectWidget.css';
import ExternalLinkIcon from "../../assets/ExternalLinkIcon";


export default function ProjectWidget({
    title, dates, description, techStack, repo, publicRepo,
    sizing="",
    color="",
}) {
    const classNamesOuter = `widget-container ${sizing}`;
    const classNamesInner = `widget ${color}`;

    return (
        <div className={classNamesOuter}>
            <div className={classNamesInner}>
                {publicRepo && (
                    <div style={{position: 'relative'}}>
                        <a href={repo} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="external-link-img" />
                        </a>
                    </div>
                )}
                <h1>{title}</h1>

                <h2>{dates}</h2>
                <p>{description}</p>

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
