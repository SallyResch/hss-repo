import React from 'react'
import Image from "next/image";
import ruffenImage from '../public/ruffen.png'
import Link from 'next/link';
import Button from "../components/Button";
const ScoutPlatserCard = () => {
  return (
    <section className="grid grid-cols-2  md:w-[1000px] md:h-[400px] overflow-hidden border rounded-2xl mb-2 ">
     <Image
              src={ruffenImage}
              alt="RuffenImage"
              className="object-cover w-[492px] h-[400px]  md:bg-opacity-1 bg-opacity-0"
            />
      <div className=" grid grid-rows-4 w-full h-full gap-y-1.5">
      <p className = "h-[32px] font-semibold text-hss-mediumblue text-[32px]">Ruffen</p>
      <p className = " text-[16px] font-normal ">Ruffen ligger vid Mälaren och är vår egna stuga. Här har vi brygga, båtplats och gott om utrymme för aktiviteter och läger.
      </p>
      <div className="mt-0">
      <ul className = " text-[16px] font-normal ">
        <li>✔️Möten, läger och segling</li>
        <li>✔️Brygga och båtar</li>
        <li>✔️Kök och sovutrymmen</li>
        <li>✔️Grillplats</li>
      </ul>
      </div>
      
      <div className="flex flex-row  justify-start gap-10 pt-pb-[10px] pr-pl-[16px] md:gap-6">
          <Link href="https://www.scoutnet.se/register/in/group/764">
            <Button variant="yellow" className="whitespace-nowrap">Visa på karta</Button>
          </Link>
          <Link href="https://www.scoutnet.se/register/in/group/764">
            <Button variant="outline" className="whitespace-nowrap">Se bilder</Button>
          </Link>
           </div>
      </div>
    </section>
   
  )
}

export default ScoutPlatserCard