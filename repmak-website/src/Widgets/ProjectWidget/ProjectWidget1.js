import React, {useState} from 'react';
import '../../App.css';
import '../../Text.css';
import '../Widget.css';
import './ProjectWidget.css';

import {ReactComponent as Link} from "../../assets/external-link-icon.svg";
import {ReactComponent as Locked} from "../../assets/locked-icon.svg";


export default function ProjectWidget1({
    title,
    dates,
    description,
    techStack,
    repo,
    publicRepo,
    sizing="",
    color="",
}) {
    const classNames = `widget ${sizing} ${color} tech-stack-${color}`;

    const inner = (
        <>
            <div className="project-header">
                <h1>{title}</h1>
                {publicRepo ? (
                    <Link className="icon" />
                ) : (
                    <Locked className="icon" />
                )}
            </div>

            <h2>{dates}</h2>
            <p>{description}</p>

            <div className="tech-stack-container">
                {techStack.map(text => (
                    <div className={`tech-stack-bubble tech-stack-${color}`}>
                        <h3>{text}</h3>
                    </div>
                ))}
            </div>
        </>
    );

    return (
        publicRepo ? (
            <a className={classNames} href={repo} target="_blank" rel="noopener noreferrer">
                {inner}
            </a>
        ) : (
            <div className={classNames}>
                {inner}
            </div>
        )
    );
}
