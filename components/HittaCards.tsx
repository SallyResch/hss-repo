import React from 'react'
import hittacardsprops from '../types/hittacardsprops'

const HittaCards = (
  {
    cardTitle,
    address,
    addressDeatils,
    coordinater,
    coordinaterDetails,
    parkering,
    parkeringDetails
  }:hittacardsprops) => {
  return (
    <section className = "flex flex-col gap-[16px] p-[12px] rounded-[12px] w-[482px] h-[269px] bg-[#F8F9FA]">
      <p className ="font-semibold text-2xl text-hss-mediumblue ">{cardTitle}</p>
      <div>
      <p className = "font-semibold text-base text-hss-mediumblue mb-0">{address}</p>
      <p className = "font-normal text-base text-hss-mediumblue mt-0">{addressDeatils}</p>
      </div>
      <div>
      <p className = "font-semibold text-base text-hss-mediumblue mb-0">{coordinater}</p>
      <p className = "font-normal text-base text-hss-mediumblue mt-0">{coordinaterDetails}</p>
      </div>
      <div>
      <p className = "font-semibold text-base text-hss-mediumblue mb-0">{parkering}</p>
      <p className = "font-normal text-base text-hss-mediumblue mt-0">{parkeringDetails}</p>
      </div>
      
    </section>
  )
}

export default HittaCards