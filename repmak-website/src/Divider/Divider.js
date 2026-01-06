import React from 'react';
import '../App.css';
import '../TextStyles.css';
import './Divider.css';


export default function Divider({ text }) {
    return (
        <div className="hr-divider">
            <span className="hr-text">{text}</span>
        </div>
    );
};
