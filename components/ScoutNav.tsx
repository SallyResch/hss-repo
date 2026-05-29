"use client"
import { NavProps, scoutNavItems } from "@/types/navigation"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useState, useRef } from "react";
import DropDown from "./DropDown";
import { useClickOutside } from '@/hooks/useClickOutside';
export default function ScoutNav({ items = scoutNavItems }: NavProps) {
    const [isOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }
    const dropdownRef = useRef<HTMLDivElement>(null);
    useClickOutside(dropdownRef, () => {
        setIsMenuOpen(false);
    })

    return (
        <>
            {/* Desktop view - hidden on 768px */}
            <nav className="hidden md:flex flex-row gap-5 items-center">
                {items.map((item) => (
                    <a key={item.path} href={item.path} className="font-bold text-hss-lightblue hover:border-b-2 border-hss-lightblue">{item.label}</a>
                ))}
            </nav>
            {/*Arrow only shown below 768px width */}
            <div ref={dropdownRef} className="hidden">
                <button
                    onClick={toggleMenu}
                    className='block p-1 text-hss-white rounded'
                    aria-label='Öppna meny'
                >
                    <ArrowDropDownIcon sx={{ fontSize: 42 }} />
                </button>
                <DropDown
                    items={items}
                    isOpen={isOpen}
                    className="bg-hss-scout-darkblue text-hss-lightblue font-bold right-0"
                    onSelect={() => setIsMenuOpen(false)}
                />
            </div>
        </>
    )
}