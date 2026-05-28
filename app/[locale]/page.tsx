import { Link } from '@/i18n/navigation';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import { useTranslations } from 'next-intl';

import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import InstagramCarousel from "@/components/InstagramCarousel";
import { Card } from "@/components/Card";

import heroimg from "@/public/hero.jpg";
import heromob from "@/public/heromob.png";
import kidIcon from "../assets/kid.svg"; 
import kiddIcon from "../assets/kidd.svg";
import teenIcon from "../assets/teen.svg";
import adultIcon from "../assets/adult.svg";
import familyIcon from "../assets/family.jpg";


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
            <HistorySection/>
          </div>

          <div className="bg-hss-yellow py-12 px-4">

            <div className="bg-hss-yellow py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[95rem] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-hss-darkgrey text-center">
                 {t('departmentsTitle')}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">

                {/* 1\\ */}
                <Card
                  title={t('cardFamily.title')}
                  age="5–7 år"
                  imageUrl={familyIcon.src}
                  description={t('cardFamily.desc')}
                /> 

                {/* 2*/}
                <Card
                  title={t('cardSparare.title')}
                  age={t('cardSparare.age')}
                  imageUrl={kidIcon.src}
                  description={t('cardSparare.desc')}
                />

                {/* 3 */}
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
        </div>

          <div className="bg-hss-mediumblue text-hss-white">{t('safetyTitle')}</div>

          <div className="flex flex-col gap-4 p-6 bg-hss-mediumblue text-hss-white">
          <h2 className="font-bold text-2xl text-center">Senaste händelserna:</h2>
          <InstagramCarousel />
          </div>          
        </main>

      </div>
  );
}
