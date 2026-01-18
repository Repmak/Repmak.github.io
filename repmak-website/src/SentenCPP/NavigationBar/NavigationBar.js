import React, {useEffect, useState} from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './NavigationBar.css';


export default function NavigationBar() {
    return (
        <div className="docs-navigation-bar">
            <NavLink
                to="/sentencpp-docs/overview"
                className="navigation-bar-link"
            >
                Overview
            </NavLink>

            <NavLink
                to="/sentencpp-docs/quick-start"
                className="navigation-bar-link"
            >
                Quick Start
            </NavLink>

            <NavLink
                to="/sentencpp-docs/installation"
                className="navigation-bar-link"
            >
                Installation Guide
            </NavLink>

            <NavLink
                to="/sentencpp-docs/api-reference"
                className="navigation-bar-link"
            >
                API Reference
            </NavLink>

            <a
                href="https://github.com/Repmak/sentenCPP/"
                target="_blank"
                rel="noopener noreferrer"
                className="navigation-bar-link"
            >
                GitHub
            </a>
        </div>
    );
}
