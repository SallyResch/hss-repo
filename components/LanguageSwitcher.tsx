'use client';

import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    setIsOpen(false);
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 bg-transparent text-hss-lightblue font-semibold cursor-pointer outline-none hover:text-hss-yellow] transition-colors py-2"
        onClick={toggleMenu}
      >
        <LanguageIcon fontSize="small" />
        <span className="hidden sm:inline">Languages</span>
        <ArrowDropDownIcon className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* menu */}
      {isOpen && (
        <div className="absolute right-0 top-full w-32 bg-hss-yellow text-hss-scout-darkblue rounded-md shadow-lg overflow-hidden z-50">
          <button
            onClick={() => handleLocaleChange('sv')}
            className={`block w-full text-left px-4 py-3 transition-all duration-300 hover:[text-shadow:0_0_0.6px_currentColor] ${locale === 'sv' ? '[text-shadow:0_0_0.6px_currentColor]' : ''}`}
          >
            Svenska
          </button>
          <button
            onClick={() => handleLocaleChange('en')}
            className={`block w-full text-left px-4 py-3 transition-all duration-300 hover:[text-shadow:0_0_0.6px_currentColor] ${locale === 'en' ? '[text-shadow:0_0_0.6px_currentColor]' : ''}`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}