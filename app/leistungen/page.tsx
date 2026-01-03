"use client"

import Headline from "@/components/Headline";
import CallToAction from "@/components/CallToAction";
import BulletPoints from "@/components/BulletPoints";
import { content } from "@/lib/content";
import AccordionBulletPoints from "@/components/AccordionBulletPoints";

export default function Services() {
  return (
    <div>
      <Headline content={`Unsere Leistungen`} imageSrc="/pic03.webp" />

      <section className="px-[5%] md:px-15 py-10 space-y-10 bg-[var(--lightgray)]">
        <AccordionBulletPoints
          items={content.leistungen.items}
          miniText={content.leistungen.miniText}
        />
      </section>

      
      <div className="md:grid md:grid-cols-2">
        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-2)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Warum wir?
          </h2>
          <BulletPoints items={content.warumWir}/>
        </section>

        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-3)] text-[var(--lightgray)]">
          <CallToAction
            title={`Kontaktieren Sie uns direkt!`}
            phone="0177 2247053"
            email="sh-mobile@web.de"
          />
        </section>
      </div>

    </div>
  );
}
