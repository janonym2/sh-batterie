"use client"

import Headline from "@/components/Headline";
import Button from "@/components/Button";
import BulletPoints from "@/components/BulletPoints";

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

  return (
    <div>
      <Headline content={`Startseite`} />
      <section className="px-[5%] pd:px-15 py-10 space-y-10 bg-[var(--lightgray)]">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4">Sichere Entsorgung & Transport von Elektroauto-Batterien</h1>
        <p className="text-lg">Wir übernehmen den sicheren Transport und die fachgerechte Entsorgung von Lithium-Ionen-Batterien – nach allen ADR-Vorschriften. Schnell, zuverlässig und professionell.</p>
        <Button content="Jetzt Angebot anfragen" onClick={() => alert("Hallo!")} />
      </section>

      <div className="px-[5%] pd:px-15 py-10 md:grid md:grid-cols-2 md:gap-6">
        <section className="bg-[var(--accent-2)] p-6 md:transition-transform md:hover:scale-105">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere Leistungen
          </h2>
          <BulletPoints items={leistungen} miniText={miniText} />
        </section>

        <section className="bg-[var(--accent)] text-[var(--lightgray)] p-6 md:transition-transform md:hover:scale-105">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Warum wir?
          </h2>
          <BulletPoints items={warumWir}/>
        </section>
      </div>

    </div>
  );
}

/* TO IMPLEMENT:

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