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
import { useTranslations } from "next-intl";


export default function KontaktPage() {
  const t = useTranslations("kontaktPage")
  return (
    <main className="w-full">
      <HeroSection
        title={t('heroTitle')}
        description={t('heroText')}
        variant="subpage"
        imageUrl={heroimg}
      />

      <div className="max-w-[1000px] mx-auto w-full px-6 py-12 flex flex-col gap-24">
        <section>
          <SectionHeader
            title={t('sectionHeaderTitle1')}
            subtitle={t('sectionSubTitle1')}
          />
          <div className="flex flex-col gap-4 w-full max-w-[1000px]">
            <ListCard
              icon={<FlagOutlinedIcon />}
              title={t('listCardTitle1')}
              description={t('listCardDesc1')}
            />

            <ListCard
              icon={<GroupsOutlinedIcon />}
              title={t('listCardTitle2')}
              description={t('listCardDesc2')}
            />

            <ListCard
              icon={<SailingOutlinedIcon />}
              title={t('listCardTitle3')}
              description={t('listCardDesc3')}
            />

            <ListCard
              icon={<PersonOutlineOutlinedIcon />}
              title={t('listCardTitle4')}
              description={t('listCardDesc4')}
            />

            <ListCard
              icon={<MailOutlineOutlinedIcon />}
              title={t('listCardTitle5')}
              description={t('listCardDesc5')}
            />

          </div>
        </section>

        <section>
          <SectionHeader
            title={t('sectionHeaderTitle2')}
            subtitle={t('sectionSubTitle2')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <ChannelCard
              icon={<MailOutlineOutlinedIcon fontSize="large" />}
              title={t("channelCardTitle1")}
              description={
                <>
                  {t("channelCardDesc1")}<br /><br />
                  <span className="font-bold text-hss-mediumblue">info@hss.scout.se</span>
                </>
              }
              linkText={t("channelCardLinkText1")}
              linkHref="mailto:info@hss.scout.se"
            />

            <ChannelCard
              icon={<GroupsOutlinedIcon fontSize="large" />}
              title={t("channelCardTitle2")}
              description={t("channelCardDesc2")}
              linkText={t("channelCardLinkText1")}
              linkHref="/avdelningar"
            />

            <ChannelCard
              icon={<LocationOnOutlinedIcon fontSize="large" />}
              title={t("channelCardTitle3")}
              description={t("channelCardDesc3")}
              linkText={t("channelCardLinkText2")}
              linkHref="https://www.google.com/maps/search/?api=1&query=N%2059%C2%B022%2710%22,%20E%2017%C2%B048%2720%22"
            />
          </div>
        </section>
      </div>
      <BottomText
        title={t("bottomTitle")}
        subtitle={t("bottomSubTitle")}
        buttonText={t("channelCardLinkText1")}
        buttonHref="mailto:info@hss.scout.se"
      />

    </main>


  )
}