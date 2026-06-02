import HeroSection from "@/components/HeroSection";
import ReverseScoutPlatserCard from "@/components/ReverseScoutPlatserCard";
import ScoutPlatserCard from "@/components/ScoutPlatserCard";
import varaplasterhero from "@/public/varaplasterhero.png";
import ruffenImage from "@/public/ruffen.png";
import mysetImage from "@/public/myset.jpg";
export default function VaraPlatser() {
  return (
    <>   
      <div>
      <HeroSection
        title="Våra platser"
        description="Ruffen och Myset är våra två sjöscoutplatser. Här håller vi möten, läger och äventyr året runt."
        imageUrl={varaplasterhero}
        mobileImgUrl={varaplasterhero}
        showButtons={false}
        variant="subpage"
      />
    </div>
   <section className="mt-[64px] px-6 md:px-[150px] ">
    <div className="flex flex-col gap-[24px]">
      <p className = "h-[39px] font-semibold text-hss-mediumblue text-[32px] ">〰️ Våra scoutplatser</p>
      <p className = "font-normal text-hss-mediumblue text-[16px] ">Vi har två fantastiska platser vid Mälaren där vi möts, umgås och skapar minnen.</p>
    </div>
    <div>
    <ScoutPlatserCard 
        imageUrl={ruffenImage} 
        title="Ruffen" 
        description=" Ruffen ligger vid Mälaren och är vår egna stuga. Här har vi brygga,
        båtplats och gott om utrymme för aktiviteter och läger."
        isReverse = {false} />
     <ScoutPlatserCard 
        imageUrl={mysetImage} 
        title="Myset" 
        description=" Ruffen ligger vid Mälaren och är vår egna stuga. Här har vi brygga,
        båtplats och gott om utrymme för aktiviteter och läger."
        isReverse = {true} />

   
    </div>
    </section>
    </>
  );
}
