import { DropDownProps } from "@/types/dropdown"
export default function DropDown({ items, isOpen, className }: DropDownProps) {
    if (!isOpen) return false;
    return (
        <div className={`absolute flex flex-col gap-4 p-4 rounded shadow-lg lg:hidden z-20 ${className}`}>
            {items.map((item) => (
                <a
                    key={item.path}
                    href={item.path}
                >
                    {item.label}
                </a>
            ))}</div>
    )
}