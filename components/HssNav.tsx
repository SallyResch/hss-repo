"use client"
import MenuIcon from '@mui/icons-material/Menu'
import { NavProps, hssNavItems } from "@/types/navigation";
import { useState } from "react";
export default function HssNav({ items = hssNavItems, title = "HSS Scouts" }: NavProps) {
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
            {/*Hamburger menu button only visible under 768px in width*/}
            <button
                onClick={toggleMenu(true)}
                className='block md:hidden p-1 text-hss-yellow rounded'
                aria-label='Öppna meny'
            >
                <MenuIcon fontSize="large" />
            </button>
        </>
    )
}