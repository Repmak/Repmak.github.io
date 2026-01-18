import React, {useEffect, useState} from 'react';
import './Overview.css';


export default function Overview() {
    return (
        <div>
            <div className="docs-header">
                Welcome!
            </div>

            <div className="docs-paragraph indent-1">
                paragraph
            </div>

            <div className="docs-paragraph indent-2">
                paragraph2
            </div>
        </div>
    );
}
