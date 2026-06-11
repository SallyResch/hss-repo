import Image from "next/image";
import Link from "next/link";

import image1 from "@/public/gallery1.jpg";
import image2 from "@/public/gallery2.jpg";
import image3 from "@/public/gallery3.jpg";
import image4 from "@/public/gallery4.jpg";
import { useTranslations } from "next-intl";

const images = [image1, image2, image3, image4];

export default function GallerySection() {
  const t = useTranslations("varaPlatserPage");
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 ">
          <h2 className="flex items-center gap-3 font-semibold text-hss-mediumblue text-[32px]">
            {t("pictureTitle")}
          </h2>

          <Link
            href="https://www.instagram.com/hss_scout/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-[#003B71] hover:underline"
          >
            {t("pictureLinkText")}
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-col gap-6 md:grid-cols-4 pb-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-[20px]">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="h-[280px] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
