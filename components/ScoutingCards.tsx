import React from 'react'
import Image from 'next/image'
import scoutingDeatils from '@/types/scoutingDetails'
const ScoutingCards = ({imageUrl,title,description,color} : scoutingDeatils) => {

  const cardColor = color === "yellow" ? "bg-hss-yellow" : "bg-hss-blue"
  const textColor = color === "yellow" ? "text-hss-blue" : "text-white";
  return (
    <div>
      <section className = "${cardColor} ${textColor} grid grid-cols-2 w-350px h-209px mt-171px left-20px rounded-br-bl-[20px]"
      >
        <Image
         src = {imageUrl}
         alt="Top wave"
         width={125}
         height={124}
         className=" mt-37px "
         priority
        />
        <div className = "grid grid-rows-2 pt-40px pr-20px gap-8px">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </section>
    </div>
  )
}

export default ScoutingCards