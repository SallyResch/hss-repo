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
  showButtons = false,
  variant = "home",
}: HeroSectionProps) => {

  const desktopLeftPosition = variant === "home" ? "md:left-[79px]" : "lg:left-1/2 lg:-translate-x-1/2 md:left-[79px]";
  console.log(`desktopLeftPosition position is ${desktopLeftPosition}`)
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
        className={`absolute flex flex-col items-center pt-5 pr-10 pb-5 pl-10.75 gap-5 
          md:left-[120px] w-73.5 md:w-150 lg:w-177 md:h-133.5 h-auto bg-hss-mediumblue rounded-br-2xl rounded-bl-2xl
                   top-38.5 left-12  ${desktopLeftPosition}`}
        
      >
        <span className="text-hss-yellow font-bold text-sm md:font-semibold md:text-6xl ">
          {title}
        </span>
        <Image
          src={hasselbyLogo}
          alt="HasselbyLogo"
          className="object-contain w-53.5 h-12.75 md:w-127 md:h-30.25 md:bg-opacity-1 bg-opacity-0"
        />
        <div className="w-full flex justify-center px-4">
        <WhiteWaveLine/>
        </div>
        <p className="text-xs text-hss-yellow md:w-127 md:text-2xl  md:h-26.25 md:font-semibold  italic leading-relaxed">
          {description}
        </p>
        {showButtons && (
           <div className="flex flex-row  justify-center gap-3 mt-4 pb-4 md:gap-6 md:mt-8">
          <Link href="https://www.scoutnet.se/register/in/group/764">
            <Button variant="yellow" className="whitespace-nowrap">Bli Scout</Button>
          </Link>
          <Link href="https://www.scoutnet.se/register/in/group/764">
            <Button variant="outline" className="whitespace-nowrap">Bli Ledare</Button>
          </Link>
           </div>

        )}
       
      </div>
    </section>
  );
};

export default HeroSection;
