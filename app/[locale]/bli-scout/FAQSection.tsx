import { getFaqData } from "@/data/faqdata";
import { useTranslations } from "next-intl";

const VanligaFragor = () => {
  const t = useTranslations("bliScoutPage");
  const faqData = getFaqData(t)
  return (
    <section className="w-full  px-6 py-12 md:px-20 md:py-16">
      <div className="mx-auto max-w-5xl rounded-[24px] bg-hss-mediumblue px-8 py-10 md:px-14 md:py-12">


        <h2 className="text-4xl font-bold mb-6 text-hss-yellow">
          {t("questionsTitle")}
        </h2>
        <div className="space-y-8">
          {faqData.map((faq, index) => (
            <div key={index}>

              <h3 className="mb-2 text-2xl font-semibold text-hss-yellow">
                {faq.question}
              </h3>

              <p className="text-lg leading-relaxed text-white mb-4">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VanligaFragor;