import { NavProps, scoutNavItems } from "@/types/navigation"

export default function ScoutNav({ items = scoutNavItems, title = "Scouterna Official" }: NavProps) {
    return (
        <nav className="flex flex-row gap-2">
            {items.map((item) => (
                <a key={item.path} href={item.path}>{item.label}</a>
            ))}
        </nav>
    )
}