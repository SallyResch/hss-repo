import HeroSection from "@/components/HeroSection";
import ScoutGroupSection from "@/app/avdelningar/Department";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Avdelningar",
  description: "Sida för alla våra avdelningar"
}
import heroimg from "@/public/Wireframe.png";
import { scoutGroups } from "@/data/scoutGroups";

export default function Avdelningar() {
  return (
    <>
      <HeroSection
        title="Vara avdelningar"
        description="Verksamheten är indelad efter ålder. Varje avdelning har sitt eget program och sina egna utmaningar"
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