import { QuickAccessItem } from "@/types/memberTypes"
import Image from "next/image"
interface CardProps {
    card: QuickAccessItem;
}
export default function RutinCard({ card }: CardProps) {
    const { title, description, topIcon: TopIcon, bottomIcon: BottomIcon } = card
    return (
        <div className="flex-1 bg-hss-white border border-gray-100">
            <div>
                <div>
                    {TopIcon?.src ? (
                        <Image className="max-w-[50px]" src={TopIcon} alt="card icon" />
                    ) : (<TopIcon />)}
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
            {BottomIcon && (BottomIcon.src ? (
                <Image src={BottomIcon} alt="card icon" />
            ) : (<BottomIcon />))}
        </div>
    )
}