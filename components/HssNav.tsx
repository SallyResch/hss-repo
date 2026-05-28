"use client"
import{ useTranslations } from 'next-intl';
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { NavProps, hssNavItems } from "@/types/navigation";
import { useRef, useState } from "react";
import DropDown from './DropDown';
import DesktopNavItem from './DesktopNavItem';
import { useClickOutside } from '@/hooks/useClickOutside';
export default function HssNav({ items = hssNavItems }: NavProps) {
  const t = useTranslations('nav')
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDownMenu = () => {
    setIsDropDownOpen(prev => !prev);
  }
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => {
    setIsDropDownOpen(false);
  })
  const translatedItems = items.map(item => {
    let translatedLabel = item.label;

    if(item.path =='/bli-scout')translatedLabel = t('becomeScout')
      if(item.path === '/avdelningar') translatedLabel = t('departments')
        if(item.path === '/om-hss') translatedLabel = t('aboutHss')
          if(item.path === '/medlemmar') translatedLabel = t('membersInfo')
            if(item.path === '/kontakt') translatedLabel = t('contact')

            let translatedChildren = item.children;
            if(item.children){
              translatedChildren = item.children.map(child => {
                let childLabel = child.label;
                if(child.path === '/om-hss/vara-batar') childLabel = t('ourBoats')
                  if(child.path === '/om-hss/vara-platser') childLabel = t('ourLocations')
                    if(child.path === '/medlemmar/dokument') childLabel = t('documents')

                      return { ...child, label: childLabel }          
              })
            }                             
          return { ...item,label: translatedLabel, children: translatedChildren}
  })

  return (
    <div ref={dropdownRef}>
      {/* Desktop view - hidden on 768px */}
      <nav className="hidden lg:flex flex-row gap-3 m-2 items-center">
        {translatedItems.map((item) =>(
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
          items={translatedItems}
          isOpen={isDropDownOpen}
          className='top-29 right-5 bg-hss-yellow text-black lg:hidden'
          onSelect={() => setIsDropDownOpen(false)}
        />
      </div>
    </div>
  )
}