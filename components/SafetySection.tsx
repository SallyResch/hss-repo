import trygghetImg from "../public/safety.png";

export default function SafetySection() {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[530px] overflow-hidden">
        <img
          src={trygghetImg.src}
          alt="Äventyra i en trygg miljö"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/5" />

        <div className="absolute top-12 left-6 md:left-20 max-w-[420px] bg-white p-10 rounded-[32px] shadow-xl shadow-black/10">
          <h3 className="text-3xl font-bold text-[#0d335d] mb-5 leading-tight tracking-tight">
            Äventyra i en trygg miljö
          </h3>
          <p className="text-[15px] text-gray-700 leading-relaxed font-normal">
            Scouterna ska vara en trygg plats där du kan utforska och utmanas på
            dina villkor. Därför jobbar vi med{" "}
            <span className="font-bold text-[#0d335d]">Trygga Möten</span>.
            Målet är att Scouterna ska vara fritt från kränkningar och övergrepp
            i alla former.
          </p>
        </div>
      </div>

      <div className="relative bg-[#0d335d] text-white pt-20 pb-20 px-6">
        <div className="max-w-[95rem] mx-auto w-full md:px-14">
          <h2 className="text-3xl font-bold mb-12 tracking-wide text-center">
            Trygghet/Säkerhet
          </h2>

          <div className="space-y-6 text-xl font-semibold text-left max-w-xl">
            <div className="transition-transform cursor-pointer hover:translate-x-1">
              <p className="leading-none">Trygga möten utbildning</p>
            </div>
            <div className="transition-transform cursor-pointer hover:translate-x-1">
              <p className="leading-none">Råd och stöd - när något händer</p>
            </div>
            <div className="transition-transform cursor-pointer hover:translate-x-1">
              <p className="leading-none">Trygg verksamhet - förebyggande</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
