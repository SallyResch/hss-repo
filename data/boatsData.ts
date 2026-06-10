export const getCurrentBoats  = (t:any) =>[
    {
        title:t("boatCardTitle1"),
        description:t("boatCardDesc1"),
        imageUrl:"/Optimistjolle.png"
    },
    {
        title:t("boatCardTitle2"),
        description:t("boatCardDesc2"),
        imageUrl:"/2-Krona.png"
    },
    {
        title:t("boatCardTitle3"),
        description:t("boatCardDesc3"),
        imageUrl:"/Kölbåtar.png"
    },
     {
        title:t("boatCardTitle4"),
        description:t("boatCardDesc4"),
        imageUrl:"/Följseglaren.png"
    },
];

export const getBoatDataList = (t:any) => [
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
        title: 'Carioca"', 
        age: 'Albin 79 (1989-Tidigast 2000-tal)"', 
        description: 'En uppskattad ledarbåt som köptes in 1989. Såldes tyvärr efter en olycka på varvet.' 
    },
    { 
        id: 4, 
        title: 'Tryggve', 
        age: 'Buster R (Såld 1993)', 
        description: 'En popnitad följebåt med mycket karaktär. Den läckte tyvärr en hel del mot slutet.' 
    },
];