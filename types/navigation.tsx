import { ReactNode } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
export interface NavItem {
    label: string;
    path: string;
    openIcon?: ReactNode;
    closeIcon?: ReactNode;
}

export interface NavProps {
    items?: NavItem[];
    title?: string;
}

export const hssNavItems: NavItem[] = [
    { label: "Bli Scout", path: "/bli-scout" },
    { label: "Avdelningar", path: "/avdelningar" },
    { label: "Om HSS", path: "/om-hss", openIcon: <ArrowDropDownIcon /> },
    { label: "För medlemmar/ Praktisk info", path: "/medlemmar", openIcon: <ArrowDropDownIcon /> },
    { label: "Kontakt", path: "/kontakt" },
]

export const scoutNavItems: NavItem[] = [
    { label: "Scouterna", path: "https://www.scouterna.se/" },
    { label: "Scouterna Folkhögskola", path: "https://www.scouternasfolkhogskola.se/" },
    { label: "Scoutnet", path: "https://www.scoutnet.se/" },
    { label: "Scoutshop", path: "http://scoutshop.se/" },
]

export const omHss: NavItem[] = [
    { label: "Våra båtar", path: "/om-hss/vara-batar" },
    { label: "Våra platser", path: "/om-hss/vara-platser" },
]
