import Image from "next/image";
import heroImage from "@/public/hero.jpg";
import hasselbyLogo from "@/public/hasselbylogo.png";
import whiteLine from "@/public/whiteline.png";
import WhiteWaveLine from "@/components/WhiteWaveLine";
import YellowWaveLine from "@/components/YellowWaveLine";
const HeroSection = () => {
  return (
    <section className="relative w-full h-146.25 md:h-202.5 mt-0">
      <div className="absolute top-0 left-0 w-full z-20">
        <YellowWaveLine />
      </div>

      <Image
        src={heroImage}
        alt="HSS Hero Image"
        fill
        priority
        className="object-cover object-bottom"
        sizes="100vw"
      />

      <div
        className="absolute  flex flex-col items-center pt-5 pr-10 pb-5 pl-10.75 gap-5 w-73.5 md:w-177 md:h-133.5 h-58.25 bg-[#003660E5] rounded-br-2xl rounded-bl-2xl
                   top-38.5 left-12 "
      >
        <span className="text-[#F4C430] font-bold text-sm md:font-semibold md:text-6xl ">
          Välkommen till
        </span>
        <Image
          src={hasselbyLogo}
          alt="HasselbyLogo"
          className="object-contain w-53.5 h-12.75 md:w-127 md:h-30.25 md:bg-opacity-1 bg-opacity-0"
        />

        <WhiteWaveLine />

        <p className="text-xs text-[#F4C430] md:w-127 md:text-2xl  md:h-26.25 md:font-semibold  italic leading-relaxed">
          Här väntar Äventyret. Oavsett vem du är eller var du kommer ifrån
          finns det ett äventyr som väntar
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

