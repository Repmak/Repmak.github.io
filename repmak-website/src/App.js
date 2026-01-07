import React, {useState} from 'react';
import './App.css';
import BackgroundGradient from "./BackgroundGradient/BackgroundGradient";
import Glow from "./Glow/Glow";
import Hero from './Hero/Hero';
import GroupedProjects from "./GroupedProjects/GroupedProjects";
import ScrollBar from "./ScrollBar/ScrollBar";
import {projects} from './projects-data';


export default function App() {

    const [darkMode, setDarkMode] = useState(false);
    const scrollBarValues= projects.map(item => item.year);

    return (
        <BackgroundGradient>
            <main>
                {/*<div className="content">*/}

                <Hero
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                {projects.map((group) => (
                    <GroupedProjects
                        key={group.year}
                        dividerText={group.year}
                        yearProjects={group.data}
                    />
                ))}

                {/*</div>*/}

                {/*<aside className="scrollbar-wrapper">*/}
                {/*    <ScrollBarBar values={scrollBarValues} />*/}
                {/*</aside>*/}
            </main>
        </BackgroundGradient>
    );
}
