import HeroSection from "@/components/HeroSection";
import { Card } from "@/components/Card";
import heroimg from "@/public/hero.jpg"
import heromob from "@/public/heromob.png";
import HistorySection from "@/components/HistorySection";
import SafetySection from "@/components/SafetySection";
import InstagramCarousel from "@/components/InstagramCarousel";

import kidIcon from "../assets/kid.svg";
import kiddIcon from "../assets/kidd.svg";
import teenIcon from "../assets/teen.svg";
import adultIcon from "../assets/adult.svg";
import familyIcon from "../assets/family.jpg";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("homePage")
  return (
    <div className="flex flex-col min-h-screen box-border">
      <main className="grow">
        <div>
          <HeroSection
            title={t('heroTitle')}
            description={t('heroText')}
            imageUrl={heroimg}
            mobileImgUrl={heromob}
            showButtons={true}
            variant="home"
          />
        </div>
        <div>
          <HistorySection />
        </div>
        <div className="bg-hss-yellow py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[95rem] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#0d335d] text-center">
              {t("departmentsTitle")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
              <Card
                title={t("cardFamily.title")}
                age={t("cardFamily.age")}
                imageUrl={familyIcon.src}
                description={t("cardFamily.desc")}
              />
              <Card
                title={t("cardSparare.title")}
                age={t("cardSparare.age")}
                imageUrl={kidIcon.src}
                description={t("cardSparare.desc")}
              />
              <Card
                title={t("cardUpptackare.title")}
                age={t("cardUpptackare.age")}
                imageUrl={kiddIcon.src}
                description={t("cardUpptackare.desc")}
              />
              <Card
                title={t("cardAventyrare.title")}
                age={t("cardAventyrare.age")}
                imageUrl={teenIcon.src}
                description={t("cardAventyrare.desc")}
              />
              <Card
                title={t("cardUtmanare.title")}
                age={t("cardUtmanare.age")}
                imageUrl={adultIcon.src}
                description={t("cardUtmanare.desc")}
              />
            </div>
          </div>
        </div>
        <div>
          <SafetySection />
        </div>
        <div className="flex flex-col gap-4 p-6 bg-hss-mediumblue text-hss-white">
          <h2 className="font-bold text-2xl text-center">
            {t("instagramTitle")}
          </h2>
          <InstagramCarousel />
        </div>
      </main>
    </div>
  );
}
