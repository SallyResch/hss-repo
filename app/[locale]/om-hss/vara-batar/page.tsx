import type { Metadata } from "next"
import HeroSection from "@/components/HeroSection";
import heroimg from "@/public/Wireframe.png";
import { getCurrentBoats } from "@/data/boatsData";
import TextContentBlock from "@/components/TextContentBlock"
import PreviousBoatsSection from '@/components/cards/PreviousBoatsSection';
import BoatCard from "@/components/cards/BoatCard";
import BottomText from "@/components/BottomText";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "Våra båtar",
    description: "Sida för alla våra båtar"
}


export default function VaraBatarPage() {
    const t = useTranslations("varaBatarPage")
    const currentBoats = getCurrentBoats(t);
    return (
        <main className="flex flex-col items-center w-full">
            <HeroSection
                title={t("heroTitle")}
                description={t("heroText")}
                variant="subpage"
                imageUrl={heroimg}
            />
            <TextContentBlock
                title={t("mainSectionTitle")}
                isCentered={true}
            >
                <p>{t("mainSectionDesc")}</p>
            </TextContentBlock>
            {/* boat */}
            <section className="w-full max-w-5xl px-6 mt-16">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-blue-200 cursor-pointer">
                    <h2 className="text-2xl font-bold text-hss-mediumblue">
                        {t("mainSectionTitle")}
                    </h2>
                    <span className="text-sm font-semibold text-hss-mediumblue hover:underline">
                        {t("fleetLinkText")} →
                    </span>
                </div>
                <p className="mb-8 text-sm text-gray-600">
                    {t("fleetDesc")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentBoats.map((boat) => (
                        <BoatCard
                            key={boat.title}
                            {...boat}
                        />
                    ))}
                </div>
            </section>
            <PreviousBoatsSection />
            <BottomText />
        </main>
    )
}
