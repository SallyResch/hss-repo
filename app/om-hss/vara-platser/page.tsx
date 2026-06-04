import HeroSection from "@/components/HeroSection";
import ScoutPlatserCard from "@/components/ScoutPlatserCard";
import varaplasterhero from "@/public/varaplasterhero.png";
import ruffenImage from "@/public/ruffen.png";
import mysetImage from "@/public/myset.jpg";
import type { Metadata } from "next";
import HittaCards from "@/components/HittaCards";
import GallerySection from "@/app/om-hss/vara-platser/gallery";

export const metadata: Metadata = {
  title: "Våra platser",
  description: "Sida för alla våra lokaler",
};

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
      <section className="flex flex-col mt-[64px] px-6 md:px-full m-auto gap-[64px]  ">
        <div className="flex flex-col gap-[24px] text-center item-center">
          <p className="h-[39px] font-semibold text-hss-mediumblue text-[32px] ">
            〰️ Våra scoutplatser
          </p>
          <p className="font-normal text-hss-mediumblue text-[16px] ">
            Vi har två fantastiska platser vid Mälaren där vi möts, umgås och
            skapar minnen.
          </p>
        </div>
        <div>
          <ScoutPlatserCard
            imageUrl={ruffenImage}
            title="Ruffen"
            description=" Ruffen ligger vid Mälaren och är vår egna stuga. Här har vi brygga,
            båtplats och gott om utrymme för aktiviteter och läger."
            isReverse={false}
          />
          <ScoutPlatserCard
            imageUrl={mysetImage}
            title="Myset"
            description=" Ruffen ligger vid Mälaren och är vår egna stuga. Här har vi brygga,
            båtplats och gott om utrymme för aktiviteter och läger."
            isReverse={true}
          />
        </div>
        <div className="flex flex-col gap-[40px] lg:w-[1000px] p-2.5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 ">
            <p className="font-semibold text-hss-mediumblue text-[32px] leading-tight">
              〰️ Hitta hit
            </p>
            <p className="font-normal text-hss-mediumblue text-[16px] lg:text-right">
              Så här hittar du till våra platser
            </p>
          </div>
          <div className="flex flex-col lg:flex-row  gap-[40px] mb-[10px] w-full">
            <div className="lg:flex-1">
              <HittaCards
                cardTitle="📍 Ruffen"
                address="Adress:"
                addressDeatils="Ruffenvägen 1, 165 55 Hässelby"
                coordinater="Koordinater:"
                coordinaterDetails={`N 59°22'10", E 17°48'20"`}
                parkering="Parkering:"
                parkeringDetails="Följ skyltning till grusparkeringen"
              />
            </div>

            <div className="lg:flex-1">
              <HittaCards
                cardTitle="📍 Myset"
                address="Adress:"
                addressDeatils="Mysetvägen 2, 165 55 Hässelby"
                coordinater="Koordinater:"
                coordinaterDetails={`N 59°22'10", E 17°48'20"`}
                parkering="Parkering:"
                parkeringDetails="Följ skyltning till grusparkeringen"
              />
            </div>
          </div>
        </div>
      </section>
      <div>
          <GallerySection />
      </div>
    </>
  );
}
