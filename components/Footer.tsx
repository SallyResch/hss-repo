import { useTranslations } from 'next-intl'
import Link from "next/link";
import React from "react";

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="bg-white py-16 px-6 border-t border-hss-lightblue">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 text-sm text-hss-darkgrey">
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-bold text-hss-scout-darkblue">
            {t('orgName')}</h3>
          <p>{t('emailLabel')} info@hss-scout.org</p>
          <Link
            href="/kontakt"
            className="text-hss-scout-darkblue font-semibold hover:underline"
          >
            {t('contactUs')}
          </Link>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-bold text-hss-scout-darkblue">
            {t('adventureTitle')}
          </h3>
          <p className="leading-relaxed">
           {t('adventureDesc')}
          </p>
          <Link
            href="/bli-scout"
            className="text-hss-scout-darkblue font-bold hover:underline"
          >
            {t('becomeScoutNow')}
          </Link>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-bold text-hss-scout-darkblue">
            {t('followUsTitle')}
          </h3>
          <p>{t('stayUpdated')}</p>

          <div className="flex gap-6 text-lg font-bold text-hss-scout-darkblue mt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-hss-yellow transition-colors"
            >
              IG
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-hss-yellow transition-colors"
            >
              TW
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-hss-yellow transition-colors"
            >
              FB
            </a>
          </div>

          <p className="text-xs text-hss-mediumblue mt-6">
            © Scouterna 2021. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}