"use client"
import MenuIcon from '@mui/icons-material/Menu'
import { NavProps, hssNavItems } from "@/types/navigation";
import { useState } from "react";
import DropDown from './DropDown';
import Button from './Button';
export default function HssNav({ items = hssNavItems, title = "HSS Scouts" }: NavProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    console.log("HSS " + isOpen)
    return (
        <>
            {/* Desktop view - hidden on 768px */}
            <nav className="hidden md:flex flex-row gap-2 m-5 items-center">
                {items.map((item) => (
                    <a key={item.path} href={item.path}>{item.label}</a>
                ))}
                <Button variant='yellow'>Bli Medlem</Button>
            </nav>
            {/*Hamburger menu button only visible under 768px in width*/}
            <div className='block md:hidden p-1 text-hss-yellow rounded z-20'>
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
                    className='top-32 right-0 bg-hss-yellow text-black'
                />
            </div>

        </>
    )
}