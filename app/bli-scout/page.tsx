import HeroSection from "@/components/HeroSection";
import heroimg from "../../public/Wireframe.png";
import ScoutingCards from "@/components/ScoutingCards";
import adventureImg from "../../public/adventure.png";
import comraderyImg from "../../public/comradery.png";
import developmentImg from "../../public/development.png";
import natureImg from "../../public/nature.png";
import topWave from "../../public/Wave - Blue.png";
import Image from "next/image";
import type { Metadata } from "next";
import StartSection from "./StartSection";
import TextSection from '@/components/TextSection'
import VanligaFragor from '@/app/bli-scout/FAQSection'
import ClothingSection from '@/app/bli-scout/ClothingSection'

export const metadata: Metadata = {
  title: "Bli Scout",
  description: "En sida för att ta reda på mer information om hur man blir scout och vad det innebär"
}

export default function BliScout({ }) {
  return (
    <div>
      <HeroSection
        title="Bli Scout"
        description="Har du eller dit barn funderingar på att bli scout, nedan följer information om vad som kan förväntas av dig eller dit barn."
        imageUrl={heroimg}
        mobileImgUrl={heroimg}
        showButtons={false}
        variant="subpage"
      />

      <div className="w-full  flex flex-col items-center">


        <p className="w-[276px] h-[39px] left-[582px] mt-[63px] mb-[69px] font-montserrat font-semibold text-[32px]  text-center align-middle">
          Varför Scouting?
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1200px] px-4 md:px-20 py-10 justify-items-center">
          <ScoutingCards
            imageUrl={adventureImg}
            title="Äventyr"
            description="Utforska naturen, prova nya saker och utmana dig själv tillsammans med andra."
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
