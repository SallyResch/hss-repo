import { QuickAccessItem } from "@/types/memberTypes"
import Image from "next/image"
interface CardProps {
    card: QuickAccessItem;
}
export default function MemberCard({ card }: CardProps) {
    const { title, description, topIcon: TopIcon, bottomIcon: BottomIcon } = card
    return (
        <div>
            <div>
                {TopIcon?.src ? (
                    <Image className="max-w-[50px]" src={TopIcon} alt="card icon" />
                ) : (<TopIcon />)}

                <h2>{title}</h2>
            </div>
            <p>{description}</p>
            {BottomIcon?.src ? (
                <Image src={BottomIcon} alt="card icon" />
            ) : (<BottomIcon />)}
        </div>
    )
}