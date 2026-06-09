import HeroSection from "@/components/HeroSection";
import heroimg from "../../public/Wireframe.png";
import ScoutingCards from "@/components/ScoutingCards";
import adventureImg from "../../public/myset.jpg";
import comraderyImg from "../../public/HSS-myset.jpeg";
import developmentImg from "../../public/gallery2.jpg";
import natureImg from "../../public/04.png";
import type { Metadata } from "next";
import StartSection from "./StartSection";
import TextSection from "@/components/TextSection";
import VanligaFragor from "@/app/bli-scout/FAQSection";
import ClothingSection from "@/app/bli-scout/ClothingSection";

export const metadata: Metadata = {
  title: "Bli Scout",
  description:
    "En sida för att ta reda på mer information om hur man blir scout och vad det innebär",
};

export default function BliScout({}) {
  return (
    <div>
      <HeroSection
        title="Bli Scout"
        description=" Vill du ge ditt barn möjlighet att upptäcka naturen, lära sig nya färdigheter och få
                      vänner för livet? Här kan du läsa mer om hur du blir scout hos oss."
        imageUrl={heroimg}
        mobileImgUrl={heroimg}
        showButtons={false}
        variant="subpage"
      />

      <div className="w-full  flex flex-col items-center ">
        <p className="mb-14 mt-14 text-center text-3xl font-semibold text-hss-mediumblue md:text-5xl">
          Varför Scouting?
        </p>
      </div>

      <section className="w-full px-6  md:px-20 ">
        <div className="mx-auto max-w-5xl w-full">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:justify-between w-full">
            <div className="flex flex-col gap-6 flex-1 w-full lg:max-w-[48%] items-stretch">
              <ScoutingCards
                imageUrl={adventureImg}
                title="Äventyr"
                description="Segla ut i skärgården Vid 12 år seglar vi ut i Stockholms skärgård. Här börjar seglingen på allvar. Knopar, navigation och minnesvärda nätter ombord."
                color="blue"
              />
              <ScoutingCards
                imageUrl={developmentImg}
                title="Utveckling"
                description="Lär dig segla, steg för steg. Hos oss lär sig barn knopar, grundläggande naturkunskap och sjömanskap på ett lekfullt sätt. 
                "
                color="yellow"
              />
            </div>

            <div className="flex flex-col gap-6 flex-1 w-full lg:max-w-[48%] items-stretch">
              <ScoutingCards
                imageUrl={comraderyImg}
                title="Natur"
                description="Sjö, skog och vinterhajk. När vi inte seglar tränar vi navigation och gör traditionella landscoutaktiviteter. På vintern har vi rejäl vinterhajk "
                color="yellow"
              />
              <ScoutingCards
                imageUrl={natureImg}
                title="Gemenskap"
                description="För alla från 8 till 100. Oavsett om du är 8 eller 100 år är du välkommen. Du behöver inte vara en erfaren seglare, det enda kravet är "
                color="blue"
              />
            </div>
          </div>
        </div>
      </section>


      <div>
        <StartSection /> 
        <TextSection
          title="Hur fungerar verksamheten?"
          paragraphs={[
            "Vi har möten en gång i veckan under terminstid. Mötena är cirka 2 timmar långa och varierar i innehåll.",
            "Förutom veckans möten arrangerar vi regelbundet hajker (övernattningar) och läger under helger och lov.",
            "Verksamheten är indelad i avdelningar efter ålder. Varje avdelning har sina egna ledare och sitt eget program anpassat efter åldersgruppen.",
          ]}
        />
        <TextSection
          title="Vad föräldrar behöver veta"
          paragraphs={[
            "Som förälder är du alltid välkommen att delta i verksamheten. Vi uppskattar föräldraengagemang och många av våra aktiviteter kräver stöd från föräldrar.",
            "Alla våra ledare är utbildade i Trygga Möten och har registerutdrag. Vi arbetar aktivt för att skapa en trygg och inkluderande miljö för alla barn och unga.",
            "Kommunikation sker främst via e-post. Du kommer få information om hur du får tillgång till dessa kanaler efter registrering.",
          ]}
        />
        <ClothingSection />
        <VanligaFragor />
      </div>
    </div>
  );
}
