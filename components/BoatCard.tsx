import Image from "next/image"


interface BoatCardProps {
    title:string;
    description:string;
    imageUrl:string
}

const BoatCard = ({title,description,imageUrl}:BoatCardProps) => {
    return(
        <div className="flex flex-col overflow-hidden bg-white border border-blue-100 rounded-xl shadow-sm">
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
