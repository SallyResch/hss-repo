import { QuickAccessItem } from "@/types/memberTypes";
import { ArrowForwardOutlined, ArticleOutlined, GroupsOutlined} from "@mui/icons-material";
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import discordIcon from "@/public/discord-brands-solid.svg"
import speechbubble from "@/public/comment-dots-regular.svg"
export const quickAccessData: QuickAccessItem[]=[
    {
        id:1,
        title:"Discord",
        description: "Vi använder Discord för kommunication mellan äldre scouter, ledare och funktionärer.",
        topIcon:discordIcon,
        bottomIcon: ArrowForwardOutlined,
    },
    {
        id:2,
        title:"Scoutnet",
        description: "Scoutnet används för medlemsregister, anmälningar, kontaktuppgifter och utskick.",
        topIcon: GroupsOutlined,
        bottomIcon:ArrowForwardOutlined,
    },
    {
        id:3,
        title:"Dokument",
        description: "Här hittar du viktiga dokument, policys och information on kåren",
        topIcon: ArticleOutlined,
        bottomIcon:ArrowForwardOutlined,
    }
]

export const rutinItemData: QuickAccessItem[]=[
    {
        id:1,
        title:"Närvaro",
        description: "Meddela ledare om du inte kan delta på möten eller aktiviteter.",
        topIcon:GroupsOutlined
    },
    {
        id:2,
        title:"Kommunikation",
        description: "Information skickas främst via Scoutnet och respektive avdelnings kommunikationskanaler.",
        topIcon:speechbubble,
    },
    {
        id:3,
        title:"Hajker och läger",
        description: "Inför aktiviteter skickas alltid särskild information ut om packning, tider och kontaktuppgifter",
        topIcon: BackpackOutlinedIcon
    },
]