"use client"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavProps, hssNavItems } from "@/types/navigation";
import { useState } from "react";
import DropDown from './DropDown';
import Button from './Button';
import Link from 'next/link';
import DesktopNavItem from './DesktopNavItem';
export default function HssNav({ items = hssNavItems }: NavProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDownMenu = () => {
    setIsDropDownOpen(prev => !prev);
  }

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }


  return (
    <>
      {/* Desktop view - hidden on 768px */}
      <nav className="hidden lg:flex flex-row gap-5 m-5 items-center">
        {items.map((item) => (
          <DesktopNavItem key={item.path} item={item} />
        ))}
        <Button variant='yellow'>Bli Medlem</Button>
      </nav>
      {/*Hamburger menu button only visible under 768px in width*/}
      <div className='block lg:hidden mr-6 text-hss-yellow rounded z-20'>
        <button
          onClick={toggleDropDownMenu}
          aria-label='Öppna meny'
        >
          {isDropDownOpen ? (<CloseIcon fontSize='large' />) : (<MenuIcon fontSize="large" />)}
        </button>
        <DropDown
          items={items}
          isOpen={isDropDownOpen}
          className='top-31 right-0 bg-hss-yellow text-black lg:hidden'
        />
      </div>
    </>
  )
}