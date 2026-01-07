import React from 'react';
import '../App.css';
import '../TextStyles.css';
import './Divider.css';


export default function Divider({ text }) {
    return (
        <div className="hr-divider">
            <h2 className="hr-text">{text}</h2>
        </div>
    );
};
