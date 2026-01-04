import '../App.css';
import '../LiquidGlass/LiquidGlass.css';
import './NavigationMenu.css';
import React from "react";

// import GithubIcon from "../assets/";
// import LinkedinIcon from "../assets/";


export default function NavigationBar() {
    return (
        <nav className="navigation-menu">
            <div className="nav-group">
                <h1>JUSTIN KAMPER</h1>
            </div>

            <div className="nav-group">
                <a href="https://github.com/Repmak"
                   className="social-link"
                   target="_blank"
                   rel="noopener noreferrer">
                   GitHub
                </a>
                <a href="https://linkedin.com/in/justin-kamper"
                   className="social-link"
                   target="_blank"
                   rel="noopener noreferrer">
                   LinkedIn
                </a>
            </div>
        </nav>
    );
}