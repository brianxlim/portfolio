import ExperienceProps from "../../types/ExperienceProps"
import { BoxArrowUpRight } from "react-bootstrap-icons"
import TechStack from "./TechStack"

function ExperienceCard(props: ExperienceProps) {
    return (
        <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

                {/* Frosted glass effect */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                {/* Duration */}
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    {props.startYear} — {props.endYear}
                </header>

                {/* Content */}
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                            <a
                                className="inline-flex mb-4 items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                href={props.url}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <span>{props.role} • {props.location}</span>
                                <BoxArrowUpRight className="w-4 ml-2" />
                            </a>
                        </div>
                    </h3>
                    <p className="text-sm leading-normal">{props.description}</p>
                    <TechStack
                        techStack={props.techStack}
                    />
                </div>
            </div>
        </li>
    )
}

export default ExperienceCard
