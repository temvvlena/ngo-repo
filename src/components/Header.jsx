import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { CALENDLY_MAIN_URL, SECTION_IDS } from "../constants.js";
import Button from "./ui/Button.jsx";

function Logo({ orgName }) {
  return (
    <a
      href={`#${SECTION_IDS.home}`}
      className="flex items-center gap-3"
      aria-label={orgName}
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-cream shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M4 16c2-7 5-10 8-10s6 3 8 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="9" r="1.8" fill="currentColor" />
        </svg>
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="font-display text-base font-semibold text-brand-900">
          {orgName}
        </span>
        <span className="text-xs text-ink/60">Community nonprofit</span>
      </span>
    </a>
  );
}

function LanguageToggle() {
  const { language, setLang, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t.nav.languageToggleAria}
      className="inline-flex items-center rounded-full border border-brand-200 bg-cream p-0.5 text-xs font-semibold"
    >
      {[
        { code: "en", label: "EN" },
        { code: "mn", label: "MN" },
      ].map((opt) => {
        const active = language === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLang(opt.code)}
            aria-pressed={active}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              active
                ? "bg-brand-700 text-cream shadow-soft"
                : "text-brand-800 hover:bg-brand-50"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: `#${SECTION_IDS.home}`, label: t.nav.home },
    { href: `#${SECTION_IDS.services}`, label: t.nav.services },
    { href: `#${SECTION_IDS.about}`, label: t.nav.about },
    { href: `#${SECTION_IDS.contact}`, label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-cream/90 backdrop-blur shadow-[0_1px_0_0_rgba(31,42,42,0.06)]"
          : "bg-cream"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo orgName={t.meta.orgName} />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <Button
            href={CALENDLY_MAIN_URL}
            external
            variant="primary"
            size="md"
            withArrow
          >
            {t.nav.bookConsultation}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-brand-200 bg-cream text-brand-800 hover:bg-brand-50"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M6 18L18 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-brand-100 bg-cream lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-brand-50 hover:text-brand-800"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 px-1">
              <Button
                href={CALENDLY_MAIN_URL}
                external
                variant="primary"
                size="md"
                className="w-full"
                withArrow
              >
                {t.nav.bookConsultation}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
