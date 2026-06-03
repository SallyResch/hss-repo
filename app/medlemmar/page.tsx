import HeroSection from "@/components/HeroSection"
import heroImage from "@/public/IMG_0085.png"

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
        </div>
    )
}