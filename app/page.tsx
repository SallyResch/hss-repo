import HssNav from "@/components/HssNav";
import ScoutNav from "@/components/ScoutNav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <header className="flex flex-row justify-between bg-hss-scout-darkblue text-white">
          <p>Scout Logo placement</p>
          <ScoutNav />
        </header>
        <header className="flex flex-row justify-between bg-hss-mediumblue text-white">
          <p>HSS Logo placement</p>
          <HssNav />
        </header>
      </div>
      <main className="grow">
        <div>Hero section</div>
        <div>Vad är hss</div>
        <div className="bg-hss-yellow">Våra avdelningar</div>
        <div className="bg-hss-mediumblue text-white">Trygghet/Säkerhet</div>
      </main>
      <footer className="flex flex-row justify-evenly border-hss-mediumblue border-2">
        <section>Kontakt section</section>
        <section>Äventyr och kompisar</section>
        <section>Soc med</section>
      </footer>
    </div>
  )
}
