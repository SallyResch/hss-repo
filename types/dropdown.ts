import { NavItem } from "./navigation";
export interface DropDownProps{
    items?: NavItem[];
    isOpen: boolean;
    className?: string;
    onSelect?: ()=> void;
}
