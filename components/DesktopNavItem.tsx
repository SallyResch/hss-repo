import { NavItem } from "@/types/navigation";
import Link from "next/link";
import { useState } from "react";


export default function DesktopNavItem({ item }: { item: NavItem }) {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            <Link href={item.path}>{item.label}</Link>
        </div>
    )
}