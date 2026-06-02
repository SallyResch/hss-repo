import React from "react";
import Image from "next/image";
import ruffenImage from "../public/ruffen.png";


const ScoutPlatserCard = () => {
  return (
    <section className="grid grid-cols-2 md:w-[1000px] md:h-[400px] gap-[24px] mt-2 overflow-hidden rounded-2xl mb-2 bg-white border border-gray-100">
      <div className="relative w-full h-full">
        <Image
          src={ruffenImage}
          alt="RuffenImage"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-between py-6 pr-6 ">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-hss-mediumblue text-[32px] ">
            Ruffen
          </h2>
          <p className="text-[16px] font-normal leading-relaxed ">
            Ruffen ligger vid Mälaren och är vår egna stuga. Här har vi brygga,
            båtplats och gott om utrymme för aktiviteter och läger.
          </p>
        </div>

        <div className="my-2">
          <ul className="text-[16px] font-normal space-y-1.5 ">
            <li className="flex items-center gap-2">
              ✔️ Möten, läger och segling
            </li>
            <li className="flex items-center gap-2">✔️ Brygga och båtar</li>
            <li className="flex items-center gap-2">✔️ Kök och sovutrymmen</li>
            <li className="flex items-center gap-2">✔️ Grillplats</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScoutPlatserCard;
