import Image from "next/image";
import Link from "next/link";

import mainImage from "@/public/Vad_ar_HSS.jpg";
import image1 from "@/public/poloroid1.png";
import image2 from "@/public/poloroid2.jpg";
import image3 from "@/public/poloroid3.jpg";
import image4 from "@/public/poloroid4.png";

import bottomWave from "@/public/Wave - yellow.png";
import FloatingPolaroid from "./FloatingPolaroid";

export default function HistorySection() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20 lg:py-12"
      style={{
        backgroundImage: "url('/ship-pattern.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "600px",
      }}
    >
      <div className="absolute inset-0 bg-white/85" />

      <div className="absolute bottom-0 left-0 w-full">
        <Image src={bottomWave} alt="Bottom wave" className="h-auto w-full" />
      </div>
      <FloatingPolaroid
        src={image1}
        alt="Scout activity"
        rotation="-rotate-6"
        className="left-[60px] top-[360px]"
      />

      <FloatingPolaroid
        src={image2}
        alt="Scout activity"
        rotation="-rotate-12"
        className="left-[100px] top-[20px]"
      />

      <FloatingPolaroid
        src={image3}
        alt="Scout activity"
        rotation="rotate-6"
        className="right-[80px] top-[60px]"
      />

      <FloatingPolaroid
        src={image4}
        alt="Scout activity"
        rotation="-rotate-12"
        className="right-[60px] top-[380px]"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5">
        <h1 className="mb-8 text-center font-montserrat text-2xl font-semibold text-hss-mediumblue md:text-[28px] lg:mb-14 lg:text-[32px]">
          Vad är HSS
        </h1>
           
<div className="mb-8 w-full max-w-[420px] md:max-w-[480px] lg:mb-12 lg:max-w-[639px]">
  <div className="relative h-[220px] md:h-[260px] lg:h-[300px] w-full">
    <Image
      src={mainImage}
      alt="HSS scouts"
      fill
      priority
      className="rounded-xl object-cover object-center shadow-lg"
      sizes="(max-width: 768px) 420px, (max-width: 1024px) 480px, 639px"
    />
  </div>
</div>
        <div className="max-w-[420px] space-y-5 text-hss-mediumblue md:max-w-[480px] lg:max-w-[639px] lg:space-y-8">
          <p className="font-montserrat text-base leading-relaxed sm:text-lg lg:text-[22px]">
            Hässelby Strands Sjöscoutkår (HSS) är en traditionsrik ideell
            ungdomsverksamhet med fokus på scouting och båtliv.
          </p>

          <p className="font-montserrat text-base leading-relaxed sm:text-lg lg:text-[22px]">
            Vi är religiöst och politiskt obundna, och medlem i Svenska
            Scoutförbundet, som med ca 65.000 medlemmar är en av Sveriges
            största ungdomsorganisationer.
          </p>

          <div className="flex justify-end">
            <Link
              href="/om-hss"
              className="flex items-center gap-2 text-base font-medium text-hss-mediumblue transition-all duration-300 hover:gap-4 sm:text-lg lg:text-[22px]"
            >
              Läs mer
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
