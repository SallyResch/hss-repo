import React from "react";
import Image from "next/image";
import scoutPlatserCardsProps from "../types/scoutPlatserCardProps"
import { useTranslations } from "next-intl";

const ScoutPlatserCard = ({ imageUrl, title, description, isReverse, features = [] }: scoutPlatserCardsProps) => {
  if (!imageUrl) {
    return null;
  }
  const t = useTranslations("varaPlatserPage")

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:w-[1000px] lg:min-h-[400px] gap-[24px] mt-2 overflow-hidden rounded-2xl mb-6">
      <div className={`relative w-full h-[250px] lg:h-full ${isReverse ? "lg:order-last" : "lg:order-first"}`}>
        <Image
          src={imageUrl}
          alt="RuffenImage"
          fill
          className="object-cover "
        />
      </div>

      <div className="flex flex-col justify-between py-6 pr-6 ">
        <div className="flex flex-col ">
          <h2 className="font-semibold text-hss-mediumblue text-[32px] ">
            {title}
          </h2>
          <p className="text-[16px] font-normal mb-4 ">
            {description}
          </p>

          <ul className="text-[16px] font-normal space-y-1.5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                ✔️ {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScoutPlatserCard;
