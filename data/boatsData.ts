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
        title: t("earlierCardTitle1"), 
        age: t("earlierCardYear1"), 
        description: t("earlierCardDesc1")
    },
    { 
        id: 2, 
        title: t("earlierCardTitle2"), 
        age: t("earlierCardYear2"), 
        description: t("earlierCardDesc2")
    },
    { 
        id: 3, 
        title: t("earlierCardTitle3"), 
        age: t("earlierCardYear3"), 
        description: t("earlierCardDesc3")
    },
    { 
        id: 4, 
        title: t("earlierCardTitle4"), 
         age: t("earlierCardYear4"), 
        description: t("earlierCardDesc4")
    },
];