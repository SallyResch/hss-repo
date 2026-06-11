import Link from 'next/link';
import Button from '@/components/Button';
import { useTranslations } from 'next-intl';

interface BottomTextProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonHref?: string;
    showSubtitle?: boolean;
}

export default function BottomText({
    title,
    subtitle,
    buttonText,
    buttonHref = "https://www.scoutnet.se/register/in/group/764",
    showSubtitle = true,
}: BottomTextProps) {
    const t = useTranslations("varaBatarPage");
    const tBtn = useTranslations("homePage")
    return (
        <section className="w-full max-w-[1000px] mx-auto px-6 pb-12 md:pb-16">

            <div className="w-full bg-hss-mediumblue py-12 md:py-16 px-6 md:px-8 flex flex-col items-center justify-center mb-16 rounded-xl">
                <h2 className={`text-hss-yellow text-xl md:text-3xl font-medium ${showSubtitle && subtitle ? 'mb-2' : 'mb-8'} mb-2`}>
                    {title = `${t("sailWithUsTitle")}`}
                </h2>
                {showSubtitle && subtitle && (
                    <p className="text-white text-base md:text-lg mb-6">
                        {subtitle = `${t("sailWithUsText")}`}
                    </p>
                )}

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


