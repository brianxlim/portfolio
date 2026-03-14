import SectionFooterRedirectProps from '../types/SectionFooterRedirect';

function SectionFooterRedirect(props: SectionFooterRedirectProps) {
  return (
    <div className="group mt-12">
        <a
            className="inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base"
            href={props.to}
            target={props.external ? "_blank" : undefined}
            rel={props.external ? "noopener noreferrer" : undefined}
        >
            <span>{props.label}</span>
            <props.icon className="w-4 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-150 ease-in-out" />
        </a>
    </div>
  )
}

export default SectionFooterRedirect