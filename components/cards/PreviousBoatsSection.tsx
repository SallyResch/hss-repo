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
        <section className="w-full max-w-[1000px] mx-auto px-6 py-12">
            <div className="flex items-center gap-3 mb-8 text-hss-mediumblue">
                <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C4 2 6 2 8 6C10 10 12 10 14 6C16 2 18 2 20 6C22 10 24 10 26 6C28 2 30 2 32 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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