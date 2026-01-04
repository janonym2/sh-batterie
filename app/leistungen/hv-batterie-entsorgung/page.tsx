import Headline from "@/components/Headline";
import CallToAction from "@/components/CallToAction";
import { content } from "@/lib/content";

export const metadata = {
  title: "HV Batterie Entsorgen in Essen | SH-Mobile GmbH",
  description:
    "Professioneller Entsorgung / Recycling von Lithium-Ionen Hochvolt-Autobatterien in Essen und Umgebung.",
};

export default function Entsorgen() {
  return (
    <div>
      <Headline content={`Entsorgung & Recycling von HV-Batterien`} imageSrc="/images/pic12.webp" />

      <section className="px-[5%] md:px-15 py-10 bg-[var(--lightgray)]">
        <h2 className="text-3xl md:text-4xl text-[var(--accent)] font-bold mb-4">
          Entsorgung & Recycling
        </h2>

        <p>
          {content.leistungen.items.find(item => item.title === 'Entsorgung & Recycling')?.description}
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
