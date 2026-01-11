import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { inter } from './fonts';
import { phone, email } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HV Batterie Transport Essen & NRW | SH-Mobile GmbH",
  description:
    "Zertifizierter Transport von Hochvolt-Autobatterien in Essen & NRW. Vermietung von Transportboxen für HV Batterien. Schnell & sicher.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SH Mobile GmbH",
              url: "https://sh-batterie.de",
              logo: "https://sh-batterie.de/icon.svg",
              image: "https://sh-batterie.de/images/brandname.svg",
              description: "Transport von Hochvolt-Autobatterien & Vermietung von Transportboxen in Essen & NRW",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ruhrau 33",
                addressLocality: "Essen",
                postalCode: "45279",
                addressCountry: "DE"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.4364476,
                longitude: 7.1095283
              },
              telephone: "+49-201-87776699",
              areaServed: "NRW",
              priceRange: "€€",
              openingHours: "Mo-Fr 08:00-18:00",
              sameAs: [
                "http://www.shmobile.de/"
              ],
              serviceType: ["HV Batterie Transport", "Transportbox Vermietung", "HV Batterie Entsorgung"]
            }),
          }}
        />
      </head>
      <body>
        <Navbar phone={phone} email={email} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
