import { useEffect, useState } from 'react';
import Skill from '../types/Skills';
import SectionFooterRedirect from './SectionFooterRedirect';
import { ArrowRight } from 'react-bootstrap-icons';

const SkillsShowcase = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    fetch('/skills.json')
        .then(res => res.json())
        .then(data => setSkillsData(data))
        .catch(err => console.error("Failed to load skills:", err));
  }, []);

  const SkillPill = ({ skill }: { skill: Skill }) => (
    <div className="flex items-center gap-3 px-6 py-4 bg-white/5 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 dark:border-slate-700/50 shadow-sm transition-colors hover:bg-white/10 dark:hover:bg-slate-800/80">
      <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
      <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
    </div>
  );

  // We duplicate the row so it can scroll infinitely
  const Row = () => (
    <div className="flex shrink-0 animate-scroll gap-6 hover:[animation-play-state:paused]">
      {skillsData.map((skill, index) => (
        <SkillPill key={`${skill.name}-${index}`} skill={skill} />
      ))}
    </div>
  );

  if (skillsData.length === 0) return null;

  return (
    <div>
      <div className="pt-12 relative overflow-hidden group">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-6 overflow-hidden w-full relative">
          <Row />
          <Row />
        </div>
      </div>
      <SectionFooterRedirect to="/skills" external={false} label="View All Skills" icon={ArrowRight} />
    </div>
  );
};

export default SkillsShowcase;