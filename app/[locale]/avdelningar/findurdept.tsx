import Link from "next/link";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
const FindUrDept = () => {
  const tBtn = useTranslations("homePage");
  return (
    <section className="w-full px-6 py-12 md:px-20 md:py-16">
      <div className="mx-auto max-w-5xl rounded-b-[24px] bg-hss-mediumblue px-8 py-10 text-center md:px-14 md:py-12">
        <h2 className="mb-4 text-4xl font-semibold text-hss-yellow md:text-5xl">
          Hitta din avdelning
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-white md:text-2xl">
          Är du redo att börja ditt scoutäventyr?
        </p>

        <Link
          href="https://www.scoutnet.se/register/in/group/764"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button variant="yellow">{tBtn("btnShowInterest")}</Button>
        </Link>
      </div>
    </section>
  );
};

export default FindUrDept;