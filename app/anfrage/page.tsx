"use client"

import Headline from "@/components/Headline";
import ContactForm from "@/components/ContactForm";

export default function Inquery() {
  return (
    <div>
        <Headline content={`Anfrage Seite`} imageSrc="/images/pic01.webp" />
        <ContactForm />
    </div>
  );
}
