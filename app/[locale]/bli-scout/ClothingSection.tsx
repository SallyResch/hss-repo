import { useTranslations } from "next-intl";

const ClothingSection = () => {
  const t = useTranslations("bliScoutPage")
  return (
    <section className="w-full bg-white px-6 py-12 md:px-20 md:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold text-hss-mediumblue mb-6">
          {t("clothingTitle")}
        </h2>
        <div className="space-y-8">

          <p className="text-lg leading-relaxed text-hss-mediumblue mb-4">
            <span className="font-bold">{t("clothingSubTitle1")} </span>
            {t("clothingDesc1")}
          </p>

          <p className="text-lg leading-relaxed text-hss-mediumblue mb-4">
            <span className="font-bold">{t("clothingSubTitle2")} </span>
            {t("clothingDesc2")}
          </p>

          <p className="text-lg leading-relaxed text-hss-mediumblue mb-4">
            <span className="font-bold">{t("clothingSubTitle3")} </span>
            {t("clothingDesc3")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;