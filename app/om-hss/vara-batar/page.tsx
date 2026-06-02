import HeroSection from "@/components/HeroSection";
import heroimg from "@/public/Wireframe.png";
import BoatCard from "@/components/BoatCard";
import { currentBoats } from "@/data/boatsData";


export default function VaraBatarPage(){
    return(
        <main className="flex flex-col items-center w-full">
        <HeroSection 
        title="Våra båtar"
        description="Båtarna är en viktig del av vår identitet, historia och verksamhet. Här kan du läsa om våra båtar - både de vi seglar idag och de som seglat före oss."
        variant="subpage"
        imageUrl={heroimg}
        />

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


        </main>
    )
}
