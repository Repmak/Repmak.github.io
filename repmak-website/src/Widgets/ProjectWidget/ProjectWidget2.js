import React, {useState} from 'react';
import '../../App.css';
import '../../Text.css';
import '../Widget.css';
import './ProjectWidget.css';


export default function ProjectWidget2({
    title,
    dates,
    description,
    sizing="",
    positioning="",
    color="liquid-glass",
}) {
    const classNames = `widget ${sizing} ${positioning} ${color}`;

    return (
        <div className={classNames}>
            <div className="">
                <h1>{title}</h1>
                <h2>{dates}</h2>
            </div>

            <p>{description}</p>

            <div className="">

            </div>
        </div>
    );
}
