"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

type NavbarProps = {
  phone?: string;
  email?: string;
};

export default function Navbar({ phone, email}: NavbarProps) {

  const [isSmall, setIsSmall] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [phoneText, setPhoneText] = useState("");
  const [emailText, setEmailText] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  // shrinking
  useEffect(() => {
    const handleScroll = () => setIsSmall(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setPhoneText(phone ?? "");
    setEmailText(email ?? "");

  }, []);

  return (
    <div>
      {/* Platzhalter, um Content nicht zu überdecken */}
      <div className={`h-[65px] ${isSmall ? "md:h-[75px]" : "md:h-[100px]"} transition-all duration-[var(--transition)]`} />
      <nav
        className={`hidden md:flex fixed top-0 w-[100%] z-50 transition-all bg-[var(--lightgray)] duration-[var(--transition)] ${
          isSmall ? "h-[75px]" : "h-[100px]"
        }`}
      >
        <div className="flex items-center h-full justify-between px-15 w-full">
          <Image
            src="/brandname.svg"
            alt="Brandname"
            width={3200}
            height={800}
            className="h-[50%] w-auto"
            onClick={() => router.push("/")}
          />

          <div className="text-right">
            <ul
              className={`flex gap-8 text-sm transition-opacity duration-300 ${
                isSmall ? "opacity-0" : "opacity-100"
              }`}
            >
              <li>
                <a href="#de" className="text-[var(--accent)]">
                  DE
                </a>{" "}
                |{" "}
                <a href="#en" className="hover:text-[var(--accent)]">
                  EN
                </a>
              </li>
              <li>
                <span className="text-[var(--accent)]">Mobil:</span>{" "}
                <a
                  href={`tel:${phoneText}`}
                  className="hover:text-[var(--accent)]"
                >
                  {phoneText}
                </a>
              </li>
              <li>
                <span className="text-[var(--accent)]">E-Mail:</span>{" "}
                <a
                  href={`mailto:${emailText}`}
                  className="hover:text-[var(--accent)]"
                >
                  {emailText}
                </a>
              </li>
            </ul>
            <ul
              className={`flex gap-12 text-[20px] justify-end transition-all duration-300 ${
                isSmall ? "translate-y-[-20px] mt-4" : "mt-2"
              }`}
            >
              <li>
                <a href="/" className={pathname === '/' ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'}>
                  Startseite
                </a>
              </li>
              <li>
                <a href="/about-us" className={pathname === '/about-us' ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'}>
                  Über uns
                </a>
              </li>
              <li>
                <a href="/leistungen" className={pathname === '/leistungen' ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'}>
                  Leistungen
                </a>
              </li>
              <li>
                <a href="/kontakt" className={pathname === '/kontakt' ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'}>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`flex md:hidden fixed top-0 left-0 w-full bg-[var(--lightgray)] z-50 h-[65px] items-center justify-between px-4 border-b-1 border-[color-mix(in_srgb,var(--lightgray)_90%,black)]`}
      >
        {/* Logo */}
        <Image
          src="/brandname.svg"
          alt="Brandname"
          width={800}
          height={200}
          className="h-[30px] w-auto"
          onClick={() => router.push("/")}
        />


        {/* Burger-Button */}
        <button
          className="p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menue */}
        <div
          className={`absolute top-full left-0 w-full bg-[var(--lightgray)] shadow-md transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 py-4 font-bold text-lg">
            <li>
              <a href="/" className={pathname === '/' ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'} onClick={() => setMenuOpen(false)}>
                Startseite
              </a>
            </li>
            <li>
              <a href="/about-us" className={pathname === '/about-us' ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'} onClick={() => setMenuOpen(false)}>
                Über uns
              </a>
            </li>
            <li>
              <a href="/leistungen" className={pathname === '/leistungen' ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'} onClick={() => setMenuOpen(false)}>
                Leistungen
              </a>
            </li>
            <li>
              <a href="/kontakt" className={pathname === '/kontakt' ? 'text-[var(--accent)]' : 'hover:text-[var(--accent)]'} onClick={() => setMenuOpen(false)}>
                Kontakt
              </a>
            </li>
            <li className="text-sm mt-2">
              <a href="#de" className="text-[var(--accent)]">
                DE
              </a>{" "}
              |{" "}
              <a href="#en" className="hover:text-[var(--accent)]">
                EN
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  );
}
