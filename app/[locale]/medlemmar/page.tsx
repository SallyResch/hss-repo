import HeroSection from "@/components/HeroSection"
import heroImage from "@/public/IMG_0085.png"
import MemberCard from "@/components/QuickAccessCard"
import { getQuickAccessData, getRutinItemData } from "@/data/members"
import ArrowForwardOutlined from "@mui/icons-material/ArrowForwardOutlined"
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import Button from "@/components/Button"
import QuickAccessCard from "@/components/QuickAccessCard"
import RutinCard from "@/components/RutinCard"
import type { Metadata } from "next"
import { useTranslations } from "next-intl";
export const metadata: Metadata = {
    title: "Medlemmar",
    description: "Sida för alla våra medlemmar med nödvändig information"
}
export default function Medlemmar() {
    const t = useTranslations("membersPage")
    const quickAccessData = getQuickAccessData(t);
    const rutinItemData = getRutinItemData(t);
    const tBtn = useTranslations("homePage");
    return (
        <div>
            <HeroSection
                title={t('heroTitle')}
                description={t('heroText')}
                imageUrl={heroImage}
                mobileImgUrl={heroImage}
                showButtons={false}
                variant="subpage"
            />
            {/*Snabb åtkomst*/}
            <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-hss-mediumblue">{t("fastAccessTitle")}</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        {quickAccessData.map((card) => {
                            return <QuickAccessCard key={card.id} card={card} />
                        })}
                    </div>
                </div>
                {/*Rutins*/}
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-hss-mediumblue">{t("rutinTitle")}</h2>
                    <div className="flex flex-col gap-4 wrap-break-word">
                        {rutinItemData.map((card) => {
                            return <RutinCard key={card.id} card={card} />
                        })}
                    </div>
                </div>
                {/*Documents*/}
                <div className="flex flex-col gap-6 justify-between">
                    <div className="flex flex-row justify-between mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold text-hss-mediumblue">{t("documentTitle")}</h2>
                        <div className="flex flex-row gap-2 cursor-pointer mt-2">
                            <p className="text-hss-mediumblue">{t("documentLink")}</p>
                            <ArrowForwardOutlined />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 flex-1 rounded-2xl bg-hss-lightblue p-6 md:w-[60%] text-hss-mediumblue shadow-sm">
                        <div className="bg-hss-lightblue border-hss-mediumblue border-2 p-6 rounded-2xl">
                            <div className="flex flex-row gap-2">
                                <TextSnippetOutlinedIcon />
                                <p className="font-bold">{t("documentCardTitle1")}</p>
                            </div>
                            <p className="mt-2 mb-2">{t("documentCardDesc1")}</p>
                            <div className="flex flex-row gap-2 cursor-pointer">
                                <p>{tBtn("btnReadMore")}</p>
                                <ArrowForwardOutlined />
                            </div>
                        </div>
                        <div className="bg-hss-lightblue border-hss-mediumblue border-2 p-6 rounded-2xl">
                            <div className="flex flex-row gap-2">
                                <TextSnippetOutlinedIcon />
                                <p className="font-bold">{t("documentCardTitle2")}</p>
                            </div>
                            <p className="mt-2 mb-2">{t("documentCardDesc2")}</p>
                            <div className="flex flex-row gap-2 cursor-pointer">
                                <p>{tBtn("btnReadMore")}</p>
                                <ArrowForwardOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                {/*Questions*/}
                <div className="text-center bg-hss-mediumblue text-hss-white p-6 rounded-2xl">
                    <h2 className="text-2xl text-hss-yellow">{t("questionsTitle")}</h2>
                    <p className="p-3">{t("questionsDesc")}</p>
                    <a href="/kontakt">
                        <Button variant="yellow" className="mt-3 cursor-pointer">{t("btnContactUs")}</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}