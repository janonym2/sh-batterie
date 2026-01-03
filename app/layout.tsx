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
  title: "SH-Batterie",
  description: "Lithium-Ionen Batterie Transport & Entsorgung",
  icons: {
    icon: "/favicon.ico",
    other: [
      { url: "/logo.svg", sizes: "385x385", type: "image/svg" },
    ]
  }
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
      </head>
      <body>
        <Navbar phone={phone} email={email} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


