import Image from "next/image";

import heroImage from "@/public/background_hero.jpg";
import hasselbyLogo from "@/public/hasselbylogo.png";

import WhiteWaveLine from "@/components/WhiteWaveLine";
import YellowWaveLine from "@/components/YellowWaveLine";
import BlueWaveLine from "@/components/BlueWaveLine";

const BliScoutHero = () => {
  return (
    <section className="relative mt-0 h-146.25 w-full overflow-hidden md:h-202.5">
      <div className="absolute top-0 left-0 z-20 w-full">
        <YellowWaveLine />
      </div>

      <Image
        src={heroImage}
        alt="Bli Scout Hero"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          z-20
          flex
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          gap-6
          rounded-[20px]
          bg-[#003660E5]
          px-8
          py-8
          text-center
          md:w-[710px]
          md:px-14
          md:py-10
        "
      >
        <h1
          className="
            font-montserrat
            text-[32px]
            font-semibold
            leading-[100%]
            tracking-[0%]
            text-[#F4C430]
            md:text-[58px]
          "
        >
          Bli Scout
        </h1>

        <div className="w-full">
          <WhiteWaveLine />
        </div>

        <Image
          src={hasselbyLogo}
          alt="Hässleby Strands Sjöscoutkår"
          className="
            h-auto
            w-[260px]
            object-contain
            md:w-[508px]
          "
        />

        <p
          className=" max-w-[508px]
            font-montserrat
            text-[16px]
            font-semibold
            leading-[130%]
            tracking-[0%]
            text-[#F4C430]
            md:text-[24px]
            md:leading-[100%]
          "
        >
          Har du eller dit barn funderingar på att bli scout, nedan följer information om vad som kan förväntas av dig eller dit barn
        </p>
      </div>

      {/* BOTTOM BLUE WAVE  adjust bottom */}
      <div className="absolute bottom-[-10px] left-0 z-20 w-full leading-none">
        <BlueWaveLine />
      </div>
  
    </section>
  );
};

export default BliScoutHero;