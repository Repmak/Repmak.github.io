import React, { useEffect, useRef } from 'react';
import './Glow.css';


const Glow = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (glowRef.current) {
                glowRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
                glowRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return <div className="global-glow-overlay" ref={glowRef} />;
};

export default Glow;
