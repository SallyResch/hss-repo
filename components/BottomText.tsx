import Link from 'next/link';
import Button from '@/components/Button';

interface BottomTextProps {
    title?:string;
    subtitle?:string;
    buttonText?:string;
    buttonHref?:string;
}


export default function BottomText({
    title = "vill du segla med oss?",
    subtitle = "Är du redo att börja ditt scoutäventyr?",
    buttonText = "Bli scout",
    buttonHref = "https://www.scoutnet.se/register/in/group/764"
}: BottomTextProps){
    return(
        <div className="w-full max-w-[1000px] mx-auto bg-hss-mediumblue py-6 px-6 flex flex-col items-center justify-center justify-center text-center mt-16 mb-24 rounded-xl">
            <h2 className="text-hss-yellow text-1xl md:text-3xl font-medium mb-4">
                {title}
            </h2>
            <p className="text-white text-lg md:text-sm mb-8">
                {subtitle}
            </p>           

            <Link
            href={buttonHref}
            target="_blank" 
            className="focus:outline-none"
            >
                <Button>
                    {buttonText}
                </Button>               
            </Link>           
        </div>  
    )
}


