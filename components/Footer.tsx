import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTranslations } from "next-intl";
import { scoutNavItems } from "@/types/navigation"

export default function Footer() {
  const t = useTranslations("footer")
  return (
    <footer className="bg-white py-16 px-6 border-t border-hss-lightblue">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 text-sm text-hss-darkgrey">
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-bold text-hss-scout-darkblue">
            {t("orgName1")} <br /> {t("orgName2")}
          </h3>
          <p>{t("emailLabel")} info@hss-scout.org</p>
          <Link
            href="/kontakt"
            className="text-hss-scout-darkblue font-semibold hover:underline"
          >
            {t("contactUs")}
          </Link>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-bold text-hss-scout-darkblue">
            {t("adventureTitle")}
          </h3>
          <p className="leading-relaxed">
            {t("adventureDesc1")} <br />
            {t("adventureDesc2")}
          </p>
          <Link
            href="/bli-scout"
            className="text-hss-scout-darkblue font-bold hover:underline"
          >
            {t("becomeScoutNow")}
          </Link>
        </div>


        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-bold text-hss-scout-darkblue">
            Scouterna
          </h3>
          <div className="flex flex-col gap-2 mt-1">
            {scoutNavItems.map((item) => (
              <a
              key={item.label}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-hss-scout-darkblue"
              >
              {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-bold text-hss-scout-darkblue">
            {t("followUsTitle")}
          </h3>
          <p>{t("stayUpdated")}</p>

          <div className="flex flex-row gap-6 text-hss-scout-darkblue mt-2">
            <a
              href="https://www.instagram.com/hasselbystrandssjoscoutkar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-hss-yellow transition-colors"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="https://www.facebook.com/hasselbystrandssjoscoutkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-hss-yellow transition-colors"
            >
              <FacebookIcon fontSize="large" />
            </a>
          </div>
          <p className="text-xs text-hss-mediumblue mt-6">
            © Scouterna 2026. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
