import Image from "next/image";
import Link from "next/link";

import mainImage from "@/public/image 16.png";
import image4 from "@/public/image4.png";
import image1 from "@/public/image1.png";
import image6 from "@/public/image6.png";

import topWave from "@/public/Wave - Blue.png";
import bottomWave from "@/public/Wave - yellow.png";

export default function HistorySection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="absolute top-0 left-0 w-full">
        <Image
          src={topWave}
          alt="Top wave"
          className="w-full"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src={bottomWave}
          alt="Bottom wave"
          className="w-full"
        />
      </div>

      <div className="absolute left-[147px] top-[391px] hidden md:block">
        <Image
          src={image4}
          alt="Floating image"
          width={124}
          height={122}
          className="rounded-[284px] object-cover shadow-lg"
        />
      </div>

      <div className="absolute right-[140px] top-[197px] hidden md:block">
        <Image
          src={image1}
          alt="Floating image"
          width={125}
          height={124}
          className="rounded-[284px] object-cover shadow-lg"
        />
      </div>

      <div className="absolute right-[140px] top-[514px] hidden md:block">
        <Image
          src={image6}
          alt="Floating image"
          width={124}
          height={124}
          className="rounded-[527.5px] object-cover shadow-lg"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6">
        <h1
          className="mb-14 text-center font-montserrat text-[32px] font-semibold leading-[100%] tracking-[0%] text-hss-mediumblue"
        >
          Vad är HSS
        </h1>

        <div className="mb-12">
          <Image
            src={mainImage}
            alt="HSS scouts"
            width={639}
            height={360}
            priority
            className="h-[360px] w-[639px] rounded-bl-[20px] rounded-br-[20px] border-t border-l border-hss-mediumblue object-cover shadow-xl"
          />
        </div>

        <div className="max-w-[639px] space-y-8 text-hss-mediumblue">
          <p className="font-montserrat text-[22px] font-normal leading-[100%] tracking-[0%]" >
            Hässelby Strands Sjöscoutkår (HSS) är en traditionsrik ideell
            ungdomsverksamhet med fokus på scouting och båtliv.
          </p>

          <p className="font-montserrat text-[22px] font-normal leading-[100%] tracking-[0%]" >
            Vi är religiöst och politiskt obundna, och medlem i Svenska
            Scoutförbundet, som med ca 65.000 medlemmar är en av Sveriges
            största ungdomsorganisationer.
          </p>

          <div className="flex justify-end">
            <Link
              href="/om-hss"
              className="flex items-center gap-3 text-[22px] font-medium text-hss-mediumblue transition-all duration-300 hover:gap-5"
            >
             Läs mer
              <span className="text-3xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}