
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
