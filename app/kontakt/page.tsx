import HeroSection from "@/components/HeroSection";
import heroimg from "@/public/contact.jpg";
import ListCard from "@/components/cards/ListCard";
import ChannelCard from "@/components/cards/ChannelCard";
import BottomText from "@/components/BottomText";
import SectionHeader from "@/components/SectionHeader"

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined"
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined"
import MailOutlineOutlined from "@mui/icons-material/MailOutlineOutlined"





export default function KontaktPage(){
  return(
    <main className="w-full">
      <HeroSection 
      title="Kontakt"
      description="Har du frågor om medlemskap eller verksamheten? Här hittar du hur du kontaktar oss."
      variant="subpage"
      imageUrl={heroimg}
      />

      <div className="max-w-[1000px] mx-auto w-full px-6 py-12 flex flex-col gap-12">
        <section>
          <SectionHeader
          title="〰 Roller i kåren"
          subtitle="Här är några av de roller som finns i vår kår och vad de ansvarar för."
           />
    
          <div className="flex flex-col gap-4 w-full max-w-[1000px]">
            <ListCard
            icon={<FlagOutlinedIcon />}
            title="Kårordförande"
            description="Leder styrelsens arbete och har det övergripande ansvaret för kåren."
            />

            <ListCard
            icon={<GroupsOutlinedIcon />}
            title="Kårchef"
            description="Har det övergripande ansvaret för kårens verksamhet och ledare."
            />

            <ListCard
            icon={<SailingOutlinedIcon/>}
            title="jöansvarig"
            description="Ansvarar för sjösäkerhet, båtar och att vi följer våra sjövärdiga rutiner."
            />

            <ListCard
            icon={<PersonOutlineOutlinedIcon/>}
            title="Avdelningsledare"
            description="Leder den dagliga verksamheten i respektive avdelning och stöttar scouter och ledare."
            />

            <ListCard
            icon={<MailOutlineOutlinedIcon />}
            title="Medlemsansvarig"
            description="Hanterar medlemsregister, utskick och frågor om medlemskap."
            />

          </div>
        </section>
        
        <section>
          <SectionHeader
          title="〰 Hur du hör av dig"
          subtitle="et finns flera sätt att komma i kontakt med oss. Välj det som passar dig bäst!"
          />
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <ChannelCard
            icon={<MailOutlineOutlinedIcon fontSize="large" />}
            title="E-post"
            description="Skicka ett mejl till oss så svarar vi så snart vi kan."
            linkText="info@hss.scout.se"
            linkHref="mailto:info@hss.scout.se" 
            />

            <ChannelCard
            icon={<GroupsOutlinedIcon  fontSize="large" />}
            title="Via avdelningen"
            description="Kontakta din avdelningsledare direkt – kontaktuppgifter hittar du på avdelningens sida."
            linkText="Kontakta oss"
            linkHref="/avdelningar"
            />

            <ChannelCard
            icon={<LocationOnOutlinedIcon fontSize="large" />}
            title="Besök oss"
            description="Vi finns vid Hässelby Strands båthamn. Hitta hit via kartan."
            linkText="Hitta hit"
            linkHref="/vara-platser"
            />
          </div>    
        </section>   
      </div>
      <BottomText />

    </main>

    
  )
}