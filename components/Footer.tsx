"use client";

export default function Footer() {

  return (
    <footer className="bg-[var(--gray)] relative">
      {/* SVG Overlay */}
      <img
        src="/bg-footer2.svg"
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content */}
      <div className="text-white py-8 px-[5%] md:px-15 text-sm md:text-sm">
        <p className="mb-6">Platzhalter GmbH · Musterstraße 1, 12345 Musterstadt</p>
        <ul className="md:flex md:items-center md:gap-6 space-y-6 md:space-y-0 text-sm md:text-base md:justify-between">
          <span className="hidden md:inline">|</span>
          <li>
            <a href="/cookie-pref" className="hover:text-[var(--accent)]">
              Cookie-Einstellungen
            </a>
          </li>
          <span className="hidden md:inline">|</span>
          <li>
            <a href="/impressum" className="hover:text-[var(--accent)]">
              Impressum
            </a>
          </li>
          <span className="hidden md:inline">|</span>
          <li>
            <a href="/datenschutz" className="hover:text-[var(--accent)]">
              Datenschutzerklärung
            </a>
          </li>
          <span className="hidden md:inline">|</span>
          <li>
            <a href="/terms" className="hover:text-[var(--accent)]">
              Mietbedingungen
            </a>
          </li>
          <span className="hidden md:inline">|</span>
        </ul>
        <p className="my-6 text-xs">&copy; 2025 Platzhalter GmbH. Alle Rechte vorbehalten.</p>
      
      </div>
    </footer>
  );
}
