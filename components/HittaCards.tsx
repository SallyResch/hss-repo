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
<<<<<<< HEAD

    <section className="flex flex-col gap-[16px] p-[24px] rounded-[12px] w-full h-full bg-[#F8F9FA]">
=======
    <section className="flex flex-col gap-[16px] p-[12px] rounded-[12px] w-[482px] h-auto bg-[#F8F9FA]">
>>>>>>> feature/HSS-034D-Gallery
      <p className="font-semibold text-2xl text-hss-mediumblue ">{cardTitle}</p>
      <div>
        <p className="font-semibold text-base text-hss-mediumblue mb-0">
          {address}
        </p>
        <p className="font-normal text-base text-hss-mediumblue mt-0">
          {addressDeatils}
        </p>
      </div>
<<<<<<< HEAD


=======
>>>>>>> feature/HSS-034D-Gallery
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
<<<<<<< HEAD
          variant="outlined"
=======
          variant="outlined"         
>>>>>>> feature/HSS-034D-Gallery
          startIcon={<img src="/mapicon.jpg" width="30" />}
          endIcon={<LaunchIcon />}
          href={`https://www.google.com/maps/search/?api=1&query=${coordinaterDetails}`}
          target="_blank"
          sx={{
            mt: 2,
            width: "fit-content",
            borderRadius: "12px",
<<<<<<< HEAD
            borderColor: "#FFC832",
            color: "#003057",
            borderWidth: "2px",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              borderWidth: "2px",
              borderColor: "#FFC832",
              backgroundColor: "rgba(255, 200, 50, 0.1)",
              color: "#FFC832"
=======
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
>>>>>>> feature/HSS-034D-Gallery
            },
          }}
        >
          Öppna i Google Maps
        </Button>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default HittaCards;
=======
export default HittaCards;
>>>>>>> feature/HSS-034D-Gallery
