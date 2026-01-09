import React from 'react';
import '../../App.css';
import '../../Text.css';
import '../Widget.css';
import './ButtonsWidget.css';
import './BrightnessSlider.css';

import { ReactComponent as LinkedInIcon } from '../../assets/linkedin-icon.svg';
import { ReactComponent as GitHubIcon } from '../../assets/github-icon.svg';
import { ReactComponent as DarkModeIcon } from '../../assets/dark-mode-icon.svg';


export default function ButtonsWidget2({ darkMode, setDarkMode }) {


    return (
        <div className="widget-container">
            <div className="widget quadrants liquid-glass">
                <a className="quadrant-button" href="https://www.linkedin.com/in/justin-kamper/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="icon" alt="LinkedIn" />
                </a>
                <a className="quadrant-button" href="https://github.com/Repmak" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="icon" alt="GitHub" />
                </a>

                <div className="tall-quadrant-button">
                    <button className="quadrant-button" onClick={() => setDarkMode(prev => !prev)}>
                        <DarkModeIcon className="icon" alt="Dark Mode" />
                    </button>
                </div>
            </div>
        </div>
    );
}
