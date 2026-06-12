import HeroSection from "@/components/HeroSection";
import ScoutGroupSection from "@/app/[locale]/avdelningar/Department";
import FindUrDept from "./findurdept";
import { Metadata } from "next";

import heroimg from "@/public/bliscoutbkg.png";
import { getScoutGroups } from "@/data/scoutGroups";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Avdelningar",
  description: "Sida för alla våra avdelningar"
}

export default function Avdelningar() {
  const t = useTranslations("avdelningarPage")

  const scoutGroups = getScoutGroups(t);
  return (
    <>
      <HeroSection
        title={t('heroTitle')}
        description={t('heroText')}
        imageUrl={heroimg}
        mobileImgUrl={heroimg}
        showButtons={false}
        variant="subpage"
      />

<main className="relative overflow-hidden py-12">
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
<section>
  <FindUrDept/>
</section>
    </>
  );
}