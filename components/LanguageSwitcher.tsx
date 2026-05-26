'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh(); 
    }
  };

  return (
    <select 
      value={locale} 
      onChange={switchLocale}
      className="bg-transparent text-hss-white font-semibold cursor-pointer outline-none"
    >

      <option className="text-black" value="sv">Svenska</option>
      <option className="text-black" value="en">English</option>
    </select>
  );
}