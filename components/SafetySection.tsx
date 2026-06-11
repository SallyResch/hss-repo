import trygghetImg from "../public/safety.png";
import Yellowwave from "../components/YellowWaveLine";
import { useTranslations } from "next-intl";

export default function SafetySection() {
  const t = useTranslations("homePage")
  return (
    <section className="w-full bg-white flex flex-col relative">
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none transform -translate-y-1/2">
        <Yellowwave />
      </div>

      <div className="relative w-full min-h-[450px] md:h-[530px] flex flex-col md:block overflow-hidden">
        <div className="w-full h-[250px] md:h-full relative md:absolute inset-0">
          <img
            src={trygghetImg.src}
            alt="Äventyra i en trygg miljö"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        <div className="relative md:absolute md:top-12 left-0 md:left-20 mx-4 my-6 md:mx-0 md:my-0 max-w-full md:max-w-[420px] bg-white p-6 sm:p-10 rounded-[24px] md:rounded-[32px] shadow-xl shadow-black/5 md:shadow-black/10 z-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0d335d] mb-4 sm:mb-5 leading-tight tracking-tight">
            {t("safetyCardTitle")}
          </h3>
          <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed font-normal">
            {t("safetyCardText1")}{" "}
            <span className="font-bold text-[#0d335d]">{t("safetyCardText2")}</span>.
            {t("safetyCardText3")}
          </p>
        </div>
      </div>

      <div className="w-full z-20 pointer-events-none mt-[-20px] md:mt-[-32px]">
        <img src="/blue.png" alt="" className="w-full object-contain block" />
      </div>

      <div className="relative bg-[#0d335d] text-white pt-4 pb-8 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 tracking-wide text-center">
          {t("safetyTitle")}
        </h2>
        <div className="font-bold flex flex-col gap-6 md:flex-row md:justify-evenly md:gap-3">
          <a
            href="https://www.scouterna.se/trygga-moten/utbildning/"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-snug block hover:underline"
          >
            {t("safetyEducation")}
          </a>
          <a
            href="https://www.scouterna.se/trygga-moten/rad-och-stod/"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-snug block hover:underline"
          >
            {t("safetyAdviceSupport")}
          </a>
          <a
            href="https://www.scouterna.se/trygga-moten/trygg-verksamhet/"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-snug block hover:underline"
          >
            {t("safetyOperation")}
          </a>
        </div>
      </div>
    </section >
  );
}
