import { StaticImageData } from "next/image";
export default interface scoutPlatserCardsProps {
    imageUrl?: string | StaticImageData;
    title: string;
    description: string;
    isReverse?: boolean;
  }