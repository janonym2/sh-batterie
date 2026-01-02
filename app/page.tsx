"use client"

import Headline from "@/components/Headline";
import Button from "@/components/Button";
import BulletPoints from "@/components/BulletPoints";

export default function Home() {
  const bulletItems = [
    "Transport nach ADR: Vollständig zertifiziert und sicher",
    "Entsorgung & Recycling: Umweltgerecht, nach aktuellen Standards",
    "Schnelle Abholung: Flexibel an Ihrem Standort",
    "Transparente Prozesse: Jeder Schritt dokumentiert",
  ];

  const miniText = "Wir kümmern uns darum, dass alte Batterien nicht zur Gefahr werden – für Sie und die Umwelt.";

  return (
    <div>
      <Headline content={`Startseite`} />
      <section className="px-[5%] pd:px-15 py-10 space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4">Sichere Entsorgung & Transport von Elektroauto-Batterien</h1>
        <p className="text-lg">Wir übernehmen den sicheren Transport und die fachgerechte Entsorgung von Lithium-Ionen-Batterien – nach allen ADR-Vorschriften. Schnell, zuverlässig und professionell.</p>
        <Button content="Jetzt Angebot anfragen" onClick={() => alert("Hallo!")} />
      </section>
      <section className="px-[5%] pd:px-15 py-10 bg-[var(--accent-2)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unsere Leistungen
        </h2>
        <BulletPoints items={bulletItems} miniText={miniText} />
      </section>
    </div>
  );
}

/* TO IMPLEMENT:

--------------------------

Warum wir?
Element: kurze Absätze oder Bulletpoints für Vertrauen

Erfahrung & Sicherheit: Geschultes Personal, modernste Ausrüstung

Zuverlässigkeit: Termine, die eingehalten werden

Nachhaltigkeit: Wir unterstützen den verantwortungsvollen Umgang mit Batterien

Transparenz: Klare Dokumentation für jede Abholung

--------------------------

Kontakt / Call-to-Action
Element: Kontaktbuttons für Mobile First

Text:
„Bereit, Ihre Batterien sicher abholen zu lassen? Kontaktieren Sie uns direkt!“

Buttons:

„Anrufen“ → Telefon-Link

„Mail senden“ → Mailto-Link

Optional: „Anfrageformular öffnen“ → Popup oder neue Seite

--------------------------

Footer / Kurzinformation
Element: kurzer Footer-Text

Firmenname / Logo

Kurzer Hinweis auf ADR-Zertifizierung

Impressum & Datenschutz-Link

--------------------------

*/