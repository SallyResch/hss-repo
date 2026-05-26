import HeroSection from "@/components/HeroSection";
import { Card } from "../components/Card";
import HistorySection from "@/components/HistorySection";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen box-border">
      <main className="grow">
        <div>

          <HeroSection />
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
          <Button variant="outline">Bli Ledare</Button>
           <Button variant="blue">Anmäl intresse</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
