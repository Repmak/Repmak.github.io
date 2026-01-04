import '../App.css';
import './NavigationMenu.css';
import React from "react";
import { NavLink } from 'react-router-dom';

// import GithubIcon from "../assets/";
// import LinkedinIcon from "../assets/";


export default function NavigationBar() {
    return (
        <nav className="container navigation-menu">
            <div className="nav-group">
                <h1>JUSTIN KAMPER</h1>
                {/*<NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>*/}
                {/*    About Me*/}
                {/*</NavLink>*/}
                {/*<NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>*/}
                {/*    My Work*/}
                {/*</NavLink>*/}
            </div>

            <div className="nav-group">
                <a href="https://github.com/Repmak"
                   className="nav-link social"
                   target="_blank"
                   rel="noopener noreferrer">
                   GitHub
                </a>
                <a href="https://linkedin.com/in/justin-kamper"
                   className="nav-link social"
                   target="_blank"
                   rel="noopener noreferrer">
                   LinkedIn
                </a>
            </div>
        </nav>
    );
}