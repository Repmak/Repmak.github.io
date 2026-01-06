import React, {useState} from "react";
import '../App.css';
import '../TextStyles.css';
import './Hero.css';
import CircularToggle from '../CircularToggle/CircularToggle';
import DarkModeIcon from '../assets/dark-mode.svg'


export default function Hero() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div
            className="widget-container widget-extra-wide"
        >
            <div className="hero-content">
                <h1>Justin Kamper</h1>
                <div>
                    <CircularToggle
                        alt={"Dark mode"}
                        image={DarkModeIcon}
                        setState={setDarkMode}
                    />
                    <CircularToggle
                        alt={"Dark mode"}
                        image={DarkModeIcon}
                        setState={setDarkMode}
                    />
                    <CircularToggle
                        alt={"Dark mode"}
                        image={DarkModeIcon}
                        setState={setDarkMode}
                    />
                </div>
            </div>
        </div>
    );
}
