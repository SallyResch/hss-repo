import { NavItem } from "@/types/navigation";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import DropDown from "./DropDown";


export default function DesktopNavItem({ item }: { item: NavItem }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const hasChildren = item.children && item.children.length > 0;

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
    }, [])

    return (
        <div>
            <Link href={item.path}>{item.label}</Link>
            {hasChildren && (
                <button onClick={() => setMenuOpen(prev => !prev)}>
                    {isMenuOpen ? <ArrowDropUpIcon fontSize="large" /> : <ArrowDropDownIcon fontSize="large" />}
                </button>
            )}
            {hasChildren && (
                <DropDown items={item.children!} isOpen={isMenuOpen} className="bg-hss-yellow top-32 text-hss-mediumblue mr-3" />
            )}
        </div>
    )
}