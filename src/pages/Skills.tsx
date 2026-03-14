import { useEffect, useState } from 'react';
import Skill from '../types/Skills';
import BackButton from '../components/BackButton';

function Skills() {
    const [skillsData, setSkillsData] = useState<Skill[]>([]);

    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setSkillsData(data))
            .catch(err => console.error("Failed to load skills:", err));
    }, []);

    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24">
                <BackButton />

                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-12">
                    Tools & Technologies
                </h1>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {skillsData.map((skill, index) => (
                        <div 
                            key={`${skill.name}-${index}`}
                            className="flex flex-col items-center justify-center gap-4 rounded-xl border border-white/5 bg-white/5 p-6 transition-all hover:bg-white/10 hover:-translate-y-1"
                        >
                            <img src={skill.icon} alt={skill.name} className="h-10 w-10 object-contain" />
                            <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills