import React from 'react';
import '../App.css';
import '../TextStyles.css';
import './ScrollBar.css';
import GroupedProjects from "../GroupedProjects/GroupedProjects";


export default function ScrollBar({ values }) {
    return (
        <div>
            {values.map((value) => (
                <button>
                    {value}
                </button>
            ))}
        </div>
    );
};
