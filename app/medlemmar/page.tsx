import HeroSection from "@/components/HeroSection"
import heroImage from "@/public/IMG_0085.png"
import MemberCard from "@/components/MemberCard"
import { quickAccessData, rutinItemData } from "@/data/members"
import ArrowForwardOutlined from "@mui/icons-material/ArrowForwardOutlined"
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import Button from "@/components/Button"
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
            {/*Snabb åtkomst*/}
            <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Snabb Åtkomst</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        {quickAccessData.map((card) => {
                            return <MemberCard key={card.id} card={card} />
                        })}
                    </div>
                </div>
                {/*Rutins*/}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Våra Rutiner</h2>
                    <div className="flex flex-col gap-4 wrap-break-word">
                        {rutinItemData.map((card) => {
                            return <MemberCard key={card.id} card={card} />
                        })}
                    </div>
                </div>
                {/*Documents*/}
                <div className="flex flex-col gap-6 justify-between">
                    <div className="flex flex-row justify-between mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Dokument</h2>
                        <div className="flex flex-row gap-2 cursor-pointer mt-2">
                            <p>Visa alla dokument</p>
                            <ArrowForwardOutlined />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 flex-1">
                        <div>
                            <div className="flex flex-row gap-2">
                                <TextSnippetOutlinedIcon />
                                <p>Stadgar</p>
                            </div>
                            <p>Hässelby Strands Sjöscoutkårs stadgar</p>
                            <div className="flex flex-row gap-2 cursor-pointer">
                                <p>Läs mer</p>
                                <ArrowForwardOutlined />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row gap-2">
                                <TextSnippetOutlinedIcon />
                                <p>Verksamhetsplan</p>
                            </div>
                            <p>Kårens Verksamhetsplan</p>
                            <div className="flex flex-row gap-2 cursor-pointer">
                                <p>Läs mer</p>
                                <ArrowForwardOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                {/*Questions*/}
                <div className="text-center bg-hss-mediumblue text-hss-white p-6 rounded-2xl">
                    <h2 className="text-2xl text-hss-yellow">Har du frågor?</h2>
                    <p className="p-3">Kontakta din avdelningsledare eller hör av dig till oss via kontaktsidan.</p>
                    <Button variant="yellow" className="mt-3">Kontakta oss</Button>
                </div>
            </div>
        </div>
    )
}