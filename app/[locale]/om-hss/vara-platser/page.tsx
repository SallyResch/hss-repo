import HeroSection from "@/components/HeroSection";
import ScoutPlatserCard from "@/components/ScoutPlatserCard";
import varaplasterhero from "@/public/varaplasterhero.png";
import ruffenImage from "@/public/ruffen.png";
import mysetImage from "@/public/myset.jpg";
import type { Metadata } from "next";
import HittaCards from "@/components/HittaCards";
import GallerySection from "@/app/[locale]/om-hss/vara-platser/gallery";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Våra platser",
  description: "Sida för alla våra lokaler",
};

export default function VaraPlatser() {
  const t = useTranslations("varaPlatserPage")
  return (
    <>
      <div>
        <HeroSection
          title={t("heroTitle")}
          description={t("heroText")}
          imageUrl={varaplasterhero}
          mobileImgUrl={varaplasterhero}
          showButtons={false}
          variant="subpage"
        />
      </div>
      <section className="flex flex-col mt-[64px] px-6 md:px-full m-auto gap-[64px]  ">
        <div className="flex flex-col gap-[24px] text-center item-center">
          <p className="h-[39px] font-semibold text-hss-mediumblue text-[32px]">
            {t("mainSectionTitle")}
          </p>
          <p className="font-normal text-hss-mediumblue text-[16px] ">
            {t("mainSectionDesc")}
          </p>
        </div>
        <div>
          <ScoutPlatserCard
            imageUrl={ruffenImage}
            title={t("locationTitle1")}
            description={t("locationDesc1")}
            isReverse={false}
          />
          <ScoutPlatserCard
            imageUrl={mysetImage}
            title={t("locationTitle2")}
            description={t("locationDesc2")}
            isReverse={true}
          />
        </div>
        <div className="flex flex-col gap-[40px] lg:w-[1000px] p-2.5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 ">
            <p className="font-semibold text-hss-mediumblue text-[32px] leading-tight">
              {t("findUsTitle")}
            </p>
            <p className="font-normal text-hss-mediumblue text-[16px] lg:text-right">
              {t("findUsDesc")}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row  gap-[40px] mb-[10px] w-full">
            <div className="lg:flex-1">
              <HittaCards
                cardTitle={`📍 ${t("locationTitle1")}`}
                address={t("addressTitle")}
                addressDeatils="Ruffenvägen 1, 165 55 Hässelby"
                coordinater={t("coordinatesTitle")}
                coordinaterDetails={`N 59°22'10", E 17°48'20"`}
                parkering={t("parkingTitle")}
                parkeringDetails={t("parkingDesc1")}
              />
            </div>

            <div className="lg:flex-1">
              <HittaCards
                cardTitle={`📍 ${t("locationTitle2")}`}
                address={t("addressTitle")}
                addressDeatils="Mysetvägen 2, 165 55 Hässelby"
                coordinater={t("coordinatesTitle")}
                coordinaterDetails={`N 59°22'10", E 17°48'20"`}
                parkering={t("parkingTitle")}
                parkeringDetails={t("parkingDesc2")}
              />
            </div>
          </div>
        </div>
      </section>
      <div>
        <GallerySection />
      </div>
    </>
  );
}
