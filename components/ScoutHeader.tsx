import Link from 'next/link';
import ScoutNav from "@/components/ScoutNav";
import LanguageSwitcher from "./LanguageSwitcher";
export default function ScoutHeader() {
    return (
        <header className="flex flex-row justify-between w-full pr-4 bg-hss-scout-darkblue  text-white">
            <div className="flex items-center gap-4">
                <Link href="https://www.scouterna.se/">
                    <img src="/scouterna-logo.svg" alt="scouternas officiella logga" className="h-12" />
                </Link>
            </div>
            <div className="flex items-center gap-6">
                <LanguageSwitcher />
                <ScoutNav />
            </div>
        </header>
    )
}

