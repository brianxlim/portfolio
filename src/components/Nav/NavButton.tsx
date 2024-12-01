import NavButtonProps from "../../types/NavButtonProps";

function NavButton(props: NavButtonProps) {
    return (
        <li>
            <a
                className={`group flex items-center py-3 nav-link ${props.activeSection === props.requiredSection ? "text-slate-200" : ""}`}
                href={`#${props.requiredSection}`}
            >
                <span
                    className={`nav-indicator mr-4 h-px bg-slate-600 transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${props.activeSection === props.requiredSection
                        ? "w-16 bg-slate-50"
                        : "w-8"
                        }`}
                ></span>
                <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${props.activeSection === props.requiredSection
                        ? "text-white"
                        : ""
                        }`}
                >
                    {props.label}
                </span>
            </a>
        </li>
    );
}

export default NavButton;
