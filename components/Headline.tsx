// Headline.tsx
"use client";

import Banner from "@/components/Banner";
import Image from "next/image";

type Props = {
  content?: string;
  imageSrc?: string;
};

export default function Headline({ content, imageSrc = '/pic01.webp' }: Props) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="relative w-full aspect-[4000/2304] overflow-hidden md:aspect-[4000/1400]">
          <Image
            src={imageSrc}
            alt="transport vehicle"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="md:absolute md:bottom-0 md:left-0 md:w-full">
          <Banner content={content ?? "Banner Text"} />
        </div>
      </div>
    </div>
  );
}
