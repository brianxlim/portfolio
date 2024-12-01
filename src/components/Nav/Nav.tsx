import { useEffect, useState } from 'react'
import NavButton from './NavButton';

function Nav() {
    const [activeSection, setActiveSection] = useState<string>('about');

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            threshold: 0.7, // Section must occupy 0.7 of screen before it is considered "in view"
        });

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                <NavButton
                    activeSection={activeSection}
                    requiredSection="about"
                    label="About"
                />
                <NavButton
                    activeSection={activeSection}
                    requiredSection="experience"
                    label="Experience"
                />
                <NavButton
                    activeSection={activeSection}
                    requiredSection="projects"
                    label="Projects"
                />
            </ul>
        </nav>
    )
}

export default Nav
