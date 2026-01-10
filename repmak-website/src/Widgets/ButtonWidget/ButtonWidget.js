import React from 'react';
import '../../App.css';
import '../Widget.css';
import './ButtonWidget.css';
import ExternalLinkIcon from '../../assets/ExternalLinkIcon'


export default function ButtonWidget({ icon, link, alt }) {
    return (
        <div className="widget-container">
            <a className="widget liquid-glass external-link" href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="top-right-external-link-img" />
                <img src={icon} alt={alt} className="external-link-img" />
            </a>
        </div>
    );
}
