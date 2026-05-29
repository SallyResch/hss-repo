import { NavItem } from "@/types/navigation";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import DropDown from "./DropDown";
import { useClickOutside } from "@/hooks/useClickOutside";
import Button from "./Button";

export default function DesktopNavItem({ item }: { item: NavItem }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    const navItemRef = useRef<HTMLDivElement>(null);

    useClickOutside(navItemRef, () => {
        setMenuOpen(false)
    })
    return (
        <div ref={navItemRef}>
            <div className="flex flex-row items-center mr-2">
                <Link href={item.path}>{item.label}</Link>
                {hasChildren && (
                    <button onClick={() => setMenuOpen(prev => !prev)} className="hover:cursor-pointer">
                        {isMenuOpen ? <ArrowDropUpIcon fontSize="large" /> : <ArrowDropDownIcon fontSize="large" />}
                    </button>
                )}
            </div>
            {hasChildren && isMenuOpen && (
                <DropDown onSelect={() => setMenuOpen(false)} items={item.children!} isOpen={isMenuOpen} className="bg-hss-yellow top-31 text-hss-mediumblue font-semibold mr-5" />
            )}
        </div>
    )
}