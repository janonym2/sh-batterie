"use client";

export default function Footer() {

  return (
    <footer className="bg-[var(--gray)] relative">
      {/* SVG Overlay */}
      <img
        src="/bg-footer.svg"
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content */}
      <div className="text-[var(--lightgray)] py-8 px-[5%] md:px-15 text-sm md:text-sm">
        <p className="mb-6">SH-Mobile GmbH · Ruhrau 33, 45279 Essen, Deutschland</p>
        <ul className="md:flex md:items-center md:gap-6 space-y-6 md:space-y-0 text-sm md:text-base md:justify-between">
          <span className="hidden md:inline">|</span>
          <li>
            <a href="/cookie-pref" className="hover:text-[var(--accent-2)]">
              Cookie-Einstellungen
            </a>
          </li>
          <span className="hidden md:inline">|</span>
          <li>
            <a href="/impressum" className="hover:text-[var(--accent-2)]">
              Impressum
            </a>
          </li>
          <span className="hidden md:inline">|</span>
          <li>
            <a href="/datenschutz" className="hover:text-[var(--accent-2)]">
              Datenschutzerklärung
            </a>
          </li>
          <span className="hidden md:inline">|</span>
          <li>
            <a href="/terms" className="hover:text-[var(--accent-2)]">
              Mietbedingungen
            </a>
          </li>
          <span className="hidden md:inline">|</span>
        </ul>
        <p className="my-6 text-xs">&copy; 2026 SH-Mobile GmbH. Alle Rechte vorbehalten.</p>
      
      </div>
    </footer>
  );
}
