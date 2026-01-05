import React from 'react';
import '../App.css';
import '../TextStyles.css';
import './Project.css';


export default function Project({
    title, dates, imageCaption, description, githubUrl, publicRepo, techStack, cols, rows, colorClass
}) {
    return (
        <div
            className={`widget-container ${colorClass}`}
            style={{ gridColumn: `span ${cols}`, gridRows: `span ${rows}`}}
        >
            <div className="project-header">
                <h1>{title}</h1>
                <h2>{dates}</h2>
            </div>

            {/*<p>{description}</p>*/}
            <p>
                frfr
            </p>

            <div className="tech-stack-container">
                {techStack.map((item) => (
                    <div className="tech-stack-bubble tech-stack-bubble-text">
                        {item}
                    </div>
                ))}
            </div>

            <div className="">
                num of stars
                public or not
            </div>
        </div>
    );
};
