import { useTranslations } from 'next-intl';
import TextCard from './TextCard';
import { getBoatDataList } from '@/data/boatsData';

export default function PreviousBoatsSection() {
    const t = useTranslations("varaBatarPage")
    const boatDataList = getBoatDataList(t);

    return (
        <section className="w-full max-w-[1000px] mx-auto px-6 py-12">
            <div className="flex items-center gap-3 mb-8 text-hss-mediumblue">
                <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6C4 2 6 2 8 6C10 10 12 10 14 6C16 2 18 2 20 6C22 10 24 10 26 6C28 2 30 2 32 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className="text-3xl font-bold">Tidigare båtar</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {boatDataList.map((boat) => (
                    <TextCard
                        key={boat.id}
                        title={boat.title}
                        age={boat.age}
                        description={boat.description}
                    />
                ))}
            </div>

        </section>
    )
}