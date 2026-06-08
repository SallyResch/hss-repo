import { StaticImageData } from 'next/image';
export default interface scoutingDeatils {
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
  color:"yellow" | "blue" ;
}