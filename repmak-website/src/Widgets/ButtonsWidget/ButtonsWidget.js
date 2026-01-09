import React, {useCallback, useEffect, useRef, useState} from 'react';
import '../../App.css';
import '../../Text.css';
import '../Widget.css';
import './ButtonsWidget.css';
import './BrightnessSlider.css';

import LinkedInIcon from '../../assets/linkedin-icon.svg';
import GitHubIcon from '../../assets/github-icon.svg';
import DarkModeIcon from '../../assets/dark-mode-icon.svg';
import BrightnessIcon from "./BrightnessIcon";


export default function ButtonsWidget({ brightness, setBrightness }) {

    const sliderRef = useRef(null);
    const [level, setLevel] = useState(0.25);
    const [isDragging, setIsDragging] = useState(false);

    const updateSliderValue = useCallback((clientY) => {
        if (!sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const offsetY = rect.bottom - clientY;
        const percentage = Math.min(Math.max(offsetY / rect.height, 0), 1);

        setLevel(parseFloat(percentage.toFixed(4)));
    }, []);

    const handleStart = (e) => {
        setIsDragging(true);
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        updateSliderValue(clientY);
    };

    useEffect(() => {
        const handleMove = (e) => {
            if (!isDragging) return;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            updateSliderValue(clientY);
        };

        const handleEnd = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('touchend', handleEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging, updateSliderValue]);

    // Update the parent brightness state
    useEffect(() => {
        // if (level < 0.25) setBrightness(1);
        // else if (level < 0.50) setBrightness(2);
        // else if (level < 0.75) setBrightness(3);
        // else setBrightness(4);
        setBrightness(level);
    }, [level, setBrightness]);

    return (
        <div className="widget quadrants liquid-glass">
            <a className="quadrant-button" href="https://www.linkedin.com/in/justin-kamper/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn"/>
            </a>
            <a className="quadrant-button" href="https://github.com/Repmak" target="_blank" rel="noopener noreferrer">
                <img src={GitHubIcon} alt="GitHub"/>
            </a>

            <div
                className={`slider-container ${isDragging ? 'dragging' : ''}`}
                ref={sliderRef}
                onMouseDown={handleStart}
                onTouchStart={handleStart}
                style={{ cursor: 'pointer', userSelect: 'none' }}
            >
                <div
                    className="slider-filler"
                    style={{
                        height: `${level * 100}%`,
                        transition: isDragging ? 'none' : 'height 0.1s ease-out'
                    }}
                >
                    {/*<img src={DarkModeIcon} className="slider-icon" alt="Brightness" />*/}
                    <BrightnessIcon
                        level={level*100}
                        className="slider-icon brightness-svg"
                    />
                </div>
            </div>
        </div>
    );
}
