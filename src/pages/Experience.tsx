import { useState, useEffect } from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons"
import experiencesUrl from "/experiences.json?url"
import ExperienceProps from "../types/ExperienceProps"
import ExperienceCard from "../components/ExperienceCard/ExperienceCard"
import SectionFooterRedirect from "../components/SectionFooterRedirect";

function Experience() {
    const [experiencesData, setExperiencesData] = useState<ExperienceProps[]>([]);

    useEffect(() => {
        fetch(experiencesUrl)
            .then(res => res.json())
            .then(data => setExperiencesData(data.experiences))
            .catch(err => console.error("Failed to load experiences:", err));
    }, []);

    return (
        <div>
            <ol className="group/list">
                {experiencesData.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        startYear={experience.startYear}
                        endYear={experience.endYear}
                        role={experience.role}
                        url={experience.url}
                        location={experience.location}
                        description={experience.description}
                        techStack={experience.techStack}
                        details={experience.details}
                    />
                ))}
            </ol>
            <SectionFooterRedirect to="/resume.pdf" label="View Full Resume" icon={BoxArrowUpRight} />
        </div>
    )
}

export default Experience
