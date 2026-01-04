import Headline from "@/components/Headline";

export default function Imprint() {
  return (
    <div>
        <Headline content={`Impressum`} imageSrc="/images/pic10.webp" />
        <section className="px-[5%] md:px-15 py-10 space-y-10 bg-[var(--lightgray)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--accent)]">
                Angaben gemäß § 5 TMG:
            </h2>
            <p>
                Jan Hendricks<br />
                SH-Mobile GmbH<br />
                Ruhrau 33, 45279 Essen, Deutschland<br />
                E-Mail: sh-mobile@web.de
            </p>

            <h2>Kontakt:</h2>
            <p>
                E-Mail: jan-hendricks@outlook.de<br />
                Telefon: 00491772247053
            </p>

            <h2>Haftung für Inhalte:</h2>
            <p>Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen.</p>
        </section>
    </div>
  );
}
