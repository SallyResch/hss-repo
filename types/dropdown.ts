import { NavItem } from "./navigation";


export interface DropDownProps{
    items: NavItem[];
    isOpen: boolean;
    onToggle: ()=> void;
}
