import SocialIconProps from '../../types/SocialIconProps';

const SocialIcon = (props: SocialIconProps) => {
    return (
        <li className="mr-5 shrink-0 text-xs">
            <a
                className="block hover:text-slate-200"
                href={props.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${props.label} (opens in a new tab)`}
                title={props.title}
            >
                <span className="sr-only">{props.label}</span>
                <props.icon className="h-6 w-6" />
            </a>
        </li>
    );
};

export default SocialIcon;
