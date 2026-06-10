import Image from "next/image";
import BlueWave2 from "@/public/waves/BlueWave2.png"

interface SectionHeaderProps {
  title:string;
  subtitle?:string;
}

export default function SectionHeader({ title, subtitle }:SectionHeaderProps){
    return(
        <div className=" flex flex-col items-start gap-0 mb-8">
            <h2 className="text-3xl font-bold text-hss-mediumblue">           
              {title}
            </h2>
            <Image
            src={BlueWave2}
            alt="wave"
            className="w-[180px] h-auto object-contain"
            />

            {subtitle && (
              <p className="text-gray-600 leading-relaxed mt-1">
                {subtitle}
              </p>
            )}
        </div>
    )
}