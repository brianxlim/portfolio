interface ExperienceDetail {
    label: string;
    link: string;
}

interface ExperienceProps {
    startYear: string;
    endYear: string;
    role: string;
    url: string;
    location: string;
    description: string;
    techStack: string[];
    details?: ExperienceDetail[];
}

export default ExperienceProps