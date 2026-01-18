import React, { useMemo } from 'react';

export default function BackgroundGradient({ children }) {
    const colors = [
        '#EFEAEAFF',  // Base color.
        // 'rgba(9, 63, 85, 0.5)',
        // 'rgba(67, 115, 135, 0.5)',
        // 'rgba(59, 72, 78, 0.5)',
        // 'rgba(121, 151, 165, 0.5)',
        'rgba(9, 63, 85, 0.5)',
        'rgba(16,92,119,0.5)',
        'rgba(60,21,3,0.3)',
        'rgba(73,61,37,0.3)'
    ];

    const meshStyles = useMemo(() => {
        const padding = 20;
        const availableRange = 100 - (padding * 2);

        const stops = colors.map((color) => {
            const posX = Math.floor(Math.random() * availableRange) + padding;
            const posY = Math.floor(Math.random() * availableRange) + padding;

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
