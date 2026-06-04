import React from "react";
import hittacardsprops from "../types/hittacardsprops";
import { Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import googleMapIcon from "../public/mapicon.jpg"
const HittaCards = ({
  cardTitle,
  address,
  addressDeatils,
  coordinater,
  coordinaterDetails,
  parkering,
  parkeringDetails,
}: hittacardsprops) => {
  return (
   
<section className="flex flex-col gap-[16px] p-[24px] rounded-[12px] w-full h-full bg-[#F8F9FA]">
      <p className ="font-semibold text-2xl text-hss-mediumblue ">{cardTitle}</p>
      <div>
        <p className="font-semibold text-base text-hss-mediumblue mb-0">
          {address}
        </p>
        <p className="font-normal text-base text-hss-mediumblue mt-0">
          {addressDeatils}
        </p>
      </div>
      <div>
        <p className="font-semibold text-base text-hss-mediumblue mb-0">
          {coordinater}
        </p>
        <p className="font-normal text-base text-hss-mediumblue mt-0">
          {coordinaterDetails}
        </p>
      </div>
      <div>
        <p className="font-semibold text-base text-hss-mediumblue mb-0">
          {parkering}
        </p>
        <p className="font-normal text-base text-hss-mediumblue mt-0">
          {parkeringDetails}
        </p>
      </div>
      <div>
        <Button
          variant="outlined"         
          startIcon={<img src="/mapicon.jpg" width="30" />}
          endIcon={<LaunchIcon />}
          href={`https://www.google.com/maps/search/?api=1&query=${coordinaterDetails}`}
          target="_blank"
          sx={{
            mt: 2,
            width: "fit-content",
            borderRadius: "12px",
            borderColor: "#FFC832", 
            color: "#003057", 
            borderWidth: "2px",
            fontWeight: "bold",
            textTransform: "none", 
            "&:hover": {
              borderWidth: "2px",
              borderColor: "#FFC832",
                backgroundColor: "rgba(255, 200, 50, 0.1)",
              color : "#FFC832"
            },
          }}
        >
          Öppna i Google Maps
        </Button>
      </div>
    </section>
  );
};

export default HittaCards;
