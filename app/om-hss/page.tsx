import HeroSection from "@/components/HeroSection";
import heroimg from "../../public/Wireframe.png";
import type { Metadata } from 'next'

type Props = {}

export const metadata: Metadata = {
  title: 'Om HSS',
  description: 'Om Hässelby Strands Sjöscoutkår',
}
export default function OmHss({ }: Props) {
  return (
    <div>
      <HeroSection
        title="Om HSS"
        description="Hässelby Strands Sjöscoutkår - En traditionsrik ideell ungdomsverksamhet sedan många år"
        imageUrl={heroimg}
        mobileImgUrl={heroimg}
        showButtons={false}
        variant="subpage" />
      export default function AboutHSSPage() {
  return (
      <main className="w-full flex flex-col bg-white text-[#0d335d]">
        <HeroSection
          title="Om HSS"
          description="HÄSSELBY STRANDS SJÖSCOUTKÅR - Hässelby Strands Sjöscoutkår - En traditionsrik ideell ungdomsverksamhet sedan många år"
          imageUrl={heroimg}
          mobileImgUrl={heroimg}
          showButtons={false}
          variant="subpage"
        />

        <section className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Vilka är vi?</h2>
          <p className="text-lg mb-4">
            Hässelby Strands Sjöscoutkår (HSS) är en traditionsrik ideell
            ungdomsverksamhet med fokus på scouting och båtliv. Vi verkar i
            Hässelby Strand, västra Stockholm, och har gjort det i många år.
          </p>
          <p className="text-lg mb-4">
            Vi är religiöst och politiskt obundna och medlem i Svenska
            Scoutförbundet (Scouterna), som med cirka 65 000 medlemmar är en av
            Sveriges största ungdomsorganisationer.
          </p>
          <p className="text-lg">
            Hos oss möts barn och unga från alla delar av samhället för att
            tillsammans uppleva äventyr, lära sig nya färdigheter och växa som
            individer.
          </p>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-[#FDE68A] p-10 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-[#0d335d]">
              Vad gör oss unika?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 text-[#0d335d]">
              <div>
                <h3 className="text-xl font-bold mb-2">Sjöscouterna</h3>
                <p>
                  Som sjöscoutkår har vi ett unikt fokus på vatten och båtar. Vi
                  seglar i Mälaren och Stockholms skärgård och lär våra scouter
                  allt om sjösäkerhet, navigation och segling.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Äventyr året runt</h3>
                <p>
                  Vi har aktiviteter under alla årstider - från sommarsegling till
                  vinterhajker. Våra scouter får uppleva både natur och utmaningar
                  året runt.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Gemenskap</h3>
                <p>
                  Hos oss skapar vi starka vänskaper som varar livet ut. Många av
                  våra ledare är före detta scouter som fortsätter engagera sig i
                  verksamheten.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lärande genom att göra</h3>
                <p>
                  Vi tror på att lära genom praktisk erfarenhet. Våra scouter får
                  prova, misslyckas och lyckas i en trygg miljö där misstag är en
                  del av lärandet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#0d335d]">Vår historia</h2>
          <p className="text-lg mb-4">
            Hässelby Strands Sjöscoutkår har en lång och stolt tradition av
            scoutverksamhet i området. Genom åren har tusentals barn och unga
            passerat genom våra avdelningar och lärt sig allt från knopar till
            ledarskap.
          </p>
          <p className="text-lg mb-4">
            Många av våra traditioner lever kvar än idag - från isvaksbadet på
            vintern till sommarsegling i skärgården. Dessa traditioner förenar
            generationer av scouter och skapar en stark känsla av tillhörighet.
          </p>
          <p className="text-lg">
            Kåren har alltid haft en stark koppling till vatten och båtar. Vårt
            läge vid Mälaren har gett oss unika möjligheter att bedriva
            sjöscoutverksamhet på hög nivå.
          </p>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#0d335d]">
              Våra traditioner
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#cceeff] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Isvaksbadet</h3>
                <p className="text-sm">
                  En klassisk tradition där äventyrarscouter badar i isvak under
                  vintern. Inte bara modigt - också en viktig övning i
                  sjösäkerhet!
                </p>
              </div>
              <div className="bg-[#cceeff] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Sommarsegling</h3>
                <p className="text-sm">
                  Varje sommar ger vi oss ut på äventyr i Stockholms skärgård.
                  Våra scouter lär sig segling, navigation och teamwork.
                </p>
              </div>
              <div className="bg-[#cceeff] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Vinterhajken</h3>
                <p className="text-sm">
                  Äventyrarscouter bor i tält även när det är som kallast. En
                  utmaning som stärker både kropp och själ!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-4xl mx-auto w-full">
          <div className="bg-[#0d335d] text-white p-12 rounded-t-none rounded-b-3xl text-left">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#FDE68A]">
              Våra samarbetspartners
            </h2>
            <p className="mb-8 text-center text-lg">
              Vi samarbetar med flera organisationer för att ge våra scouter bästa
              möjliga verksamhet:
            </p>

            <ul className="space-y-4 max-w-2xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>
                  <span className="font-bold">Scouterna:</span> Vi är medlemmar i
                  Svenska Scoutförbundet och följer deras riktlinjer och
                  värderingar.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>
                  <span className="font-bold">Stockholms Sjöscoutdistrikt:</span>{" "}
                  Vi är en del av distriktets gemenskap och deltar i gemensamma
                  aktiviteter.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>
                  <span className="font-bold">Lokala partners:</span> Vi
                  samarbetar med lokala föreningar och organisationer i Hässelby
                  Strand för att stärka vår verksamhet.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
      );
}
