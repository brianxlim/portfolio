import { BoxArrowUpRight } from "react-bootstrap-icons";
import ProjectCardProps from "../../types/ProjectCardProps";
import TechStack from "../ExperienceCard/TechStack";

function ProjectCard(props: ProjectCardProps) {
    return (
        <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                {/* Content */}
                <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                        <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href={props.url}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>{props.title}</span>
                            <BoxArrowUpRight
                                className="w-4 ml-2 transition-transform duration-150 ease-in-out group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                            />
                        </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{props.description}</p>
                    {props.techStack && props.techStack.length > 0 && (
                        <TechStack techStack={props.techStack} />
                    )}
                </div>

                {/* Image */}
                <img
                    className="w-full rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    src={props.image}
                    alt={props.imageAlt}
                />
            </div>
        </li>
    );
}

export default ProjectCard;
