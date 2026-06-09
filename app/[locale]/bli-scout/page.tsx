import HeroSection from "@/components/HeroSection";
import heroimg from "@/public/Wireframe.png";
import ScoutingCards from "@/components/ScoutingCards";
import adventureImg from "@/public/adventure.png";
import comraderyImg from "@/public/comradery.png";
import developmentImg from "@/public/development.png";
import natureImg from "@/public/nature.png";
import topWave from "../../public/Wave - Blue.png";
import Image from "next/image";
import type { Metadata } from "next";
import StartSection from "./StartSection";
import TextSection from '@/components/TextSection'
import VanligaFragor from '@/app/[locale]/bli-scout/FAQSection'
import ClothingSection from '@/app/[locale]/bli-scout/ClothingSection'
import { useTranslations } from "next-intl";
export const metadata: Metadata = {
  title: "Bli Scout",
  description: "En sida för att ta reda på mer information om hur man blir scout och vad det innebär"
}

export default function BliScout({ }) {
  const t = useTranslations("bliScoutPage")
  return (
    <div>
      <HeroSection
        title={t('heroTitle')}
        description={t('heroText')}
        imageUrl={heroimg}
        mobileImgUrl={heroimg}
        showButtons={false}
        variant="subpage"
      />

      <div className="w-full  flex flex-col items-center">


        <p className="w-[276px] h-[39px] left-[582px] mt-[63px] mb-[69px] font-montserrat font-semibold text-[32px]  text-center align-middle">
          {t("scoutingTitle")}
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1200px] px-4 md:px-20 py-10 justify-items-center">
          <ScoutingCards
            imageUrl={adventureImg}
            title={t("cardTitle1")}
            description="Utforska naturen, prova nya saker och utmana dig själv tillsammans med andra."
            color="blue"
          />

          <ScoutingCards
            imageUrl={comraderyImg}
            title={t("cardTitle2")}
            description="Utforska naturen, prova nya saker och utmana dig själv tillsammans med andra"
            color="yellow"
          />

          <ScoutingCards
            imageUrl={developmentImg}
            title={t("cardTitle3")}
            description="Utforska naturen, prova nya saker och utmana dig själv tillsammans med andra"
            color="blue"
          />

          <ScoutingCards
            imageUrl={natureImg}
            title={t("cardTitle4")}
            description="Utforska naturen, prova nya saker och utmana dig själv tillsammans med andra"
            color="yellow"
          />
        </section>
      </div>
      <div>
        <StartSection />
        <TextSection
          title={t("howItWorksTitle")}
          paragraphs={[
            `${t("howItWorksDesc1")}`,
            `${t("howItWorksDesc2")}`,
            `${t("howItWorksDesc3")}`,
          ]}
        />
        <TextSection
          title={t("needToKnowTitle")}
          paragraphs={[
            `${t("needToKnowDesc1")}`,
            `${t("needToKnowDesc2")}`,
            `${t("needToKnowDesc3")}`,
          ]}
        />
        <ClothingSection />
        <VanligaFragor />
      </div>

    </div>
  );
}
