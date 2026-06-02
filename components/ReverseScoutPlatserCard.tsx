import Image from "next/image";
import mysetImage from "../public/myset.jpg";

const ReverseScoutPlatserCard = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:w-[1000px] lg:min-h-[400px] gap-[24px] mt-2 overflow-hidden rounded-2xl ">
     <div className="flex flex-col justify-between py-6 pr-6 ">
        <div className="flex flex-col ">
          <h2 className="font-semibold text-hss-mediumblue text-[32px] ">
            Myset
          </h2>
          <p className="text-[16px] font-normal mb-4 ">
            Myset ligger vackert vid vattnet och är en fantastisk plats för läger, paddling och avkoppling.
          </p>
        
          <ul className="text-[16px] font-normal space-y-1.5 ">
            <li className="flex items-center gap-2">✔️ Möten, läger och segling </li>
            <li className="flex items-center gap-2">✔️ Brygga och båtar</li>
            <li className="flex items-center gap-2">✔️ Kök och sovutrymmen</li>
            <li className="flex items-center gap-2">✔️ Grillplats</li>
          </ul>
        </div>
      </div>
      <div className="relative w-full h-[250px] lg:h-full order-first lg:order-last">
        <Image
          src={mysetImage}
          alt="mysetImage"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}

export default ReverseScoutPlatserCard