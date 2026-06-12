
import LanguageSwitcher from "./LanguageSwitcher";
export default function ScoutHeader() {
    return (
        <header className="flex flex-row justify-between w-full pr-4 bg-hss-scout-darkblue  text-white">
            <a target="_blank" rel="noopener noreferrer" href="https://www.scouterna.se/">
                <img src="/scouterna-logo.svg" alt="scouternas officiella logga" className="h-12" />
            </a>
            <div className="flex items-center gap-6">
                <LanguageSwitcher />
            </div>
        </header>
    )
}