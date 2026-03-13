import { useEffect, useState } from 'react'
import NavButton from './NavButton';

function Nav() {
    const [activeSection, setActiveSection] = useState<string>('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = 'about';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                // If the scroll position is past the section top minus some offset
                if (window.scrollY >= sectionTop - window.innerHeight * 0.5) {
                    if (section.id) {
                        current = section.id;
                    }
                }
            });
            
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // initialize active section on mount
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
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
