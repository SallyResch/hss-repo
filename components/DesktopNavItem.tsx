import { NavItem } from "@/types/navigation";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Link from "next/link";
import { useState, useRef } from "react";


export default function DesktopNavItem({ item }: { item: NavItem }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const hasChildren = item.children && item.children.length > 0;
    return (
        <div>
            <Link href={item.path}>{item.label}</Link>
            {hasChildren && (
                <button onClick={() => setMenuOpen(prev => !prev)}>
                    {isMenuOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </button>
            )}
        </div>
    )
}