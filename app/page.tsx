
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <header className="flex flex-row justify-between bg-hss-scout-darkblue text-white">
          <p>Scout Logo placement</p>
          <nav className="flex flex-row gap-2">
            <a href="https://www.scouterna.se/">Scouterna</a>
            <a href="https://www.scouternasfolkhogskola.se/">Scouterna Folkhögskola</a>
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
