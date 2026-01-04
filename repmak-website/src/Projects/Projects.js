import '../App.css';
import './Projects.css';
import {projects} from "./projects-data";


export default function Projects() {
    return (
        <>
            <div className="container project">
                {projects.map((project) => (
                    <div className="project">
                        <h2>
                            <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                {project.title}
                            </a>
                        </h2>

                        <p className="project-dates">{project.dates}</p>

                        <div className="project-content">
                            <figure>
                                {/*<img src={project.image} className="project-image" alt={project.title} />*/}
                                <figcaption>{project.imageCaption}</figcaption>

                            </figure>

                            <div className="project-tagline">
                                {project.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

