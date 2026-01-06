import React, { useMemo } from 'react';

const BackgroundGradient = ({ children }) => {
    const colors = [
        '#222222',  // Base color.
        'rgba(9, 63, 85, 0.75)',
        'rgba(67, 115, 135, 0.75)',
        'rgba(59, 72, 78, 0.75)',
        'rgba(121, 151, 165, 0.75)',
        // 'rgb(0,0,0)',
        // 'rgb(57,54,37)',
        // 'rgb(30,55,55)'
    ];

    const meshStyles = useMemo(() => {
        const stops = colors.map((color) => {
            const posX = Math.floor(Math.random() * 100);
            const posY = Math.floor(Math.random() * 100);
            return `radial-gradient(circle at ${posX}% ${posY}%, ${color} 0%, transparent 50%)`;
        });

        return stops.join(', ');
    }, []);

    const containerStyle = {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: colors[0],
        backgroundImage: meshStyles,
        transition: 'all 0.5s ease-in-out',
    };

    return (
        <div style={containerStyle}>
            {children}
        </div>
    );
};

export default BackgroundGradient;