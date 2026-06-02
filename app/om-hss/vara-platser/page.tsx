import HeroSection from "@/components/HeroSection";
import ScoutPlatserCard from "@/components/ScoutPlatserCard";
import varaplasterhero from "@/public/varaplasterhero.png";
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
    <section className = "mt-[64px] mr-[218px] ml-[218px]">
    <div>
      <p className = "h-[39px] font-semibold text-hss-mediumblue text-[32px] ">〰️ Våra scoutplatser</p>
      <p className = "font-normal text-hss-mediumblue text-[16px]">Vi har två fantastiska platser vid Mälaren där vi möts, umgås och skapar minnen.</p>
    </div>
    <div>
    <ScoutPlatserCard/>
    </div>
    </section>
    </>
  );
}
