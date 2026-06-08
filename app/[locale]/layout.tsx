import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

import { notFound } from "next/navigation"
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import HssHeader from "@/components/HssHeader";
import ScoutHeader from "@/components/ScoutHeader";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: 'HSS | %s',
    default: 'HSS',
  },
  description: "Hässelby Strands Sjöscoutkår",
  openGraph: {
    title: "Hässelby Strands sjöscoutkår",
    description: "Hässelby Strands Sjöscoutkår (HSS) är en traditionsrik ideell ungdomsverksamhet med fokus på scouting och båtliv. Vi är religiöst och politisk obundna, och medlem i Svenska Scoutförbundet, som med ca 65.000 medlemmar är en av Sveriges största ungdomsorganisationer.",
    url: "https://www.hss-repo.vercel.app",
    siteName: "Hässelby Strands sjöscoutkår",
    locale: 'sv-SE',
    type: "website",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <div className="absolute right-0 left-0 z-50">
            <ScoutHeader />
            <HssHeader />
          </div>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
