import Image, { StaticImageData } from "next/image";

type FloatingPolaroidProps = {
  src: StaticImageData;
  alt: string;
  rotation: string;
  className?: string;
};

export default function FloatingPolaroid({
  src,
  alt,
  rotation,
  className = "",
}: FloatingPolaroidProps) {
  return (
    <div className={`absolute ${className} hidden min-[1190px]:block`}>
      <div
        className={`flex flex-col items-center ${rotation} transition-all duration-300 hover:scale-105`}
      >
{/*Tape */}
<div className="z-10 mb-[-10px] h-8 w-10 rotate-6 border border-amber-700/20 bg-amber-300/90 shadow-md" />

 {/* Polaroid */}
        <div className="bg-white p-3 pb-12 shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
          <div className="border-2 border-black">
            <Image
              src={src}
              alt={alt}
              width={180}
              height={180}
              className="h-[120px] w-[120px] object-cover lg:h-[170px] lg:w-[170px]"
            />
          </div>

          <p className="mt-3 text-center font-serif text-sm italic text-gray-700">
            Memories
          </p>
        </div>
      </div>
    </div>
  );
}