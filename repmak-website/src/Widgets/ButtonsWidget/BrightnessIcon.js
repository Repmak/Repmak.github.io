

export default function BrightnessIcon({ level, className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={className}
        >
            <circle cx="12" cy="12" r="3.5" fill="currentColor" />

            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line
                    key={angle}
                    x1="12"
                    y1={12 - (5 + level * 1)}
                    x2="12"
                    y2={12 - (5 + level * 3.5)}  // End point grows outward.
                    transform={`rotate(${angle} 12 12)`}
                    transition="all 0.1s ease-out"
                />
            ))}
        </svg>
    );
};
