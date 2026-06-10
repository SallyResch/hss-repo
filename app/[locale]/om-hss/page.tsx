import HeroSection from "@/components/HeroSection";
import heroimg from "@/public/Wireframe.png";
import type { Metadata } from 'next'
import { useTranslations } from "next-intl";

type Props = {}

export const metadata: Metadata = {
  title: 'Om HSS',
  description: 'Om Hässelby Strands Sjöscoutkår',
}
export default function OmHss({ }: Props) {
  const t = useTranslations("omHSSPage")
  return (
    <main className="w-full flex flex-col bg-white text-[#0d335d]">
      <HeroSection
        title={t("heroTitle")}
        description={t("heroText")}
        imageUrl={heroimg}
        mobileImgUrl={heroimg}
        showButtons={false}
        variant="subpage"
      />

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{t("whoTitle")}</h2>
        <p className="text-lg mb-4">
          {t("whoDesc1")}
        </p>
        <p className="text-lg mb-4">
          {t("whoDesc2")}
        </p>
        <p className="text-lg">
          {t("whoDesc3")}
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-[#FDE68A] p-10 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-[#0d335d]">
            {t("uniqueTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 text-[#0d335d]">
            <div>
              <h3 className="text-xl font-bold mb-2">{t("uniqueSubTitle1")}</h3>
              <p>
                {t("uniqueDesc1")}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("uniqueSubTitle2")}</h3>
              <p>
                {t("uniqueDesc2")}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("uniqueSubTitle3")}</h3>
              <p>
                {t("uniqueDesc3")}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("uniqueSubTitle4")}</h3>
              <p>
                {t("uniqueDesc4")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#0d335d]">{t("historyTitle")}</h2>
        <p className="text-lg mb-4">
          {t("historyDesc1")}
        </p>
        <p className="text-lg mb-4">
          {t("historyDesc2")}
        </p>
        <p className="text-lg">
          {t("historyDesc3")}
        </p>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#0d335d]">
            {t("traditionTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#cceeff] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{t("traditionSubTitle1")}</h3>
              <p className="text-sm">
                {t("traditionDesc1")}
              </p>
            </div>
            <div className="bg-[#cceeff] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{t("traditionSubTitle2")}</h3>
              <p className="text-sm">
                {t("traditionDesc2")}
              </p>
            </div>
            <div className="bg-[#cceeff] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{t("traditionSubTitle3")}</h3>
              <p className="text-sm">
                {t("traditionDesc3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        <div className="bg-[#0d335d] text-white p-12 rounded-t-none rounded-b-3xl text-left">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#FDE68A]">
            {t("partnersTitle")}
          </h2>
          <p className="mb-8 text-center text-lg">
            {t("partnersSubText")}
          </p>

          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <p>
                <span className="font-bold">{t("partnerTitle1")}</span> Vi är medlemmar i
                {t("partnerDesc1")}
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <p>
                <span className="font-bold">{t("partnerTitle2")}</span>{" "}
                {t("partnerDesc2")}
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <p>
                <span className="font-bold">{t("partnerTitle3")}</span> {t("partnerDesc3")}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
