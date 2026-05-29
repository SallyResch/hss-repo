import { DropDownProps } from "@/types/dropdown"
import Link from "next/link";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";
export default function DropDown({ items, isOpen, className, onSelect }: DropDownProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  if (!isOpen) return false;
  return (
    <div className={`absolute flex flex-col gap-4 p-4 rounded shadow-lg z-20 ${className}`}>
      {items?.map((item) => (
        <div>
          <Link className="hover:border-t-hss-mediumblue hover:bg-hss-mediumblue hover:text-hss-yellow p-2 hover:rounded-xl"
            key={item.path}
            href={item.path}
            onClick={onSelect}
          >
            {item.label}
          </Link>
          {item.children && (
            <button onClick={() => (setOpenItem(openItem === item.path ? null : item.path))}>
              {openItem === item.path ? <ArrowDropUpIcon fontSize="large" /> : <ArrowDropDownIcon fontSize="large" />}
            </button>
          )}
          {item.children && openItem == item.path && (
            <div className="flex flex-col gap-3">
              {item.children.map((child) => (
                <Link key={child.path} href={child.path} onClick={onSelect}>
                  {child.label}
                </Link>))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}