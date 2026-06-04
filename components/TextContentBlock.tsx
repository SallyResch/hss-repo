import React from "react"
interface TextContentBlockProps {
    title:string;
    children:React.ReactNode;
    isCentered?:boolean;
}

export default function TextContentBlok({ 
    title, 
    children,
    isCentered = false
}: TextContentBlockProps){
    return (
        <section className="w-full bg-white px-6 py-12 md:px-20 md:px-16">
            <div className={`mx-auto max-w-4xl ${
            isCentered ? "text-center flex flex-col items-center": "text-left"
            }`}
            >
                <h2 className="mb-6 text-3xl font-semibold text-hss-mediumblue md:text-4xl">
                    {title}
                </h2>
                <div className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg">
                {children}
                </div>
            </div>          
        </section>
    )
}