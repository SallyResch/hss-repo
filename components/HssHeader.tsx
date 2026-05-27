import HssNav from "@/components/HssNav";
import YellowWaveLine from "./YellowWaveLine";
export default function HssHeader() {
    return (
        <div>
            <header className="flex flex-row justify-between items-center bg-hss-mediumblue text-white rounded-b-3xl pt-2 pb-2">
                <div className="flex flex-row items-center ml-7">
                    <a href="/" className="p-0"><img src="/LoggaHSSfärgmörkbakgrund.png" alt="Hss logga för mörk bakgrund" className="w-16 md:w-18" /></a>

                    <img src="/HasselbyStrands-sjoscoutkar-vit.png" alt="HSS logga text till mörk bakgrund" className="w-full h-10 ml-5" />
                </div>
                <HssNav />
            </header>
            <YellowWaveLine />
        </div>
    )
}