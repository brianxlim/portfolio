import { Icon } from "react-bootstrap-icons";

interface SectionFooterRedirectProps {
    to: string;
    label: string;
    icon: Icon;
    external?: boolean; // default is true
}

export default SectionFooterRedirectProps;