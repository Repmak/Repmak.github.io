import React from 'react';
import '../App.css';
import '../TextStyles.css';
import './Project.css';

import GitHubIcon from '../assets/github-icon.svg';
import PyPIIcon from '../assets/pypi-icon.svg';


export default function Project({
    title, dates, image, imageCaption, imageLeft, description, githubUrl, pypiUrl, publicRepo, techStack, sizeClass, colorClass
}) {
    return (
        <div
            className={`widget-container ${colorClass} ${sizeClass}`}
            // className='widget-container'
            // className={`widget-container ${sizeClass}`}
        >
            <h1>{title}</h1>
            <h2>{dates}</h2>

            <div className="project-content">
                {imageLeft && image && (
                    <figure>
                        <img src={image} className="project-image" alt="demo"/>
                    </figure>
                )}
                <p>{description}</p>
                {!imageLeft && image && (
                    <figure>
                        <img src={image} className="project-image" alt="demo"/>
                    </figure>
                )}
            </div>


            <div className="project-footer">
                <div className="tech-stack-container">
                    {techStack.map((item) => (
                        <div className="tech-stack-bubble tech-stack-bubble-text">
                            {item}
                        </div>
                    ))}
                </div>

                {/*<div className="external-links">*/}
                {/*    {publicRepo && (*/}
                {/*        <a href={pypiUrl} target="_blank" rel="noopener noreferrer" className="link-button">*/}
                {/*            <img src={GitHubIcon} alt="GitHub Icon" className="link-button-icon"/>*/}
                {/*        </a>*/}
                {/*    )}*/}
                {/*    {pypiUrl && (*/}
                {/*        <a href={pypiUrl} target="_blank" rel="noopener noreferrer" className="link-button">*/}
                {/*            <img src={PyPIIcon} alt="GitHub Icon" className="link-button-icon"/>*/}
                {/*        </a>*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
        </div>
    );
};
