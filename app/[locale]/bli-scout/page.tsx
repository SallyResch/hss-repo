import HeroSection from "@/components/HeroSection";
import heroimg from "@/public/Wireframe.png";
import ScoutingCards from "@/components/ScoutingCards";
import adventureImg from "@/public/myset.jpg";
import comraderyImg from "@/public/HSS-myset.jpeg";
import developmentImg from "@/public/gallery2.jpg";
import natureImg from "@/public/04.png";
import type { Metadata } from "next";
import StartSection from "./StartSection";
import TextSection from "@/components/TextSection";
import VanligaFragor from "@/app/[locale]/bli-scout/FAQSection";
import ClothingSection from "@/app/[locale]/bli-scout/ClothingSection";
import { useTranslations } from "next-intl";
export const metadata: Metadata = {
  title: "Bli Scout",
  description:
    "En sida för att ta reda på mer information om hur man blir scout och vad det innebär",
};

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

      <div className="w-full  flex flex-col items-center ">
        <p className="mb-14 mt-14 text-center text-3xl font-semibold text-hss-mediumblue md:text-5xl">
          {t("scoutingTitle")}
        </p>
        <section className="w-full px-6 md:px-20">
          <div className="mx-auto max-w-5xl w-full">
            <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:justify-between w-full">
              <div className="flex flex-col gap-6 flex-1 w-full lg:max-w-[48%] items-stretch">
                <ScoutingCards
                  imageUrl={adventureImg}
                  title={t("cardTitle1")}
                  description={t("cardDesc1")}
                  color="blue"
                />
                <ScoutingCards
                  imageUrl={developmentImg}
                  title={t("cardTitle3")}
                  description={t("cardDesc3")}
                  color="yellow"
                />
              </div>
              <div className="flex flex-col gap-6 flex-1 w-full lg:max-w-[48%] items-stretch">
                <ScoutingCards
                  imageUrl={comraderyImg}
                  title={t("cardTitle2")}
                  description={t("cardDesc2")}
                  color="yellow"
                />
                <ScoutingCards
                  imageUrl={natureImg}
                  title={t("cardTitle4")}
                  description={t("cardDesc4")}
                  color="blue"
                />
              </div>
            </div>
          </div>
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
    </div >
  );
}
