import { Github, Linkedin, Instagram, Envelope } from 'react-bootstrap-icons'
import SocialIcon from './SocialIcon'

function SocialBar() {
    return (
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <SocialIcon
                href="https://github.com/brianxlim"
                label="Github"
                title="Github"
                icon={Github}
            />
            <SocialIcon
                href="https://linkedin.com/in/brianxlim"
                label="LinkedIn"
                title="LinkedIn"
                icon={Linkedin}
            />
            <SocialIcon
                href="https://instagram.com/brianxlim"
                label="Instagram"
                title="Instagram"
                icon={Instagram}
            />
            <SocialIcon
                href="mailto:brixnvx@gmail.com?subject=Hello%20Brian&body=I%20would%20like%20to%20get%20in%20touch%20with%20you."
                label="Email"
                title="Email"
                icon={Envelope}
            />
        </ul>
    )
}

export default SocialBar
