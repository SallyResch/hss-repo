import TextCard from './TextCard';

const boatDataList = [
    {
    id: 1, 
    title: 'Kreti och Pleti', 
    age: 'Trissjollar (2002-2009)', 
    description: 'Populära trissjollar som fungerade som ett perfekt steg mellan Optimist och kölbåt' 
    },
    { 
        id: 2, 
        title: 'Bagatelle', 
        age: 'Seacat, Marieholm\n(Inköpt ca 1969)', description: 'En vacker röd Seacat som var utmärkt att lära sig segla i. Renoverades av kåren 2001.' },
    { 
        id: 3, 
        title: 'Carioca', 
        age: 'Albin 79 (1989-Tidigast 2000-tal)', 
        description: 'En uppskattad ledarbåt som köptes in 1989. Såldes tyvärr efter en olycka på varvet.' 
    },
    { 
        id: 4, 
        title: 'Tryggve', 
        age: 'Buster R (Såld 1993)', 
        description: 'En popnitad följebåt med mycket karaktär. Den läckte tyvärr en hel del mot slutet.' 
    },
];


export default function PreviousBoatsSection(){
    return(
        <div className="w-full">
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
    </div>
    )
}