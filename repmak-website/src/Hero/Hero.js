import React, {useState} from "react";
import '../App.css';
import '../TextStyles.css';
import '../WidgetContainer.css';
import './Hero.css';
import CircularToggle from '../CircularToggle/CircularToggle';

import LinkedInIcon from '../assets/linkedin-icon.svg';
import GitHubIcon from '../assets/github-icon.svg';
import DarkModeIcon1 from '../assets/dark-mode-1.svg';
import DarkModeIcon2 from '../assets/dark-mode-2.svg';


export default function Hero({ darkMode, setDarkMode }) {

    return (
        <div className="hero-content">
            <div className="widget-container widget-liquid-glass">
                <h1>Justin Kamper</h1>
            </div>

            <div className="widget-container widget-color-1 hero-buttons-container">
                <button className="hero-button">
                    <img src={LinkedInIcon}/>
                </button>
                <button className="hero-button">
                    <img src={GitHubIcon}/>
                </button>
                <button className="hero-button" onClick={() => setDarkMode(prev => !prev)}>
                    {/*<img src={darkMode ? DarkModeIcon1 : DarkModeIcon2} alt="Toggle Dark Mode"/>*/}
                    <img src={DarkModeIcon1} alt="Toggle Dark Mode"/>
                </button>
            </div>
        </div>
    );
}
