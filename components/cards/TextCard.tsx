import{ CardProps } from '../card.types';

export default function TextCard({ title, age, description }: CardProps){
    return(
       <div className="bg-hss-lightblue rounded-xl p-6 flex flex-col gap-4 h-full cursor-pointer shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:!bg-[#BAE1FF]">
            <h3 className="text-2xl font-light text-hss-mediumblue">
                {title}
            </h3>
            <p className="text-sm font-medium text-hss-mediumblue">
                {age}
            </p>

            <p className="text-sm text-hss-mediumblue leading-relaxed">
                {description}
            </p>
        </div>
    )
}