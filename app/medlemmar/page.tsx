import HeroSection from "@/components/HeroSection"
import heroImage from "@/public/IMG_0085.png"
import MemberCard from "@/components/MemberCard"
import { quickAccessData } from "@/data/members"
export default function Medlemmar() {
    return (
        <div>
            <HeroSection
                title="För Medlemmar"
                description="Här hittar du praktisk information för dig som är medlem eller vårdnadshavare. Information om Scoutnet, Discord, säkerhet, dokument och våra rutiner."
                imageUrl={heroImage}
                mobileImgUrl={heroImage}
                showButtons={false}
                variant="subpage"
            />
            <div>
                <div>
                    <h2>Snabb Åtkomst</h2>
                    <div className="flex flex-column">
                        {quickAccessData.map((card) => {
                            return <MemberCard key={card.id} card={card} />
                        })}
                    </div>
                </div>
                <div>Rutiner</div>
                <div>Dokument</div>
                <div>Frågor</div>
            </div>
        </div>
    )
}