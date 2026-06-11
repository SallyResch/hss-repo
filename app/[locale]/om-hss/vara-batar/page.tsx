import type { Metadata } from "next"
import HeroSection from "@/components/HeroSection";
import heroimg from "@/public/Wireframe.png";
import { getCurrentBoats } from "@/data/boatsData";
import TextContentBlock from "@/components/TextContentBlock"
import PreviousBoatsSection from '@/components/cards/PreviousBoatsSection';
import BoatCard from "@/components/cards/BoatCard";
import BottomText from "@/components/BottomText";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/SectionHeader"

export const metadata: Metadata = {
    title: "Våra båtar",
    description: "Sida för alla våra båtar"
}


export default function VaraBatarPage() {
    const t = useTranslations("varaBatarPage")
    const currentBoats = getCurrentBoats(t);
    return (
        <main className="w-full">
                <HeroSection
                title={t("heroTitle")}
                description={t("heroText")}
                variant="subpage"
                imageUrl={heroimg}
                />

                <div  className="max-w-[1000px] mx-auto w-full px-6 py-12 flex flex-col gap-16">
                    <section>
                        <TextContentBlock
                        title={t("mainSectionTitle")}
                        isCentered={true}
                        >
                        <p>{t("mainSectionDesc")}</p>
                        </TextContentBlock>                       
                    {/* boat */}
                        <SectionHeader
                        title={t('heroTitle')}
                        subtitle={t('fleetDesc')}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentBoats.map((boat) => (
                        <BoatCard
                            key={boat.title}
                            {...boat}
                        />
                        ))}
                    </div>
                    </section>

                     {/* hisboat */}
                     <section>
                        <SectionHeader
                        title={t('earlierBoatsTitle')}
                        /> 
                        <PreviousBoatsSection />
                        
                    </section>
                                                     
            </div>
            <BottomText />   
        </main>
    )
}
