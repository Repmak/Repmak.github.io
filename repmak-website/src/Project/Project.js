import React from 'react';
import '../App.css';
import '../TextStyles.css';
import './Project.css';


export default function Project({
    title, dates, imageCaption, description, githubUrl, publicRepo, cols, rows, bgColour
}) {
    return (
        <div className="widget-container" style={{ gridColumn: `span ${cols}`, gridRow: `span ${rows}`, backgroundColor: bgColour}}>
            <h3>{title}</h3>
        </div>
    );
};
