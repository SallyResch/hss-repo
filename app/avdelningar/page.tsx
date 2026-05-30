import HeroSection from "@/components/HeroSection";
import ScoutGroupSection from "@/app/avdelningar/Department";

import heroimg from "@/public/Wireframe.png";
import { scoutGroups } from "@/data/scoutGroups";

export default function Avdelningar() {
  return (
    <>
      <HeroSection
        title="Bli Scout"
        description="Har du eller dit barn funderingar på att bli scout, nedan följer information om vad som kan förväntas av dig eller dit barn"
        imageUrl={heroimg}
        mobileImgUrl={heroimg}
        showButtons={false}
        variant="subpage"
      />

      <main className="py-12">
        {scoutGroups.map((group) => (
          <ScoutGroupSection
            key={group.title}
            {...group}
          />
        ))}
      </main>
    </>
  );
}