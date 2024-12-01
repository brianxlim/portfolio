import { BoxArrowUpRight } from "react-bootstrap-icons"
import experiences from "../assets/experiences.json"
import ExperienceCard from "../components/ExperienceCard/ExperienceCard"

function Experience() {
    return (
        <div>
            <ol className="group/list">
                {experiences.experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        startYear={experience.startYear}
                        endYear={experience.endYear}
                        role={experience.role}
                        url={experience.url}
                        location={experience.location}
                        description={experience.description}
                        techStack={experience.techStack}
                    />
                ))}
            </ol>
            <div className="mt-12">
                <a
                    className="inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base"
                    href="/src/assets/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>View Full Resume</span>
                    <BoxArrowUpRight className="w-4 ml-2" />
                </a>
            </div>
        </div>
    )
}

export default Experience
