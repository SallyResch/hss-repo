import HeroSection from "@/components/HeroSection";
import { Card } from "../components/Card";
import Button from "../components/Button";
import heroimg from "../public/hero.jpg";
import heromob from "../public/heromob.png";
import Footer from "../components/Footer";
import InstagramCarousel from "@/components/InstagramCarousel";
import kidIcon from "./assets/kid.svg";
import kiddIcon from "./assets/kidd.svg";
import teenIcon from "./assets/teen.svg";
import adultIcon from "./assets/adult.svg";
import familyIcon from "./assets/family.svg";
import HistorySection from "@/components/HistorySection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen box-border">
      <main className="grow">
        <div>
          <HeroSection
            title="Välkommen till"
            description="Här väntar Äventyret. Oavsett vem du är eller var du kommer ifrån
          finns det ett äventyr som väntar"
            imageUrl={heroimg}
            mobileImgUrl={heromob}
            showButtons={true}
            variant="home"
          />
        </div>

        <div>
          <HistorySection />
        </div>


        <div className="bg-hss-yellow py-12 px-4">
          <div className="max-w-[95rem] mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#0d335d] text-center">
              Våra Avdelningar
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
              <Card
                title="Familjescouting"
                imageUrl={familyIcon.src}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                age=""
              />

              <Card
                title="Sjöhumlor/Spårare"
                age="8-9 år"
                imageUrl={kidIcon.src}
                description="Vid 8 års ålder kan man börja i HSS, dvs när man börjar i årskurs 2. Man blir då Spårarscout och medlem i avdelningen Sjöhumlorna. (Tidigare hette spårarscout 'miniorscout')"
              />

              <Card
                title="Kaparna/Upptäckare"
                age="10-11 år"
                imageUrl={kiddIcon.src}
                description="På Kaparna stegras svårighetsgraden på uppgifterna. Scouterna får lä sig segla optimist samt prova på att segla 2-krona samt kölbåt. En färdigutbildad upptäckarscout kan bland annat hantera kniv, elda och släcka mindre bränder med mera."
              />

              <Card
                title="Konvojen/Äventyrare"
                age="12-14 år"
                imageUrl={teenIcon.src}
                description="Här börjar seglingen på allvar och det åbr ut i skärgården om sommaren. När vi inte seglar tränar vi navigation och gör även traditionella landscoutaktiviteter. På vintern när det är som kallast har vi en rejäl vinterhajk då vi bor i tält."
              />

              <Card
                title="Utmanare"
                age="15+ år"
                imageUrl={adultIcon.src}
                description="När man kommer upp från äventyrarscouterna bildar man ett lag tillsammans med kullkamraterna. Sedan arbet man mot att lära sig  saker och anta svårare utmaningar för att öka sammanhållningen."
              />
            </div>
          </div>
        </div>

        <div className="bg-hss-mediumblue text-white">Trygghet/Säkerhet</div>

        <div className="flex flex-col gap-4 p-6 bg-hss-mediumblue text-hss-white">
          <h2 className="font-bold text-2xl text-center">Senaste händelserna:</h2>
          <InstagramCarousel />
        </div>
      </main>
    </div>
  );
}
