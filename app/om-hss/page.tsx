import HeroSection from "@/components/HeroSection";
import heroimg from "../../public/Wireframe.png";

export default function AboutHSSPage() {
  return (
    <main className="w-full flex flex-col bg-white text-[#0d335d]">
      {/* 1. Hero Section */}
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
        <div className="max-w-5xl mx-auto bg-[#FDE68A] p-10 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-[#0d335d]">
            Vad gör oss unika?
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-[#0d335d]">
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

      {/* 4. Vår historia */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Vår historia</h2>
      </section>

      {/* 5. Våra traditioner */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Våra traditioner</h2>
        </div>
      </section>

      {/* 6. Våra samarbetspartners */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Våra samarbetspartners</h2>
      </section>

      {/* 7. Vill du veta mer? */}
      <section className="py-20 px-4 bg-[#0d335d] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Vill du veta mer?</h2>
      </section>
    </main>
  );
}
