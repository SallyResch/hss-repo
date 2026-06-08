import Link from 'next/link';
import Button from '@/components/Button';

export default function BottomText(){
    return(
        <div className="w-full max-w-[1000px] mx-auto bg-hss-mediumblue py-6 px-6 flex flex-col items-center justify-center text-center mt-16 mb-24 rounded-xl">
            <h2 className="text-hss-yellow text-1xl md:text-3xl font-medium mb-4">
                vill du segla med oss?
            </h2>
            <p className="text-white text-lg md:text-sm mb-8">
            Är du redo att börja ditt scoutäventyr?
            </p>

            <Link
            href="https://www.scoutnet.se/register/in/group/764" 
            target="_blank" 
            className="focus:outline-none">
                <Button>
                    Bli scout
                </Button>
                
            </Link>           
            </div>      
    )
}