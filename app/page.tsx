"use client"

import Headline from "@/components/Headline";
import Button from "@/components/Button";
import BulletPoints from "@/components/BulletPoints";
import CallToAction from "@/components/CallToAction";
import { useRouter } from "next/navigation";
import { content } from "@/lib/content";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Headline content={`Startseite`} imageSrc="/pic03.webp" />
      <section className="px-[5%] md:px-15 py-10 space-y-10 bg-[var(--lightgray)]">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4">Sichere Entsorgung & Transport von Elektroauto-Batterien</h1>
        <p className="text-lg">Wir übernehmen den sicheren Transport und die fachgerechte Entsorgung von Lithium-Ionen-Batterien – nach allen ADR-Vorschriften. Schnell, zuverlässig und professionell.</p>
        <Button
          content="Jetzt Angebot anfragen"
          onClick={() => router.push('/anfrage')}
        />
      </section>

      <div className="md:grid md:grid-cols-2">
        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent)] text-[var(--lightgray)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere Leistungen
          </h2>
          <BulletPoints
            items={content.leistungen.items.map(item => item.description)}
            miniText={content.leistungen.miniText}
          />
        </section>

        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-2)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Warum wir?
          </h2>
          <BulletPoints items={content.warumWir}/>
        </section>
      </div>

      <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-3)] text-[var(--lightgray)]">
        <CallToAction
          title={`Bereit, Ihre Batterien sicher abzuholenen zu lassen? Kontaktieren Sie uns direkt!`}
          phone="0177 2247053"
          email="sh-mobile@web.de"
        />
      </section>
    </div>
  );
}
