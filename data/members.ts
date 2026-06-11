import { QuickAccessItem } from "@/types/memberTypes";
import { ArrowForwardOutlined, ArticleOutlined, GroupsOutlined} from "@mui/icons-material";
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import discordIcon from "@/public/discord-brands-solid -dark.svg"
import speechbubble from "@/public/comment-dots-regular.svg"

export const getQuickAccessData=(t:any): QuickAccessItem[]=>[
    {
        id:1,
        title:"Discord",
        description: t("accessCardDesc1"),
        topIcon:discordIcon,
        bottomIcon: ArrowForwardOutlined,
    },
    {
        id:2,
        title:"Scoutnet",
        description: t("accessCardDesc2"),
        topIcon: GroupsOutlined,
        bottomIcon:ArrowForwardOutlined,
    },
    {
        id:3,
        title:t("accessCardTitle3"),
        description: t("accessCardDesc3"),
        topIcon: ArticleOutlined,
        bottomIcon:ArrowForwardOutlined,
    }
]

export const getRutinItemData=(t:any): QuickAccessItem[]=>[
    {
        id:1,
        title:t("rutinCardTitle1"),
        description: t("rutinCardDesc1"),
        topIcon:GroupsOutlined
    },
    {
        id:2,
        title:t("rutinCardTitle2"),
        description: t("rutinCardDesc2"),
        topIcon:speechbubble,
    },
    {
        id:3,
        title:t("rutinCardTitle3"),
        description: t("rutinCardDesc3"),
        topIcon: BackpackOutlinedIcon
    },
]