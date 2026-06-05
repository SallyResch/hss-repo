export default function SectionHeader({
    title,
    subtitle
}:{
    title:string;
    subtitle:string;
}){
    return(
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-hss-mediumblue">           
              {title}
            </h2>
          <p className="text-gray-600 mt-2">
            {subtitle}
          </p>
        </div>
    )
}