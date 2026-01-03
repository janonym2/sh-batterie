"use client"

import Headline from "@/components/Headline";
import Button from "@/components/Button";
import BulletPoints from "@/components/BulletPoints";
import CallToAction from "@/components/CallToAction";
import { useRouter } from "next/navigation";

export default function Home() {
  const leistungen = [
    "Transport nach ADR: Vollständig zertifiziert und sicher",
    "Entsorgung & Recycling: Umweltgerecht, nach aktuellen Standards",
    "Schnelle Abholung: Flexibel an Ihrem Standort",
    "Transparente Prozesse: Jeder Schritt dokumentiert"
  ];

  const warumWir = [    
    'Erfahrung & Sicherheit: Geschultes Personal, modernste Ausrüstung',
    'Zuverlässigkeit: Termine, die eingehalten werden',
    'Nachhaltigkeit: Wir unterstützen den verantwortungsvollen Umgang mit Batterien',
    'Transparenz: Klare Dokumentation für jede Abholung'
  ];

  const miniText = "Wir kümmern uns darum, dass alte Batterien nicht zur Gefahr werden – für Sie und die Umwelt.";

  const router = useRouter();

  return (
    <div>
      <Headline content={`Startseite`} imageSrc="/pic03.webp" />
      <section className="px-[5%] md:px-15 py-10 space-y-10 bg-[var(--lightgray)]">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4">Sichere Entsorgung & Transport von Elektroauto-Batterien</h1>
        <p className="text-lg">Wir übernehmen den sicheren Transport und die fachgerechte Entsorgung von Lithium-Ionen-Batterien – nach allen ADR-Vorschriften. Schnell, zuverlässig und professionell.</p>
        <Button content="Jetzt Angebot anfragen" onClick={() => router.push('/anfrage')} />
      </section>

      <div className="md:grid md:grid-cols-2">
        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent)] text-[var(--lightgray)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere Leistungen
          </h2>
          <BulletPoints items={leistungen} miniText={miniText} />
        </section>

        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-2)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Warum wir?
          </h2>
          <BulletPoints items={warumWir}/>
        </section>
      </div>

      <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-3)] text-[var(--lightgray)]">
        <CallToAction
          title={`Bereit, Ihre Batterien sicher abzuholen? Kontaktieren Sie uns direkt!`}
          phone="0177 2247053"
          email="sh-mobile@web.de"
        />
      </section>
    </div>
  );
}
