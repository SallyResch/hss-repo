"use client"
import { NavProps, scoutNavItems } from "@/types/navigation"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useState } from "react";
export default function ScoutNav({ items = scoutNavItems, title = "Scouterna Official" }: NavProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (open: boolean) => () => {
        setIsOpen(open)
    }
    console.log(isOpen)
    return (
        <>
            {/* Desktop view - hidden on 768px */}
            <nav className="hidden md:flex flex-row gap-2">
                {items.map((item) => (
                    <a key={item.path} href={item.path}>{item.label}</a>
                ))}
            </nav>
            {/*Arrow only shown below 768px width */}
            <button
                onClick={toggleMenu(true)}
                className='block md:hidden p-1 text-hss-white rounded'
                aria-label='Öppna meny'
            >
                <ArrowDropDownIcon sx={{ fontSize: 42 }} />
            </button>
        </>
    )
}