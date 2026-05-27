import { Link } from '@/i18n/navigation';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import { useTranslations } from 'next-intl';

import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import { Card } from "@/components/Card";
import Button from "@/components/Button"
import Footer from "@/components/Footer"

import heroimg from "@/public/hero.jpg";
import heromob from "@/public/heromob.png";
import kidIcon from "../assets/kid.svg"; 
import kiddIcon from "../assets/kidd.svg";
import teenIcon from "../assets/teen.svg";
import adultIcon from "../assets/adult.svg";
import familyIcon from "../assets/family.svg";


export default  function Home ({
  params
}: {
  params: Promise<{ locale: string }>
}){
   const { locale } = use (params);
   setRequestLocale(locale);

   const t = useTranslations('home');
     return (
      <div className="flex flex-col min-h-screen box-border">
        <main className="grow">
          <div>
            <HeroSection 
            title={t('heroTitle')}
            description={t('heroDesc')}
            imageUrl={heroimg}
            mobileImgUrl={heromob}
            showButtons={true}
            variant="home"
            />
          </div>

          <div>
            <HistorySection />
          </div>

          <div className="bg-hss-yellow py-12 px-4">
            <div className="max-w-[95rem] mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-hss-darkgrey text-center">
                {t('departmentsTitle')}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">

                {/* 1\\ */}
                <Card
                title={t('cardFamily.title')}
                imageUrl={familyIcon.src}
                description={t('cardFamily.desc')}
                age=""
                />

                {/* 2\\ */}
                <Card
                  title={t('cardSparare.title')}
                  age={t('cardSparare.age')}
                  imageUrl={kidIcon.src}
                  description={t('cardSparare.desc')}
                />

                {/* 3\\ */}
                <Card
                title={t('cardUpptackare.title')}
                age={t('cardUpptackare.age')}
                imageUrl={kiddIcon.src}
                description={t('cardUpptackare.desc')}
                />

                {/* 4 */}
                <Card 
                title={t('cardAventyrare.title')}
                age={t('cardAventyrare.age')}
                imageUrl={teenIcon.src}
                description={t('cardAventyrare.desc')}
                />

                {/* 5 */}
                <Card
                title={t('cardUtmanare.title')}
                age={t('cardUtmanare.age')}
                imageUrl={adultIcon.src}
                description={t('cardUtmanare.desc')}
                />

              </div>
            </div>
          </div>

          <div className="bg-hss-mediumblue text-hss-white">
            {t('safetyTitle')}
          </div>

          <div className="flex gap-4 p-6">
            <Button variant="yellow">{t('btnBecomeScout')}</Button>
            <Button variant="outline">{t('btnBecomeLeader')}</Button>
            <Button variant="blue">{t('btnShowInterest')}</Button>
          </div>
        </main>

        <Footer />
      </div>
  );
}
