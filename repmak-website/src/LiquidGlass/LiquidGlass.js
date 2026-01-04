import React from 'react';
import './LiquidGlass.css';


const LiquidGlass = ({ children }) => {
    return (
        <div className="glass-container">
            {children}
        </div>
    );
};

export default LiquidGlass;
