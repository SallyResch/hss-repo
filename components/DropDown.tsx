import { DropDownProps } from "@/types/dropdown"
export default function DropDown({ items, isOpen, onToggle }: DropDownProps) {
    if (!isOpen) return false;
    return (
        <div className='absolute top-23 right-0 flex flex-col gap-4 bg-hss-yellow p-4 rounded shadow-lg md:hidden'>
            {items.map((item) => (
                <a
                    key={item.path}
                    href={item.path}
                    className="text-black"
                >
                    {item.label}
                </a>
            ))}</div>
    )
}