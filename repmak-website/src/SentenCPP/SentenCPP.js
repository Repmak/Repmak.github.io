import React, {useEffect, useState} from 'react';
import './SentenCPP.css';
import {useDocumentMetadata} from './useDocumentMetadata.js';
import SentenCPPLogo from './assets/sentencpp-logo.png';


export default function SentenCPP() {

    useDocumentMetadata({
        title: 'sentenCPP - Documentation',
        description: 'The official documentation for sentenCPP',
        favicon: null  // todo create a square logo
    });

    return (
        <div className="docs-content">

            frfr
        </div>
    );
}
