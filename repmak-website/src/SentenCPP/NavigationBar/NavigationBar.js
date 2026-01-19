import React, {useEffect, useState} from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './NavigationBar.css';


export default function NavigationBar() {

    const navLinkClass = ({ isActive }) =>
        isActive ? "navigation-bar-link navigation-bar-link-active" : "navigation-bar-link";

    return (
        <div className="docs-navigation-bar">
            <NavLink to="/sentencpp-docs/overview" className={navLinkClass}>
                Overview
            </NavLink>

            <NavLink to="/sentencpp-docs/quick-start" className={navLinkClass}>
                Quick Start
            </NavLink>

            <NavLink to="/sentencpp-docs/installation" className={navLinkClass}>
                Installation Guide
            </NavLink>

            <NavLink to="/sentencpp-docs/api-reference" className={navLinkClass}>
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
