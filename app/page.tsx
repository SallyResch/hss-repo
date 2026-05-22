import HeroSection from "@/components/HeroSection";
import { Card } from "../components/Card";
import HistorySection from "@/components/HistorySection";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <header className="flex flex-row justify-between bg-hss-scout-darkblue text-white">
          <p>Scout Logo placement</p>
          <nav className="flex flex-row gap-2">
            <a href="https://www.scouterna.se/">Scouterna</a>
            <a href="https://www.scouternasfolkhogskola.se/">
              Scouterna Folkhögskola
            </a>
            <a href="https://www.scoutnet.se/">Scoutnet</a>
            <a href="http://scoutshop.se/">Scoutshop</a>
          </nav>
        </header>
        <header className="flex flex-row justify-between bg-hss-mediumblue text-white">
          <p>HSS Logo placement</p>
          <nav className="flex flex-row gap-2">
            <a href="/bli-scout">Bli Scout</a>
            <a href="/avdelningar">Avdelningar</a>
            <a href="/om-hss">Om HSS</a>
            <a href="/medlemmar">För medlemmar/Praktisk info</a>
            <a href="/kontakt">Kontakt</a>
            <p>Button</p>
          </nav>
        </header>
      </div>
      <main className="grow">
        <div>
          
         <HeroSection/>
        </div>
        <div>
          <HistorySection/>
        </div>

        <div className="bg-hss-yellow p-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-6 text-gray-950">
              Våra avdelningar
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
              <Card
                title="Spårarna"
                description="This is the first department section using our custom reusable card."
              />
              <Card
                title="Upptäckarna"
                description="This is the second department section using our custom reusable card."
              />
              <Card
                title="Äventyrarna"
                description="This is the third department section using our custom reusable card."
              />
            </div>
          </div>
        </div>

        <div className="bg-hss-mediumblue text-white">Trygghet/Säkerhet</div>

        <div className="flex gap-4">
          <Button variant="yellow">Bli Scout</Button>
          <Button variant="blue">Bli Ledare</Button>
          <Button variant="outline">Läs mer</Button>
        </div>
      </main>

      <footer className="flex flex-row justify-evenly border-hss-mediumblue border-2">
        <section>Kontakt section</section>
        <section>Äventyr och kompisar</section>
        <section>Soc med</section>
      </footer>
    </div>
  );
}
