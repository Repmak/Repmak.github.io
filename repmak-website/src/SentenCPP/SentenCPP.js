import React, {useEffect, useState} from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './SentenCPP.css';
import {useDocumentMetadata} from './useDocumentMetadata.js';
import NavigationBar from "./NavigationBar/NavigationBar";
import Overview from "./Overview/Overview";
import QuickStart from "./QuickStart/QuickStart";
import Installation from "./Installation/Installation";
import APIReference from "./APIReference/APIReference";
import SentenCPPLogo from './assets/sentencpp-logo.png';


export default function SentenCPP() {

    useDocumentMetadata({
        title: 'sentenCPP - Docs',
        description: 'The official documentation for sentenCPP',
        favicon: null  // todo create a square logo
    });

    return (
        <div className="docs">
            <NavigationBar />

            <div className="content">
                <Routes>
                    <Route path="overview" element={<Overview />} />
                    <Route path="quick-start" element={<QuickStart />} />
                    <Route path="installation" element={<Installation />} />
                    <Route path="api-reference" element={<APIReference />} />
                    <Route path="/" element={<Overview />} />
                </Routes>
            </div>
        </div>
    );
}
