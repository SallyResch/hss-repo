import HeroSection from "@/components/HeroSection";
import ScoutGroupSection from "@/app/avdelningar/Department";
import FindUrDept from "./findurdept";
import { Metadata } from "next";

import heroimg from "@/public/Wireframe.png";
import { scoutGroups } from "@/data/scoutGroups";

export const metadata: Metadata = {
  title: "Avdelningar",
  description: "Sida för alla våra avdelningar"
}

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

<main className="relative overflow-hidden py-12">
  {/* Background watermark */}
  <div
    className="absolute inset-0 pointer-events-none opacity-[0.05]"
    style={{
      backgroundImage: "url('/scout-symbols.jpeg')",
      backgroundRepeat: "repeat",
      backgroundSize: "500px",
    }}
  />

  <div className="relative z-10">
    {scoutGroups.map((group) => (
      <ScoutGroupSection
        key={group.title}
        {...group}
      />
    ))}
  </div>
</main>
    </>
  );
}