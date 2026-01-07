import React, {useState} from "react";
import '../App.css';
import '../TextStyles.css';
import '../WidgetContainer.css';
import './Hero.css';
import CircularToggle from '../CircularToggle/CircularToggle';

import LinkedInIcon from '../assets/linkedin-icon.svg';
import GitHubIcon from '../assets/github-icon.svg';
import DarkModeIcon from '../assets/dark-mode.svg';
import DarkModeIcon2 from '../assets/dark-mode-2.svg';


export default function Hero() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="hero-content">
            <div className="widget-container widget-liquid-glass">
                <h1>Justin Kamper</h1>
            </div>

            <div className="widget-container widget-color-1 hero-buttons-container">
                <button className="hero-button">
                    <img src={LinkedInIcon} className=""/>
                </button>
                <button className="hero-button">
                    <img src={GitHubIcon} className=""/>
                </button>
                <button className="hero-button">
                    <img src={DarkModeIcon2} className=""/>
                </button>
            </div>
        </div>
    );
}
