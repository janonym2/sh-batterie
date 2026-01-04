// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sh-batterie.de",
      lastModified: new Date(),
    },
    {
      url: "https://sh-batterie.de/about-us",
      lastModified: new Date(),
    },
    {
      url: "https://sh-batterie.de/anfrage",
      lastModified: new Date(),
    },
    {
      url: "https://sh-batterie.de/datenschutz",
      lastModified: new Date(),
    },
    {
      url: "https://sh-batterie.de/impressum",
      lastModified: new Date(),
    },
    {
      url: "https://sh-batterie.de/kontakt",
      lastModified: new Date(),
    },
    {
      url: "https://sh-batterie.de/leistungen",
      lastModified: new Date(),
    },
    {
      url: "https://sh-batterie.de/leistungen/hv-batterie-entsorgung",
      lastModified: new Date(),
    },
    {
      url: "https://sh-batterie.de/leistungen/hv-batterie-transport",
      lastModified: new Date(),
    },
    {
      url: "https://sh-batterie.de/leistungen/transportbox-mieten",
      lastModified: new Date(),
    },
  ];
}
