import { StaticImageData } from "next/image";
export default interface HeroSectionProps {
    title: string;
    description: string;
    imageUrl?: string | StaticImageData;
    mobileImgUrl?:string | StaticImageData;
  }