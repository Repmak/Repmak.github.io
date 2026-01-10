import React from 'react';
import '../../App.css';
import '../Widget.css';
import './ButtonWidget.css';
import ExternalLinkIcon from '../../assets/ExternalLinkIcon'


export default function ButtonWidget({ icon: Icon, link }) {
    return (
        <div className="widget-container">
            <a className="widget full-button liquid-glass" href={link} target="_blank" rel="noopener noreferrer">
                <div style={{position: 'relative'}}>
                    <ExternalLinkIcon className="external-link-img" />
                </div>

                <div className="social-media-platform-img">
                    <Icon />
                </div>
            </a>
        </div>
    );
}
