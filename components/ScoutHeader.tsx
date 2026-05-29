import ScoutNav from "@/components/ScoutNav";
export default function ScoutHeader() {
    return (
        <header className="flex flex-row justify-between w-full pr-4 bg-hss-scout-darkblue  text-white">
            <a href="https://www.scouterna.se/">
                <img src="/scouterna-logo.svg" alt="scouternas officiella logga" className="h-12" />
            </a>
            <ScoutNav />
        </header>
    )
}