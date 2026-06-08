import { QuickAccessItem } from "@/types/memberTypes"
import Image from "next/image"
interface CardProps {
    card: QuickAccessItem;
}
export default function QuickAccessCard({ card }: CardProps) {
    const { title, description, topIcon: TopIcon, bottomIcon: BottomIcon } = card
    return (
        <div className="flex-1 bg-hss-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow cursor-pointer min-h-[208px]">
            <div className="flex items-start gap-4">
                <div className="text-hss-lightblue shrink-0">
                    {TopIcon?.src ? (
                        <Image className="w-12 h-12 object-contain" src={TopIcon} alt="card icon" />
                    ) : (<TopIcon />)}
                </div>
                <div>
                    <h2 className="text-xl font-bold text-hss-darkblue mb-1">{title}</h2>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
            </div>
            <div className="mt-6 text-hss-mediumblue">
                {BottomIcon && (BottomIcon.src ? (
                    <Image className="w-5 h-5 object-contain" src={BottomIcon} alt="card icon" />
                ) : (<BottomIcon />))}
            </div>
        </div>
    )
}