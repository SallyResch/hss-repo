import HeroSection from "@/components/HeroSection";
import ScoutGroupSection from "@/app/[locale]/avdelningar/Department";
import FindUrDept from "./findurdept";
import { Metadata } from "next";

import heroimg from "@/public/Wireframe.png";
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

      <main className="py-12">
        {scoutGroups.map((group) => (
          <ScoutGroupSection
            key={group.title}
            {...group}
          />
        ))}
      </main>
      <section>
        <FindUrDept />
      </section>
    </>
  );
}