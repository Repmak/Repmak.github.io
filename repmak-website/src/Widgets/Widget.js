import React from 'react';
import '../App.css';
import '../Text.css';
import './Widget.css';


export default function Widget({
    header,
    content,
    sizing="",  // 1x1 container.
    positioning="centered",  // Centered content.
    color="liquid-glass",  // Liquid glass colors.
}) {
    const classNamesOuter = `widget-container ${sizing}`;
    const classNamesInner = `widget ${positioning} ${color}`;

    return (
        <div className={classNamesOuter}>
            <div className={classNamesInner}>
                <h1>{header}</h1>
                <p>{content}</p>
            </div>
        </div>
    );
}
