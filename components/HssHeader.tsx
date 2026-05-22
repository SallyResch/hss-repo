import HssNav from "@/components/HssNav";
export default function HssHeader() {
    return (
        <header className="flex flex-row justify-between items-center bg-hss-mediumblue text-white rounded-b-3xl">
            <div className="flex flex-row items-center ml-7">
                <a href="/" className="p-0"><img src="/LoggaHSSfärgmörkbakgrund.png" alt="Hss logga för mörk bakgrund" className="w-16 md:w-19" /></a>

                <img src="/HasselbyStrands-sjoscoutkar-vit.png" alt="HSS logga text till mörk bakgrund" className="w-full h-9 m-5" />
            </div>
            <HssNav />
        </header>
    )
}