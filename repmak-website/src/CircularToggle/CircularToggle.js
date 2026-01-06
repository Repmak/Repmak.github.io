import React from 'react';
import '../App.css';
import '../TextStyles.css';
import './CircularToggle.css';


export default function CircularToggle({ alt, image, setState }) {

    return (
        <button onClick={() => setState((prevState) => !prevState)}>
            <img src={image} className="" alt={alt}/>
        </button>
    );
}
