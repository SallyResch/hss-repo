import Image from "next/image"

interface BoatCardProps {
    title:string;
    description:string;
    imageUrl:string
}

const BoatCard = ({title,description,imageUrl}:BoatCardProps) => {
    return(
        <div className="flex flex-col overflow-hidden bg-white 
        border-2 border-transparent rounded-[20px] 
        shadow-[0_4px_4px_-4px_rgba(0,0,0,0.08),0_16px_32px_-4px_rgba(0,0,0,0.1)] 
        transition-all duration-300 
        hover:-translate-y-1 hover:border-hss-yellow hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] 
        active:scale-[0.98] cursor-pointer">

            <div className="relative w-full h-48 md:h-56 bg-gray-100">
                <Image 
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                />
            </div>
             <div className="flex flex-col flex-grow p-6">
            <h3 className="mb-3 text-2xl font-bold text-hss-mediumblue">
                {title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
                {description}
            </p>
        </div>
        </div>      
    )
}

export default BoatCard;
