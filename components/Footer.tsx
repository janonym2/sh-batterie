"use client";

export default function Footer() {

  return (
    <div>
      {/* Footer */}
      <footer className="bg-[var(--gray)] text-white py-8 px-[5%] md:px-15 text-sm md:text-sm">
        <p className="mb-6">Platzhalter GmbH · Musterstraße 1, 12345 Musterstadt</p>
        <ul className="md:flex gap-6 space-y-6 md:space-y-0 text-sm md:text-base">
          <li>
            <a href="/cookie-pref" className="hover:text-[var(--accent)]">
              Cookie-Einstellungen
            </a>
          </li>
          <li>
            <a href="/impressum" className="hover:text-[var(--accent)]">
              Impressum
            </a>
          </li>
          <li>
            <a href="/datenschutz" className="hover:text-[var(--accent)]">
              Datenschutzerklärung
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-[var(--accent)]">
              Mietbedingungen
            </a>
          </li>
        </ul>
        <p className="my-6 text-xs">&copy; 2025 Platzhalter GmbH. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
