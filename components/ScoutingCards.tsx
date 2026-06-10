import React from "react";
import Image from "next/image";
import scoutingDeatils from "@/types/scoutingDetails";

const ScoutingCards = ({
  imageUrl,
  title,
  description,
  color,
}: scoutingDeatils) => {
  const cardColor = color === "yellow" ? "bg-hss-yellow" : "bg-hss-mediumblue";
  const textColor = color === "yellow" ? "text-hss-blue" : "text-white";

  return (
    <section
      className={`${cardColor} ${textColor} flex p-5 md:p-8 gap-4 md:gap-6 h-auto w-full rounded-[20px] items-center`}
    >
      <div className="relative w-[90px] h-[90px] md:w-[124px] md:h-[124px] flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-full object-cover aspect-square"
          priority
          sizes="(max-width: 768px) 90px, 124px"
        />
      </div>

      <div className="flex flex-col gap-1 md:gap-2 flex-1 min-w-0">
        <p className="font-montserrat font-semibold text-[20px] md:text-[24px] leading-tight break-words">
          {title}
        </p>

        <p className="font-montserrat font-medium text-[16px] md:text-[24px] lg:text-[20px] leading-normal opacity-90">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ScoutingCards;
