import Headline from "@/components/Headline";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Kontakt: HV Batterie Transport in Essen | SH-Mobile GmbH",
  description:
    "Professioneller Entsorgung / Recycling & Transport von Lithium-Ionen Hochvolt-Autobatterien, sowie die Vermietung der Transportboxen in Essen und Umgebung.",
};

export default function Contact() {
  return (
    <div>
      <Headline content={`Kontaktseite`} imageSrc="/images/pic02.webp" />

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
