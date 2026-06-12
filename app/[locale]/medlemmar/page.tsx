import HeroSection from "@/components/HeroSection";
import heroImage from "@/public/IMG_0085.png";
import MemberCard from "@/components/QuickAccessCard";
import { getQuickAccessData, getRutinItemData } from "@/data/members";
import ArrowForwardOutlined from "@mui/icons-material/ArrowForwardOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import Button from "@/components/Button";
import QuickAccessCard from "@/components/QuickAccessCard";
import RutinCard from "@/components/RutinCard";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
export const metadata: Metadata = {
  title: "Medlemmar",
  description: "Sida för alla våra medlemmar med nödvändig information",
};
export default function Medlemmar() {
  const t = useTranslations("membersPage");
  const quickAccessData = getQuickAccessData(t);
  const rutinItemData = getRutinItemData(t);
  const tBtn = useTranslations("homePage");
  return (
    <div>
      <HeroSection
        title={t("heroTitle")}
        description={t("heroText")}
        imageUrl={heroImage}
        mobileImgUrl={heroImage}
        showButtons={false}
        variant="subpage"
      />
      {/*Snabb åtkomst*/}
      <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-hss-mediumblue">
            {t("fastAccessTitle")}
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {quickAccessData.map((card) => {
              return <QuickAccessCard key={card.id} card={card} />;
            })}
          </div>
        </div>
        {/*Rutins*/}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-hss-mediumblue">
            {t("rutinTitle")}
          </h2>
          <div className="flex flex-col gap-4 wrap-break-word">
            {rutinItemData.map((card) => {
              return <RutinCard key={card.id} card={card} />;
            })}
          </div>
        </div>
        {/*Documents*/}
        <div className="flex flex-col gap-6 justify-evenly">
          <div className="flex flex-row justify-between mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-hss-mediumblue">
              {t("documentTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="flex flex-col border-2 border-hss-mediumblue p-6 rounded-2xl bg-hss-lightblue text-hss-mediumblue">
              <div className="flex flex-row gap-2 items-center">
                <TextSnippetOutlinedIcon />
                <p className="font-bold">{t("documentCardTitle1")}</p>
              </div>
              <p className="mt-2 mb-2">{t("documentCardDesc1")}</p>
              <div className="flex flex-row gap-2 cursor-pointer">
                <a
                  href="/docs/Stadgar_HSS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-2 cursor-pointer"
                >
                  <p>{tBtn("btnReadMore")}</p>
                  <ArrowForwardOutlined />
                </a>
              </div>
            </div>

            <div className="flex flex-col border-2 border-hss-mediumblue p-6 rounded-2xl bg-hss-lightblue text-hss-mediumblue">
              <div className="flex flex-row gap-2 items-center">
                <TextSnippetOutlinedIcon />
                <p className="font-bold">{t("documentCardTitle2")}</p>
              </div>
              <p className="mt-2 mb-2">{t("documentCardDesc2")}</p>
              <div className="flex flex-row gap-2 cursor-pointer">
                <a
                  href="/docs/Verksamhetsplan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-2 cursor-pointer"
                >
                  <p>{tBtn("btnReadMore")}</p>
                  <ArrowForwardOutlined />
                </a>
              </div>
            </div>

            <div className="flex flex-col border-2 border-hss-mediumblue p-6 rounded-2xl bg-hss-lightblue text-hss-mediumblue">
              <div className="flex flex-row gap-2 items-center">
                <TextSnippetOutlinedIcon />
                <p className="font-bold">{t("documentCardTitle3")}</p>
              </div>
              <p className="mt-2 mb-2">{t("documentCardDesc3")}</p>
              <div className="flex flex-row gap-2 cursor-pointer">
                <a
                  href="/docs/Flytvästpolicy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-2 cursor-pointer"
                >
                  <p>{tBtn("btnReadMore")}</p>
                  <ArrowForwardOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Questions*/}
        <div className="text-center bg-hss-mediumblue text-hss-white p-6 rounded-2xl">
          <h2 className="text-2xl text-hss-yellow">{t("questionsTitle")}</h2>
          <p className="p-3">{t("questionsDesc")}</p>
          <a href="/kontakt">
            <Button variant="yellow" className="mt-3 cursor-pointer">
              {t("btnContactUs")}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
