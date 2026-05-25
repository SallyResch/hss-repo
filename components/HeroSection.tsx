import Image from "next/image";
import Link from "next/link";
import hasselbyLogo from "../public/hasselbylogo.png";
import WhiteWaveLine from "@/components/WhiteWaveLine";
import Button from "../components/Button";
import HeroSectionProps from "../types/herosectiondata";
const HeroSection = ({
  title,
  description,
  imageUrl,
  mobileImgUrl,
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-146.25 md:h-202.5 mt-0">
      {mobileImgUrl && (
        <Image
          src={mobileImgUrl}
          alt="HSS Mobile Hero Image"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
      )}
      {imageUrl && (
        <div className="hidden md:block">
          <Image
            src={imageUrl}
            alt="HSS Hero Image"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>
      )}

      <div
        className="absolute flex flex-col items-center pt-5 pr-10 pb-5 pl-10.75 gap-5 w-73.5 md:w-177 md:h-133.5 h-58.25 bg-[#003660E5] rounded-br-2xl rounded-bl-2xl
                   top-38.5 left-12 "
      >
        <span className="text-[#F4C430] font-bold text-sm md:font-semibold md:text-6xl ">
          {title}
        </span>
        <Image
          src={hasselbyLogo}
          alt="HasselbyLogo"
          className="object-contain w-53.5 h-12.75 md:w-127 md:h-30.25 md:bg-opacity-1 bg-opacity-0"
        />

        <WhiteWaveLine />

        <p className="text-xs text-[#F4C430] md:w-127 md:text-2xl  md:h-26.25 md:font-semibold  italic leading-relaxed">
          {description}
        </p>
        <div className="hidden md:flex flex-row gap-6 mt-8">
          <Link href="/bli-scout">
            <Button variant="yellow">Bli Scout</Button>
          </Link>
            <Button variant="outline">Bli Ledare</Button>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
