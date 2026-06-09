import Image from "next/image";
import Link from "next/link";

import mainImage from "@/public/image 16.png";
import image4 from "@/public/image4.png";
import image1 from "@/public/image1.png";
import image6 from "@/public/image6.png";
import topWave from "@/public/Wave - Blue.png";
import bottomWave from "@/public/Wave - yellow.png";
import { useTranslations } from "next-intl";

export default function HistorySection() {
  const t = useTranslations("homePage")
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-32">
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src={bottomWave}
          alt="Bottom wave"
          className="h-auto w-full"
        />
      </div>
      <div className="absolute left-2 top-[360px] hidden min-[1190px]:block lg:left-[147px] lg:top-[391px]">
        <Image
          src={image4}
          alt="Floating image"
          width={124}
          height={122}
          className="h-[65px] w-[65px] rounded-full object-cover shadow-lg lg:h-[122px] lg:w-[124px]"
        />
      </div>
      <div className="absolute right-2 top-[210px] hidden min-[1190px]:block lg:right-[140px] lg:top-[197px]">
        <Image
          src={image1}
          alt="Floating image"
          width={125}
          height={124}
          className="h-[65px] w-[65px] rounded-full object-cover shadow-lg lg:h-[124px] lg:w-[125px]"
        />
      </div>
      <div className="absolute right-2 top-[500px] hidden min-[1190px]:block lg:right-[140px] lg:top-[514px]">
        <Image
          src={image6}
          alt="Floating image"
          width={124}
          height={124}
          className="h-[65px] w-[65px] rounded-full object-cover shadow-lg lg:h-[124px] lg:w-[124px]"
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5">
        <h1 className="mb-8 text-center font-montserrat text-2xl font-semibold text-hss-mediumblue md:text-[28px] lg:mb-14 lg:text-[32px]">
          {t("aboutTitle")}
        </h1>
        <div className="mb-8 w-full max-w-[420px] md:max-w-[480px] lg:mb-12 lg:max-w-[639px]">
          <Image
            src={mainImage}
            alt="HSS scouts"
            priority
            style={{ width: "100%", height: "auto" }}
            className="rounded-bl-[20px] rounded-br-[20px] border-l border-t border-hss-mediumblue object-cover shadow-xl"
          />
        </div>
        <div className="max-w-[420px] space-y-5 text-hss-mediumblue md:max-w-[480px] lg:max-w-[639px] lg:space-y-8">
          <p className="font-montserrat text-base leading-relaxed sm:text-lg lg:text-[22px]">
            {t("aboutDesc1")}
          </p>
          <p className="font-montserrat text-base leading-relaxed sm:text-lg lg:text-[22px]">
            {t("aboutDesc2")}
          </p>
          <div className="flex justify-end">
            <Link
              href="/om-hss"
              className="flex items-center gap-2 text-base font-medium text-hss-mediumblue transition-all duration-300 hover:gap-4 sm:text-lg lg:text-[22px]"
            >
              {t("btnReadMore")}
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}