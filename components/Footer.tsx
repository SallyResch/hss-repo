import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-6 border-t border-hss-lightblue">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-hss-darkgrey">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-hss-scout-darkblue">
            Hässelby Strands <br /> Sjöscoutkår
          </h3>
          <p>E-post: info@hss-scout.org</p>
          <Link
            href="/kontakt"
            className="text-hss-scout-darkblue font-semibold hover:underline"
          >
            Kontakta oss
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-hss-scout-darkblue">
            Äventyr och kompisar
          </h3>
          <p className="leading-relaxed">
            Tillsammans kan vi göra mer! <br />
            Scouterna ger barn och unga från alla delar av samhället chansen att
            uppleva äventyr tillsammans och växa som individer.
          </p>
          <Link
            href="/bli-scout"
            className="text-hss-scout-darkblue font-bold hover:underline"
          >
            Bli Scout nu
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-hss-scout-darkblue">
            Följ oss i våra flöden
          </h3>
          <p>Ha koll på det senaste</p>

          <div className="flex gap-6 text-lg font-bold text-hss-scout-darkblue mt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-hss-yellow transition-colors"
            >
              IG
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-hss-yellow transition-colors"
            >
              TW
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-hss-yellow transition-colors"
            >
              FB
            </a>
          </div>

          <p className="text-xs text-hss-mediumblue mt-6">
            © Scouterna 2021. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}