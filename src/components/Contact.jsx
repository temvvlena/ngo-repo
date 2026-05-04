import { useLanguage } from "../i18n/LanguageContext.jsx";
import { CALENDLY_MAIN_URL, SECTION_IDS } from "../constants.js";
import Button from "./ui/Button.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";

const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props} aria-hidden="true">
    <path
      d="M12 21s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props} aria-hidden="true">
    <path
      d="M5 4h3l2 5-2.5 1.5a11 11 0 006 6L15 14l5 2v3a2 2 0 01-2 2A14 14 0 014 6a2 2 0 011-2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);
const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props} aria-hidden="true">
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M4 7l8 6 8-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const telHref = `tel:${c.phone.replace(/[^+\d]/g, "")}`;

  return (
    <section id={SECTION_IDS.contact} className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          align="center"
          className="!mx-auto"
        />

        <div className="mt-10 rounded-3xl border border-brand-100 bg-white p-6 shadow-card sm:p-10">
          <h3 className="font-display text-xl font-semibold text-brand-900 sm:text-2xl">
            {c.leadTitle}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            {c.leadBody}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-brand-100 pt-8 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-10 w-10 flex-none place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
                  {c.addressHeading}
                </p>
                <address className="mt-1 not-italic text-sm leading-relaxed text-brand-900">
                  <span className="font-semibold">{c.orgName}</span>
                  <br />
                  {c.street}
                  <br />
                  {c.cityState}
                </address>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-10 w-10 flex-none place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
                    {c.phoneLabel}
                  </p>
                  <a
                    href={telHref}
                    className="mt-1 block text-sm font-medium text-brand-900 hover:text-brand-700"
                  >
                    {c.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-10 w-10 flex-none place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
                    {c.emailLabel}
                  </p>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-1 block text-sm font-medium text-brand-900 hover:text-brand-700"
                  >
                    {c.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-brand-100 pt-8">
            <Button
              href={CALENDLY_MAIN_URL}
              external
              variant="primary"
              size="lg"
              withArrow
            >
              {c.bookCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
