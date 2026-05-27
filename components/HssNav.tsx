"use client"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { NavProps, hssNavItems } from "@/types/navigation";
import { useRef, useState } from "react";
import DropDown from './DropDown';
import DesktopNavItem from './DesktopNavItem';
import { useClickOutside } from '@/hooks/useClickOutside';
export default function HssNav({ items = hssNavItems }: NavProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDownMenu = () => {
    setIsDropDownOpen(prev => !prev);
  }
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => {
    setIsDropDownOpen(false);
  })
  return (
    <div ref={dropdownRef}>
      {/* Desktop view - hidden on 768px */}
      <nav className="hidden lg:flex flex-row gap-3 m-2 items-center">
        {items.map((item) => (
          <DesktopNavItem key={item.path} item={item} />
        ))}
      </nav>
      {/*Hamburger menu button visible under 1024px in width*/}
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
          className='top-29 right-5 bg-hss-yellow text-black lg:hidden'
          onSelect={() => setIsDropDownOpen(false)}
        />
      </div>
    </div>
  )
}