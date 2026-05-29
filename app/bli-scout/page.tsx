import HeroSection from "@/components/HeroSection";
import heroimg from "../../public/Wireframe.png";
import ScoutingCards from "@/components/ScoutingCards";
import adventureImg from "../../public/adventure.png";
import comraderyImg from "../../public/comradery.png";
import developmentImg from "../../public/development.png";
import natureImg from "../../public/nature.png";
import topWave from "../../public/Wave - Blue.png";
import Image from "next/image";
import StartSection from "./StartSection";

export default function BliScout({}) {
  return (
    <div>
      <HeroSection
        title="Bli Scout"
        description="Har du eller dit barn funderingar på att bli scout, nedan följer information om vad som kan förväntas av dig eller dit barn"
        imageUrl={heroimg}
        mobileImgUrl={heroimg}
        showButtons={false}
        variant="subpage"
      />

      <div className="w-full  flex flex-col items-center">
        <Image src={topWave} alt="Top wave" className="w-full" priority />

        <p className="w-[276px] h-[39px] left-[582px] mt-[63px] mb-[69px] font-montserrat font-semibold text-[32px]  text-center align-middle">
          Varför Scouting?
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1200px] px-4 md:px-20 py-10 justify-items-center">
          <ScoutingCards
            imageUrl={adventureImg}
            title="Äventyr"
            description="Utforska naturen, prova nya saker och utmana dig själv tillsammans med andra"
            color="blue"
          />

          <ScoutingCards
            imageUrl={comraderyImg}
            title="Natur"
            description="Utforska naturen, prova nya saker och utmana dig själv tillsammans med andra"
            color="yellow"
          />

          <ScoutingCards
            imageUrl={developmentImg}
            title="Utveckling"
            description="Utforska naturen, prova nya saker och utmana dig själv tillsammans med andra"
            color="blue"
          />

          <ScoutingCards
            imageUrl={natureImg}
            title="Gemenskap"
            description="Utforska naturen, prova nya saker och utmana dig själv tillsammans med andra"
            color="yellow"
          />
        </section>
      </div>
      <div>
        <StartSection/>
        </div>      
    </div>
  );
}

