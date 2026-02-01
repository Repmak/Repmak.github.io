import React, {useEffect, useState} from 'react';
import {Routes, Route, NavLink, Navigate, useLocation} from 'react-router-dom';
import './SentenCPP.css';
import {useDocumentMetadata} from './useDocumentMetadata.js';
import NavigationBar from "./NavigationBar/NavigationBar";
import Overview from "./Overview/Overview";
import GetStarted from "./GetStarted/GetStarted";
import APIReference from "./APIReference/APIReference";
import Icon from './assets/logo.png';


export default function SentenCPP() {

    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    useDocumentMetadata({
        title: 'sentenCPP - Docs',
        description: 'The official documentation for sentenCPP',
        favicon: Icon
    });

    return (
        <div className="docs">
            <NavigationBar />

            <div className="content">
                <Routes>
                    <Route path="/" element={<Navigate to="/sentencpp-docs/overview" replace />} />
                    <Route path="overview" element={<Overview />} />
                    <Route path="get-started" element={<GetStarted />} />
                    <Route path="api-reference" element={<APIReference />} />
                </Routes>
            </div>
        </div>
    );
}
