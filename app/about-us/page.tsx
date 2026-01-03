import Headline from "@/components/Headline";

export default function Services() {
  return (
    <div>
      <Headline content={`Über Uns`} imageSrc="/pic08.webp" />


      <div className="md:grid md:grid-cols-2">
        <section className="px-[5%] md:px-15 py-10 space-y-10 bg-[var(--lightgray)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--accent)]">
            Die SH-Mobile GmbH
          </h2>
          <div>
            Die SH-Mobile GmbH steht seit über 25 Jahren für Kompetenz, Verlässlichkeit und Leidenschaft in der Automobilwelt.
            <br /><br />Was als klassischer Unfall- und Gebrauchtwagenhandel begann, hat sich über die Jahre zu einem vielseitigen Unternehmen mit tiefem Verständnis für Fahrzeuge, Logistik und Prozesse entwickelt. Unsere Erfahrung basiert nicht nur auf Zahlen, sondern auf täglicher Praxis, Verantwortung und persönlichem Einsatz.          
          </div>
        </section>

        <section>
          <img
            src="/pic04.webp"
            alt="SH-Mobile GmbH"
            className="w-full h-auto object-cover"
          />
        </section>
      </div>
      
      <div className="md:grid md:grid-cols-2">
        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent)] text-[var(--lightgray)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere Wurzeln: Erfahrung aus dem Fahrzeughandel
          </h2>
          <div>
            Im Unfall- und Gebrauchtwagenhandel haben wir gelernt, worauf es ankommt: Sorgfalt, Organisation und ein sicherer Umgang mit komplexen Anforderungen. Der Transport, die Lagerung und der fachgerechte Umgang mit Fahrzeugen und Fahrzeugkomponenten gehören seit jeher zu unserem Alltag. Diese gewachsene Expertise bildet das Fundament unseres heutigen Handelns.
          </div>
        </section>

        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-2)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wandel als Chance
          </h2>
          <div>
            Die Automobilbranche befindet sich im Umbruch – und wir gehen diesen Weg aktiv mit. Mit dem Aufkommen der Elektromobilität entstehen neue Herausforderungen, aber auch neue Möglichkeiten. SH-Mobile hat sich frühzeitig an die veränderten Rahmenbedingungen angepasst und bestehende logistische Strukturen gezielt weiterentwickelt.
          </div>
        </section>
      </div>

      <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-3)] text-[var(--lightgray)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unsere Zukunft: Batterietransport & Recycling
        </h2>
        <div>
          Heute spezialisieren wir uns auf den Transport von Lithium-Ionen-Batterien aus Elektrofahrzeugen – ein Bereich, dessen Bedeutung stetig wächst. Sicherheit, gesetzliche Vorgaben und Fachwissen stehen dabei an erster Stelle. Unsere geschulten Mitarbeiter sind mit dem sachgemäßen Umgang vertraut und arbeiten nach klar definierten Standards, um einen sicheren und zuverlässigen Transport zu gewährleisten.
        </div>
      </section>

      <section>
        <img
          src="/pic05.webp"
          alt="SH-Mobile GmbH"
          className="w-full h-auto object-cover"
        />
      </section>

      <div className="md:grid md:grid-cols-2">
        <section className="px-[5%] md:px-15 py-10 bg-[var(--lightgray)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--accent)]">
            Verantwortung & Nachhaltigkeit
          </h2>
          <div>
            Neben dem Transport spielt auch das Recycling von Hochvoltbatterien eine zentrale Rolle in unserer neuen Sparte. Wir verstehen diese Aufgabe als Verantwortung gegenüber Umwelt und Gesellschaft. Durch strukturierte Prozesse und zuverlässige Partner leisten wir unseren Beitrag zu einer nachhaltigen Kreislaufwirtschaft im Bereich der Elektromobilität.
          </div>
        </section>

        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent)] text-[var(--lightgray)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Persönlich. Verlässlich. Zukunftsorientiert.
          </h2>
          <div>
            Trotz Wachstum und Spezialisierung bleiben unsere Werte unverändert: kurze Wege, persönliche Ansprechpartner und ein partnerschaftlicher Umgang. SH-Mobile GmbH verbindet jahrzehntelange Erfahrung mit einem klaren Blick nach vorn – für sichere Lösungen in einer mobilen Zukunft.
          </div>
        </section>
      </div>
    </div>
  );
}
