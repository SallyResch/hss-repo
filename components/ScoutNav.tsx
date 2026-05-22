"use client"
import { NavProps, scoutNavItems } from "@/types/navigation"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useState } from "react";
import DropDown from "./DropDown";
export default function ScoutNav({ items = scoutNavItems, title = "Scouterna Official" }: NavProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }
    console.log("scout " + isOpen)
    return (
        <>
            {/* Desktop view - hidden on 768px */}
            <nav className="hidden md:flex flex-row gap-2 m-5">
                {items.map((item) => (
                    <a key={item.path} href={item.path}>{item.label}</a>
                ))}
            </nav>
            {/*Arrow only shown below 768px width */}
            <div>
                <button
                    onClick={toggleMenu}
                    className='block md:hidden p-1 text-hss-white rounded'
                    aria-label='Öppna meny'
                >
                    <ArrowDropDownIcon sx={{ fontSize: 42 }} />
                </button>
                <DropDown
                    items={items}
                    isOpen={isOpen}
                    onToggle={toggleMenu}
                    className="bg-hss-scout-darkblue text-white right-0"
                />
            </div>
        </>
    )
}