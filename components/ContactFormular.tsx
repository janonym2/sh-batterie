"use client";
import { useEffect, useState, useRef } from 'react';

export default function ContactFormular() {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const requiredFields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("[required]");
    const invalidFields: HTMLElement[] = [];

    requiredFields.forEach((field) => {
      const isCheckbox = field instanceof HTMLInputElement && field.type === "checkbox";
      const isEmpty = !field.value.trim();

      const isInvalid = (isCheckbox && !field.checked) || (!isCheckbox && isEmpty);

      if (isInvalid) {
        invalidFields.push(field);

        // visuelles Feedback
        if (isCheckbox) {
          field.classList.add("ring-2", "ring-red-400", "animate-shake");
        } else {
          field.classList.add("border-red-400", "animate-shake");
        }
      } else {
        field.classList.remove("ring-2", "ring-red-400", "border-red-400", "animate-shake");
      }
    });

    if (invalidFields.length > 0) {
      setFormError("Bitte fülle alle Pflichtfelder aus.");

      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => {
        setFormError("");
        invalidFields.forEach((field) => {
          field.classList.remove("ring-2", "ring-red-400", "border-red-400", "animate-shake");
        });
      }, 2000);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          message: formData.get("message"),
          subject: formData.get("subject"),
          privacy: formData.get("privacy"),
        }),
      });

      if (!res.ok) throw new Error(`Server antwortete mit ${res.status}`);
      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (    
    <div>
        {/* Kontaktformular */}
        <section className="bg-[#f7f9fc] border-t-8 border-[var(--accent)] p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4">Kontaktieren Sie uns</h2>
          <form onSubmit={handleSubmit} noValidate className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm mb-1" htmlFor="name">
                Name:*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Max Mustermann"
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                E-Mail:*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="max@beispiel.de"
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="phone">
                Telefon:
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+49 171 1234567"
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="company">
                Firma:
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Firma GmbH"
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1" htmlFor="subject">
                Anliegen:
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              >
                <option value="allgemein">Allgemeine Anfrage</option>
                <option value="miete">Mietanfrage</option>
                <option value="support">Support</option>
                <option value="kooperation">Kooperation</option>
                <option value="rechnung">Rechnung & Zahlung</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1" htmlFor="message">
                Nachricht:*
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Ihre Nachricht..."
                className="w-full bg-[var(--background)] border border-[#d6d6d6] p-2 focus:ring-2 focus:ring-[var(--accent)] outline-none min-h-[120px]"
              />
            </div>

            <div className="flex items-start gap-2 md:col-span-2">
              <input id="privacy" name="privacy" type="checkbox" required className="mt-1 bg-[var(--background)]" />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                Ich stimme der Speicherung und Verarbeitung meiner Daten durch diese Webseite zu.*
              </label>
            </div>

            <p className="text-sm text-gray-500 md:col-span-2">
              {formError ? (
                <span className="text-red-500">{formError}</span>
              ) : (
                '* Pflichtfelder'
              )}
            </p>

            <div className="md:col-span-2">
              <button
                type="submit"
                className={`text-white px-6 py-2 font-bold shadow transition ${
                    loading
                    ? "bg-[var(--accent-2)] cursor-not-allowed"
                    : "bg-[var(--accent)] hover:bg-[var(--accent-2)]"
                }`}
              >
                {loading ? "Sende..." : "Nachricht senden"}
              </button>
            </div>
          </form>
        </section>
    </div>
  );
}