import React from 'react';
import './App.css';
import BackgroundGradient from "./BackgroundGradient/BackgroundGradient";
import Glow from "./Glow/Glow";
import Hero from './Hero/Hero';
import GroupedProjects from "./GroupedProjects/GroupedProjects";
import ScrollBar from "./ScrollBar/ScrollBar";
import {projects} from './projects-data';


export default function App() {

    const scrollBarValues= projects.map(item => item.year);

    return (
        <BackgroundGradient>
            <main>
                <div className="content">
                    <Hero />

                    {projects.map((group) => (
                        <GroupedProjects
                            key={group.year}
                            dividerText={group.year}
                            yearProjects={group.data}
                        />
                    ))}
                </div>

                <aside className="scrollbar-wrapper">
                    <ScrollBar values={scrollBarValues} />
                </aside>
            </main>
        </BackgroundGradient>
    );
}
