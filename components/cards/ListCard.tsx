export default function ListCard({
    icon,
    title,
    description,
}:{
    icon:React.ReactNode;
    title:string;
    description:string;
}) {
    return(
        <div className="flex flex-row items-center gap-6 p-6 bg-hss-bggrey rounded-xl w-full hover:bg-hss-lightblue hover:shadow-md transition-all duration-300 cursor-default" >
            <div className="text-hss-mediumblue shrink-0 opacity-80">
                {icon}
            </div>

            <div className="flex flex-col">
                <h3 className="text-lg font-bold text-hss-mediumblue mb-1">    
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {description}
                </p>
            </div>
        </div>
    )
}