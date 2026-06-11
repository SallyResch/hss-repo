import { useTranslations } from 'next-intl';
import TextCard from './TextCard';
import { getBoatDataList } from '@/data/boatsData';

export default function PreviousBoatsSection() {
    const t = useTranslations("varaBatarPage")
    const boatDataList = getBoatDataList(t);

    return (
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
    )
}