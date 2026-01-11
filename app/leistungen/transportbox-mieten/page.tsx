import Headline from "@/components/Headline";
import CallToAction from "@/components/CallToAction";
import { content } from "@/lib/content";
import Accordion, { AccordionItem } from "@/components/Accordion";

export const metadata = {
  title: "HV Batterie Transportbox mieten in Essen | SH-Mobile GmbH",
  description:
    "Vermietung von Transportboxen / Lagerboxen für Hochvolt Batterien in Essen und Umgebung. Feuerfest & UN-zertifiziert.",
};

const faqItems: AccordionItem[] = [
  {
    title: "Welches Dokument ist für den Transport erforderlich?",
    content: (
      <>
        In der Regel ein Sicherheitsdatenblatt; je nach Transportart können zusätzliche UN-Zertifikate nötig sein.
      </>
    ),
  },
  {
    title: "Wie müssen Lithium-Eisen-Batterien gekennzeichnet sein?",
    content: <>Als Gefahrgut mit entsprechenden UN-Nummern und Gefahrzetteln.</>,
  },
  {
    title: "Was ist beim Versand allgemein zu beachten?",
    content: (
      <>
        Kurzschlüsse verhindern, Verpackungsanforderungen einhalten, Batterien korrekt kennzeichnen und dokumentieren.
      </>
    ),
  },
];

export default function TransportBoxMieten() {
  return (
    <div>
      <Headline content={`HV-Batterie Transportbox mieten`} imageSrc="/images/pic12.webp" />

      <section className="px-[5%] md:px-15 py-10 bg-[var(--lightgray)]">
        <h2 className="text-3xl md:text-4xl text-[var(--accent)] font-bold mb-4">
            Vermietung von Transportboxen
        </h2>

        <p>
          {content.leistungen.items.find(item => item.title === 'Transportbox mieten')?.description}
        </p>
      </section>
      
      <div className="md:grid md:grid-cols-2">
        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent)] text-[var(--lightgray)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sichere Transportlösungen für Lithiumbatterien
          </h2>
          
          <div>
            Die Logistik von Lithiumbatterien stellt Unternehmen vor besondere Herausforderungen. Herkömmliche Verpackungen bieten oft nicht den erforderlichen Schutz vor mechanischen Einflüssen, Kurzschlüssen oder Temperaturschwankungen. Mit unserem mietbaren Transportbehälter der Marke ThorPak® von wi-sales können Unternehmen Lithium-Ionen- und Lithium-Metall-Batterien zuverlässig und normgerecht versenden.
          </div>
        </section>
          
        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-2)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Warum spezielle Verpackungen wichtig sind
          </h2>
          
          <div>
            Lithiumbatterien gelten als Gefahrgut und unterliegen strengen gesetzlichen Vorschriften für den Transport. Die korrekte Verpackung ist entscheidend, um Risiken zu minimieren und die gesetzlichen Anforderungen einzuhalten. Unser Transportbehälter ist speziell auf die Sicherheit und Stabilität von Lithiumbatterien ausgelegt und eignet sich sowohl für den Luft- als auch den Landtransport.
          </div>
        </section>
      </div>


      <section className="px-[5%] md:px-15 py-10 bg-[var(--lightgray)]">
        <h2 className="text-3xl md:text-4xl text-[var(--accent)] font-bold mb-6">
          Technische Eigenschaften und Vorteile
        </h2>        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm md:text-base font-semibold">Kernpunkt</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm md:text-base font-semibold">Beschreibung</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm md:text-base font-semibold">Nutzen</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">UN-Zertifizierung</td>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">Die Transportbox entspricht den international anerkannten UN-Normen (UN3480, UN3090, LP903, LP904, LP905).</td>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">Gewährleistet die Einhaltung aller relevanten Vorschriften für den sicheren Transport von Lithiumbatterien.</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">Zuverlässiger Schutz</td>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">Die Transportbox bietet optimalen Schutz für Lithiumbatterien aller Standardgrößen.</td>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">Sichert die Batterien zuverlässig während des Transports – robust, stoßfest und einfach zu handhaben.</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">Nachhaltigkeit und Effizienz</td>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">Wiederverwendbare und faltbare Behälter reduzieren Materialverbrauch und Kosten.</td>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">Unterstützt Unternehmen bei der Senkung von Logistikkosten und der Minimierung des ökologischen Fußabdrucks.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      <div className="md:grid md:grid-cols-2">
        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-3)] text-[var(--lightgray)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Richtlinien für den sicheren Versand
          </h2>
          
          <div>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                Kennen Sie Ihre Batterien: Lithium-Ionen (wiederaufladbar, hohe Energiedichte) oder Lithium-Metall (Einweg, langanhaltende Energie)
              </li>

              <li>
                Verpackungsanforderungen: Schutz vor mechanischen Einflüssen, Prävention von Kurzschlüssen, Temperaturregulierung
              </li>

              <li>
                Dokumentation: Sicherheitsdatenblätter, UN-Bescheinigungen, korrekte Kennzeichnung mit UN-Nummern und Gefahrzetteln
              </li>
            </ul>
          </div>
        </section>

        <section className="px-[5%] md:px-15 py-10 bg-[var(--accent)] text-[var(--lightgray)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vor dem Transport: Checkliste
          </h2>
          
          <div>
            <ul className="list-decimal pl-5 space-y-4">
              <li>
                Identifizierung des Batterietyps
              </li>

              <li>
                Auswahl des passenden Behälters
              </li>
              
              <li>
                Überprüfung der Verpackung auf Unversehrtheit
              </li>
              
              <li>
                Sicherstellung der korrekten Kennzeichnung und Dokumentation
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-2)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Häufig gestellte Fragen (FAQ)
        </h2>

        <Accordion items={faqItems} hrColor="black" />

        <p className="pt-4 text-sm text-gray-700">
          Diese Hinweise dienen als allgemeine Orientierung. Für detaillierte Informationen wenden Sie sich bitte an zuständige Behörden oder Fachleute.
        </p>  
      </section>

      <section className="px-[5%] md:px-15 py-10 bg-[var(--accent-3)] text-[var(--lightgray)]">
          <CallToAction
          title={`Kontaktieren Sie uns direkt!`}
          phone="0177 2247053"
          email="sh-mobile@web.de"
          />
      </section>

    </div>
  );
}
