import { useState, useEffect } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import projectsUrl from "/projects/projects.json?url"
import ProjectCardProps from "../types/ProjectCardProps"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import SectionFooterRedirect from "../components/SectionFooterRedirect";

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
                {projectsData.slice(0, 3).map((project, index) => (
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
            <SectionFooterRedirect to="/archive" external={false} label="View Project Archive" icon={ArrowRight} />
        </div>
    )
}

export default Projects
