import { DropDownProps } from "@/types/dropdown"
import Link from "next/link";
export default function DropDown({ items, isOpen, className, onSelect }: DropDownProps) {
  if (!isOpen) return false;
  return (
    <div className={`absolute flex flex-col gap-4 p-4 rounded shadow-lg z-20 ${className}`}>
      {items?.map((item) => (
        <Link className="hover:border-t-hss-mediumblue hover:text-hss-yellow "
          key={item.path}
          href={item.path}
          onClick={onSelect}
        >
          {item.label}
        </Link>
      ))}</div>
  )
}