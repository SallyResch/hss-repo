import Link from "next/link";

import Image, { StaticImageData } from "next/image";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";

type ScoutGroupSectionProps = {
  icon: StaticImageData;
  title: string;
  age: string;
  color: string;
  wave: StaticImageData;
  paragraphs: string[];
};

export default function ScoutGroupSection({
  icon,
  title,
  age,
  color,
  wave,
  paragraphs,
}: ScoutGroupSectionProps) {
  const t = useTranslations("homePage")
  return (
    <section className="relative mx-auto max-w-[900px] overflow-hidden px-4 pt-0 pb-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image src={icon} alt={title} width={90} height={90} />

          <h2
            style={{ color }}
            className="font-montserrat text-2xl font-semibold"
          >
            {title}
          </h2>
        </div>
        <span
          style={{ color: "#003660" }}
          className="font-montserrat text-2xl font-semibold"
        >
          {age}
        </span>
        {/* <span className="font-montserrat text-lg font-semibold text-hss-skyblue">
          {age}
        </span>*/}
      </div>
      <div className="mt-4 space-y-4" style={{ color: "#003660" }}>
        {/*<div className="mt-12 space-y-6 text-hss-darkblue"> */}
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-5">
        <Link
          href="https://www.scoutnet.se/register/in/group/764"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="yellow">{t("btnShowInterest")}</Button>
        </Link>
      </div>

      <div className="mt-8">
        <Image src={wave} alt="" className="h-auto w-full" />
      </div>
    </section>
  );
}
