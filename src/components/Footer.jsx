import { useLanguage } from "../i18n/LanguageContext.jsx";
import { CALENDLY_MAIN_URL, SECTION_IDS } from "../constants.js";
import Button from "./ui/Button.jsx";

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream/70">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-cream/85 transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 text-cream/85 transition-colors hover:border-cream/60 hover:text-cream"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const explore = [
    { label: t.footer.links.home, href: `#${SECTION_IDS.home}` },
    { label: t.footer.links.services, href: `#${SECTION_IDS.services}` },
    { label: t.footer.links.about, href: `#${SECTION_IDS.about}` },
    { label: t.footer.links.contact, href: `#${SECTION_IDS.contact}` },
  ];
  const connect = [
    {
      label: t.footer.links.bookConsultation,
      href: CALENDLY_MAIN_URL,
      external: true,
    },
    { label: t.contact.email, href: `mailto:${t.contact.email}` },
    {
      label: t.contact.phone,
      href: `tel:${t.contact.phone.replace(/[^+\d]/g, "")}`,
    },
  ];

  return (
    <footer className="bg-brand-900 text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href={`#${SECTION_IDS.home}`}
              className="flex items-center gap-3"
              aria-label={t.meta.orgName}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-cream/10 ring-1 ring-cream/20">
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
              <span className="font-display text-lg font-semibold">
                {t.meta.orgName}
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/80">
              {t.footer.tagline}
            </p>
            <div className="mt-6">
              <Button
                href={CALENDLY_MAIN_URL}
                external
                variant="white"
                size="md"
                withArrow
              >
                {t.nav.bookConsultation}
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <SocialLink href="https://example.com" label="Facebook">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.4H7.7V14h2.6v8h3.2z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://example.com" label="Instagram">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" fill="currentColor" />
                </svg>
              </SocialLink>
              <SocialLink href="https://example.com" label="LinkedIn">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 11.02 5.001A2.5 2.5 0 014.98 3.5zM3 9.75h4v11H3v-11zm7 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.84c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.57v4.92H10v-11z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7">
            <FooterColumn title={t.footer.sections.explore} links={explore} />
            <FooterColumn title={t.footer.sections.connect} links={connect} />
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-cream/10 bg-cream/5 p-5 text-xs leading-relaxed text-cream/70 sm:text-sm">
          {t.footer.disclaimer}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/70 sm:flex-row sm:items-center">
          <p>
            © {year} {t.meta.orgName}. {t.footer.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href="#" className="hover:text-cream">
              Privacy
            </a>
            <a href="#" className="hover:text-cream">
              Terms
            </a>
            <a href={`#${SECTION_IDS.contact}`} className="hover:text-cream">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
