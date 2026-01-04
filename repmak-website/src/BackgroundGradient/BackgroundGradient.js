import React, { useMemo } from 'react';


const BackgroundGradient = ({ TLrad='15px', TRrad='15px', BLrad='15px', BRrad='15px', children }) => {
    const rgb1='#22262b';
    const rgb2='#343a40';
    const rgb3='#3d4349';
    const randomAngle = useMemo(() => Math.floor(Math.random() * 360), []);

    const containerStyle = {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: TLrad,
        borderTopRightRadius: TRrad,
        borderBottomLeftRadius: BLrad,
        borderBottomRightRadius: BRrad,
        background: `linear-gradient(${randomAngle}deg, ${rgb1}, ${rgb2}, ${rgb3})`,
        transition: 'background 0.5s ease-in-out',
    };

    return (
        <div style={containerStyle}>
            {children}
        </div>
    );
};

export default BackgroundGradient;
