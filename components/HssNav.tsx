"use client"
import MenuIcon from '@mui/icons-material/Menu'
import { NavProps, hssNavItems } from "@/types/navigation";
import { useState } from "react";
import DropDown from './DropDown';
export default function HssNav({ items = hssNavItems, title = "HSS Scouts" }: NavProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    console.log("HSS " + isOpen)
    return (
        <>
            {/* Desktop view - hidden on 768px */}
            <nav className="hidden md:flex flex-row gap-2 m-5">
                {items.map((item) => (
                    <a key={item.path} href={item.path}>{item.label}</a>
                ))}
            </nav>
            {/*Hamburger menu button only visible under 768px in width*/}
            <div className='block md:hidden p-1 text-hss-yellow rounded z-50'>
                <button
                    onClick={toggleMenu}
                    aria-label='Öppna meny'
                >
                    <MenuIcon fontSize="large" />
                </button>
                <DropDown
                    items={items}
                    isOpen={isOpen}
                    onToggle={toggleMenu}
                    className='top-35.5 right-0 bg-hss-yellow text-black'
                />
            </div>

        </>
    )
}