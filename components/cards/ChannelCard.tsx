import React from "react";
import ArrowForwardOutlinedIcon  from "@mui/icons-material/ArrowForwardOutlined";


export default function ChannelCard({
    icon,
    title,
    description,
    linkText,
    linkHref,
}: {
    icon:React.ReactNode;
    title:string;
    description:string;
    linkText:string;
    linkHref:string;
}){
    return(
        <div className="flex flex-row gap-5 p-8 bg-hss-bggrey rounded-xl flex-1 hover:bg-hss-lightblue hover:shadow-md transition-all duration-300">
            <div className="text-hss-mediumblue shrink-0 opacity-80 pt-1">
                {icon}
            </div>
            <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold text-hss-mediumblue mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {description}
                </p>
                {linkHref &&(
                    <a href={linkHref}
                    className="text-hss-mediumblue font-semibold flex items-center gap-2 hover:opacity-70 transition-opacity w-fit"
                    >
                        {linkText} <ArrowForwardOutlinedIcon fontSize="small" />
                    </a>
                )}
            </div>
        </div>

    )
}