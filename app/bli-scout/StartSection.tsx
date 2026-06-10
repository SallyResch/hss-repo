import Link from "next/link";

import BlueWaveLine from "@/components/BlueWaveLine";
import Button from "@/components/Button";

const StartSection = () => {
  return (
    <section className="w-full px-6 py-16 md:px-20">
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-14 text-center font-montserrat font-semibold text-[32px] text-hss-mediumblue ">
          Såhär börjar du
        </h3>

        <div className="relative mx-auto mb-14 hidden max-w-5xl md:block">
          <div className="absolute top-1/2 left-[5%] right-[5%] -translate-y-1/2">
            <BlueWaveLine />
          </div>

          <div className="relative z-10 flex items-center justify-between">
            {[1, 2, 3].map((number) => (
              <div
                key={number}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-hss-mediumblue text-4xl font-bold text-hss-yellow"
              >
                {number}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mb-10 flex w-full max-w-sm items-center justify-between md:hidden">
          <div className="absolute left-[12%] right-[12%] top-1/2 -translate-y-1/2">
            <BlueWaveLine />
          </div>

          {[1, 2, 3].map((number) => (
            <div
              key={number}
              className="
              relative
              z-10
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-hss-mediumblue
              text-3xl
              font-bold
              text-hss-yellow
            "
            >
              {number}
            </div>
          ))}
        </div>
        <div className="grid gap-14 md:grid-cols-3 md:items-start">
          <div className="flex h-full flex-col items-start">
            <h3 className="mb-4 text-3xl font-semibold text-hss-mediumblue">
              Anmäl intresse
            </h3>

            <p className="mb-10 text-lg leading-relaxed text-hss-mediumblue">
              Anmäl intresse genom att klicka på länken och fylla i uppgifterna
              på dig eller ditt barn. Detta skickas vidare direkt till vårat
              medlemsregister
            </p>
            <Link
              href="https://www.scoutnet.se/register/in/group/764"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="yellow">Anmäl intresse</Button>
            </Link>
          </div>

          <div className="flex h-full flex-col items-start">
            <h3 className="mb-4 text-3xl font-semibold text-hss-mediumblue">
              Vi kontaktar dig
            </h3>

            <p className="text-lg leading-relaxed text-hss-mediumblue">
              Vi hör av oss inom kort. Fält som är markerade med * är
              obligatoriska
            </p>
          </div>

          <div className="flex h-full flex-col items-start">
            <h3 className="mb-4 text-3xl font-semibold text-hss-mediumblue">
              Prova på scouting
            </h3>

            <p className="mb-10 text-lg leading-relaxed text-hss-mediumblue">
              Om det är väntelista kanske det dyker upp någon prova på dag. Håll
              utkik!
            </p>

            <div className="mt-auto w-full">
              <iframe
                className="aspect-video w-full rounded-lg"
                src="https://www.youtube.com/embed/_mMZJK1iWYY"
                title="Jag är scout"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartSection;
