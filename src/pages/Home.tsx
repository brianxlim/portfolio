import Nav from "../components/Nav/Nav"
import HeaderText from "../components/HeaderText"
import Section from "../components/Section"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import SocialBar from "../components/SocialBar/SocialBar"

function Home() {
    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                        <div>
                            <HeaderText />
                            <Nav />
                        </div>
                        <SocialBar />
                    </header>

                    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                        <Section
                            id="about"
                            header="About"
                            content={<About />}
                        />
                        <Section
                            id="experience"
                            header="Experience"
                            content={<Experience />}
                        />
                        <Section
                            id="projects"
                            header="Projects"
                            content={<Projects />}
                        />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Home
