import React, {useState} from 'react';
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
    const classNames = `widget ${sizing} ${positioning} ${color}`;

    return (
        <div className={classNames}>
            <h1>{header}</h1>
            <p>{content}</p>
        </div>
    );
}
