import type { Metadata } from "next"
import HeroSection from "@/components/HeroSection";
import heroimg from "@/public/Wireframe.png";
import { currentBoats } from "@/data/boatsData";
import TextContentBlock from "@/components/TextContentBlock"
import PreviousBoatsSection from '@/components/cards/PreviousBoatsSection';
import BoatCard from "@/components/cards/BoatCard";
import TextCard from "@/components/cards/TextCard";
import BottomText from "@/components/BottomText";

export const metadata: Metadata = {
    title: "Våra båtar",
    description: "Sida för alla våra båtar"
}


export default function VaraBatarPage(){
    return(
        <main className="flex flex-col items-center w-full">
        <HeroSection 
        title="Våra båtar"
        description="Båtarna är en viktig del av vår identitet, historia och verksamhet. Här kan du läsa om våra båtar - både de vi seglar idag och de som seglat före oss."
        variant="subpage"
        imageUrl={heroimg}
        />

        <TextContentBlock
        title="En flotta för alla åldrar"
        isCentered={true}
        >         
            <p>Vi tror på att lära genom att göra. Vår båtpark är anpassad för att ge scouter i alla åldrar möjlighet att lära sig segla, navigera och hantera båtar på ett säkert sätt i Mälaren och Stockholms skärgård.</p>
        </TextContentBlock>
       
        {/* boat */}
        <section className="w-full max-w-5xl px-6 mt-16">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-blue-200 cursor-pointer">
                <h2 className="text-2xl font-bold text-hss-mediumblue">
                    〰 En flotta för alla åldrar
                </h2>
                <span className="text-sm font-semibold text-hss-mediumblue hover:underline">
                    Se alla våra båtar →
                </span>
            </div>

            <p className="mb-8 text-sm text-gray-600">
                Dessa båtar används i vår verksamhet för segling, utbildning och äventyr på det öppna vattnet.                
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentBoats.map((boat) => (
                    <BoatCard
                    key={boat.title}
                    {...boat}
                    />
                ))}               
            </div>
        </section> 

        <PreviousBoatsSection />
        <BottomText />


        </main>
    )
}
