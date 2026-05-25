import { NavItem } from "@/types/navigation";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import DropDown from "./DropDown";
import { useClickOutside } from '@/hooks/useClickOutside';

export default function DesktopNavItem({ item }: { item: NavItem }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    const dropdownRef = useRef<HTMLDivElement>(null);
    useClickOutside(dropdownRef, () => {
        setMenuOpen(false);
    })

    return (
        <div>
            <div ref={dropdownRef} className="flex flex-row items-center">
                <Link href={item.path}>{item.label}</Link>
                {hasChildren && (
                    <button onClick={() => setMenuOpen(prev => !prev)}>
                        {isMenuOpen ? <ArrowDropUpIcon fontSize="large" /> : <ArrowDropDownIcon fontSize="large" />}
                    </button>
                )}
            </div>
            {hasChildren && (
                <DropDown onSelect={() => setMenuOpen(false)} items={item.children!} isOpen={isMenuOpen} className="bg-hss-yellow top-32 text-hss-mediumblue mr-3" />
            )}
        </div>
    )
}