import { BoxArrowUpRight } from "react-bootstrap-icons";
import BackButton from "../components/BackButton";
import projectsUrl from "/projects/projects.json?url"
import { useEffect, useState } from "react";
import ProjectCardProps from "../types/ProjectCardProps";

function Archive() {
    const projectAssetsDir = "/projects/";
    const [projectsData, setProjectsData] = useState<ProjectCardProps[]>([]);

    useEffect(() => {
        fetch(projectsUrl)
            .then(res => res.json())
            .then(data => setProjectsData(data.projects))
            .catch(err => console.error("Failed to load projects:", err));
    }, []);

    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24">
                <BackButton />
                
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-12">
                    All Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <a 
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/5 overflow-hidden transition-all hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl hover:border-white/10"
                        >
                            <div className="h-48 overflow-hidden bg-slate-800/50">
                                <img 
                                    src={projectAssetsDir + project.image} 
                                    alt={project.imageAlt} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-100 grayscale-0 mix-blend-normal md:opacity-80 md:grayscale md:mix-blend-luminosity md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:mix-blend-normal"
                                />
                            </div>
                            <div className="flex flex-col flex-grow p-6">
                                <h3 className="inline-flex items-baseline font-bold leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 text-lg mb-2">
                                    <span>{project.title}</span>
                                    <BoxArrowUpRight className="w-4 ml-2 transition-transform duration-150 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </h3>
                                <p className="text-sm leading-normal text-slate-400 flex-grow mb-6">
                                    {project.description}
                                </p>
                                {project.techStack && project.techStack.length > 0 && (
                                    <div className="mt-auto">
                                        <ul className="flex flex-wrap gap-2 mt-2">
                                            {project.techStack.sort().map((tech, i) => (
                                                <li key={i}>
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                        {tech}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Archive;
