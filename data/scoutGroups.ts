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

export const scoutGroups = [
  {
    icon: familyIcon,
    title: "Familjescouter",
    age: "5-7 år",
    color: "#8E44AD",
    wave: PurpleWave,
    paragraphs: [
      "I Småttarne upptäcker barn och vuxna scouting tillsammans genom lek, naturupplevelser och enklare friluftsäventyr.",
      "Här får familjer prova på scouting i lugn takt med fokus på gemenskap och upptäckarglädje.",
    ],
  },

  {
    icon: kidIcon,
    title: "Spårare",
    age: "8-9 år",
    color: "#5AB947",
    wave: GreenWave,
    paragraphs: [
       "Vid 8 års ålder kan man börja i HSS, dvs när man börjar i årskurs 2.",
       "Man blir då Spårarscout och medlem i avdelningen Sjöhumlorna.",
       "Vad avdelningen gör: Spårarscouting handlar om att lära sig grunderna i scouting genom lek och äventyr." , 
       "Barn får prova på olika aktiviteter både inomhus och utomhus, lära sig om naturen och utveckla samarbetsförmåga.",
       "Mötestider: Vi har möten varje vecka under terminstid. Förutom veckans möten har vi regelbundna hajker (övernattningar) och längre läger under lov.",
       "Ledare/kontakt: Avdelningen leds av utbildade ledare. Kontakta oss via info@hss-scout.org för mer information."
    ],
  },

  {
    icon: kiddIcon,
    title: "Upptäckare",
    age: "10-11 år",
    color: "#00AEEF",
    wave: BlueWave,
    paragraphs: [
    "På Kaparna stegras svårighetsgraden på uppgifterna. Scouterna får lära sig segla optimist samt prova på att segla 2-krona samt kölbåt.",
    "Vad avdelningen gör: Upptäckarscouting introducerar mer avancerade färdigheter. Barnen lär sig segling, navigation, knopar, naturkunskap och samarbete i patrull.",
    "Färdigheter: En färdigutbildad upptäckarscout kan bland annat hantera kniv, elda och släcka mindre bränder, segla optimist själv samt grundläggande sjukvård och sjösäkerhet.",
    "Mötestider: Veckomöten under terminstid samt hajker och läger. Under sommaren seglar vi ofta i skärgården.",
    "Ledare/kontakt: Erfarna ledare med seglarkompetens leder verksamheten. Kontakta info@hss-scout.org."
    ],
  },

  {
    icon: teenIcon,
    title: "Äventyrare",
    age: "12-14 år",
    color: "#F58220",
    wave: OrangeWave,
    paragraphs: [
      "Här börjar seglingen på allvar och det är ut i skärgården om sommaren. När vi inte seglar tränar vi navigation och gör även traditionella landscoutaktiviteter.",
      "Vad avdelningen gör: Äventyrarscouterna fokuserar på mer avancerad segling, navigation och ledarskap. Patrullerna får större ansvar och arbetar självständigt med sina projekt.",
      "Aktiviteter: Sommarsegling i skärgården, navigation, landscoutaktiviteter, vinterhajker i tält och det traditionella isvaksbadet.",
      "Mötestider: Veckomöten och regelbundna hajker. Under sommaren har vi längre seglingsveckor.",
      "Ledare/kontakt: Patrullen arbetar självständigt med stöd från erfarna ledare. Kontakta info@hss-scout.org"
    ],
  },

  {
    icon: adultIcon,
    title: "Utmanare",
    age: "15+ år",
    color: "#EC008C",
    wave: PinkWave,
    paragraphs: [
      "När man kommer upp från äventyrarscouterna bildar man ett lag tillsammans med kullkamraterna. Sedan arbetar man mot att lära sig nya saker och anta svårare utmaningar.",
      "Vad avdelningen gör: Utmanarscouting är den mest avancerade nivån där ungdomarna själva planerar och genomför sina aktiviteter. De arbetar med personlig utveckling och ledarskap.",
      "Ledarskap: Utmanare börjar som ledare på de yngre avdelningarna och utvecklar sina ledaregenskaper. De lär sig planera aktiviteter och ta ansvar för verksamheten.",
      "Mötestider: Flexibla möten efter lagets behov. Fokus ligger på större projekt och ledaransvar.",
      "Kontakt: Lagen arbetar självständigt. För mer information, kontakta info@hss-scout.org"
    ],
  },
];