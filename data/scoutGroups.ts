import familyIcon from "@/app/assets/family.jpg";
import kidIcon from "@/app/assets/kid.svg";
import kiddIcon from "@/app/assets/kidd.svg";
import teenIcon from "@/app/assets/teen.svg";
import adultIcon from "@/app/assets/adult.svg";

import PurpleWave from "@/public/waves/PurpleWave.png";
import GreenWave from "@/public/waves/GreenWave.png";
import BlueWave from "@/public/waves/BlueWave.png";
import OrangeWave from "@/public/waves/OrangeWave.png";
import PinkWave from "@/public/waves/PinkWave.png";

export const getScoutGroups = (t:any) => [
  {
    icon: kidIcon,
    title: t("trackers.title"),
    age: t("trackers.age"),
    color: "#5AB947",
    wave: GreenWave,
    paragraphs: [
       `${t("trackers.desc1")}`,
       `${t("trackers.desc2")}`,
       `${t("trackers.whatWeDo1")}` , 
       `${t("trackers.whatWeDo2")}`,
       `${t("trackers.meeting")}`,
       `${t("trackers.contact")}`
    ],
  },

  {
    icon: kiddIcon,
    title: t("discoverers.title"),
    age: t("discoverers.age"),
    color: "#00AEEF",
    wave: BlueWave,
    paragraphs: [
    `${t("discoverers.desc1")}`,
    `${t("discoverers.whatWeDo1")}`,
    `${t("discoverers.skills")}`,
    `${t("discoverers.meeting")}`,
    `${t("discoverers.contact")}`
    ],
  },

  {
    icon: teenIcon,
    title: t("adventurers.title"),
    age: t("adventurers.age"),
    color: "#F58220",
    wave: OrangeWave,
    paragraphs: [
    `${t("adventurers.desc1")}`,
    `${t("adventurers.whatWeDo1")}`,
    `${t("adventurers.activities")}`,
    `${t("adventurers.meeting")}`,
    `${t("adventurers.contact")}`
    ],
  },

  {
    icon: adultIcon,
    title: t("challengers.title"),
    age: t("challengers.age"),
    color: "#EC008C",
    wave: PinkWave,
    paragraphs: [
    `${t("challengers.desc1")}`,
    `${t("challengers.whatWeDo1")}`,
    `${t("challengers.whatWeDo2")}`,
    `${t("challengers.meeting")}`,
    `${t("challengers.contact")}`
    ],
  },
    {
    icon: familyIcon,
    title: t("family.title"),
    age: t("family.age"),
    color: "#8E44AD",
    wave: PurpleWave,
    paragraphs: [
      `${t("family.desc1")}`,
      `${t("family.desc2")}`,
    ],
  },
];