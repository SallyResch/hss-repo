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
      className="bg-transparent text-gray-900 font-semibold cursor-pointer outline-none"
    >

      <option value="sv">Svenska</option>
      <option value="en">English</option>
    </select>
  );
}