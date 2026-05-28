import React from 'react'
import Image from 'next/image'
import scoutingDeatils from '@/types/scoutingDetails'
const ScoutingCards = ({imageUrl,title,description,color} : scoutingDeatils) => {

  const cardColor = color === "yellow" ? "bg-hss-yellow" : "bg-hss-mediumblue"
  const textColor = color === "yellow" ? "text-hss-blue" : "text-white";
  return (
    <div>
      <section className = {`${cardColor} ${textColor} grid grid-cols-2 w-[350px] h-[209px]  p-8 gap-6 w-full max-w-[450px] min-h-[220px] rounded-bl-[20px] rounded-br-[20px]`}
      >
        <Image
         src = {imageUrl}
         alt="Top wave"
         width={150}
         height={124}
         className=" mt-[25px] "
         priority
        />
        <div className="flex flex-col gap-4 md:gap-4 pt-8 ">
        <p className="font-montserrat font-semibold text-[24px] ">
          {title}
        </p>
        <p className="font-montserrat font-medium text-[12px]">
          {description}
        </p>
      </div>
      </section>
    </div>
  )
}

export default ScoutingCards