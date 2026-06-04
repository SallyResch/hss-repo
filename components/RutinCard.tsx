import { QuickAccessItem } from "@/types/memberTypes"
import Image from "next/image"
interface CardProps {
    card: QuickAccessItem;
}
export default function RutinCard({ card }: CardProps) {
    const { title, description, topIcon: TopIcon, bottomIcon: BottomIcon } = card
    return (
        <div className="w-full bg-hss-lightblue border border-gray-100 rounded-xl p-5 flex flex-row items-center gap-5 shadow-sm min-w-0">
            <div className="text-hss-darkblue shrink-0">
                {TopIcon?.src ? (
                    <Image className="w-10 h-10 object-contain" src={TopIcon} alt="card icon" />
                ) : (<TopIcon />)}
            </div>
            <div className="min-w-0 flex-1 break-words">
                <h2 className="text-lg font-bold text-hss-mediumblue mb-0.5">{title}</h2>
                <p className="text-gray-600 leading-normal">{description}</p>
            </div>
        </div>
    )
}