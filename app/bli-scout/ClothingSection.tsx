const ClothingSection = () => {
  return (
    <section className="w-full bg-white px-6 py-12 md:px-20 md:py-16">
      <div className="mx-auto max-w-5xl">     
        <h2 className="mb-8 text-3xl font-semibold text-hss-mediumblue md:text-5xl">
          Kläder och utrustning
        </h2>
        <div className="space-y-8">
         
          <p className="text-lg leading-relaxed text-black md:text-2xl">
            <span className="font-bold">Scoutskjorta:</span> Alla scouter har en
            scoutskjorta som köps via Scoutshop. Skjortan används vid officiella
            tillfällen och har våra märken och insignier.
          </p>

          <p className="text-lg leading-relaxed text-black md:text-2xl">
            <span className="font-bold">Flytväst:</span> Eftersom vi är sjöscouter
            är flytväst obligatoriskt vid alla vattenaktiviteter. Kåren
            tillhandahåller flytvästar, men du är välkommen att ha en egen.
          </p>

          <p className="text-lg leading-relaxed text-black md:text-2xl">
            <span className="font-bold">Övrig utrustning:</span> För hajker och
            läger finns det packlistor som skickas ut i förväg. Grundläggande
            utomhuskläder och sovsäck är bra att ha.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;