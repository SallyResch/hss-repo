import Link from 'next/link';
import Button from '@/components/Button';
import { useTranslations } from 'next-intl';

interface BottomTextProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function BottomText({
    title,
    subtitle,
    buttonText,
    buttonHref = "https://www.scoutnet.se/register/in/group/764"
}: BottomTextProps) {
    const t = useTranslations("varaBatarPage");
    const tBtn = useTranslations("homePage")
    return (
        <section className="w-full px-6 py-12 md:px-20 md:py-16">

            <div className="w-full max-w-[1000px] mx-auto bg-hss-mediumblue py-6 px-6 flex flex-col items-center justify-center justify-center text-center mt-16 mb-16 rounded-xl">
                <h2 className="text-hss-yellow text-xl md:text-3xl font-medium mb-2">
                    {title = `${t("sailWithUsTitle")}`}
                </h2>
                <p className="text-white text-base md:text-lg mb-6">
                    {subtitle = `${t("sailWithUsText")}`}
                </p>

                <Link
                    href={buttonHref}
                    target="_blank"
                    className="focus:outline-none"
                >
                    <Button>
                        {buttonText = `${tBtn("btnBecomeScout")}`}
                    </Button>
                </Link>
            </div>
        </section>
    )
}


