import { useState, useEffect } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import projectsUrl from "/projects/projects.json?url"
import ProjectCardProps from "../types/ProjectCardProps"
import ProjectCard from "../components/ProjectCard/ProjectCard"

function Projects() {
    const projectAssetsDir = "/projects/";
    const [projectsData, setProjectsData] = useState<ProjectCardProps[]>([]);

    useEffect(() => {
        fetch(projectsUrl)
            .then(res => res.json())
            .then(data => setProjectsData(data.projects))
            .catch(err => console.error("Failed to load projects:", err));
    }, []);

    return (
        <div>
            <ul className="group/list">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        url={project.url}
                        image={projectAssetsDir + project.image}
                        imageAlt={project.imageAlt}
                        techStack={project.techStack}
                    />
                ))}
            </ul>
            <div className="group mt-12">
                <a
                    className="inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base"
                    href="/archive"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>View Project Archive</span>
                    <ArrowRight className="w-4 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-150 ease-in-out" />
                </a>
            </div>
        </div>
    )
}

export default Projects
