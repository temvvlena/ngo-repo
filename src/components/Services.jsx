import { useLanguage } from "../i18n/LanguageContext.jsx";
import { CALENDLY_MAIN_URL, SECTION_IDS } from "../constants.js";
import Button from "./ui/Button.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";

const icons = [
  // Visa guidance — passport
  (props) => (
    <svg viewBox="0 0 24 24" {...props} aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="11" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  // Resource support — checklist
  (props) => (
    <svg viewBox="0 0 24 24" {...props} aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 9l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  // Settlement — house
  (props) => (
    <svg viewBox="0 0 24 24" {...props} aria-hidden="true">
      <path d="M4 11l8-7 8 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9h12v-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19v-5h4v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Workshops & referrals — people
  (props) => (
    <svg viewBox="0 0 24 24" {...props} aria-hidden="true">
      <circle cx="9" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="11" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 19c0-3 3-5 6-5s6 2 6 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 19c0-2 2-3.5 4-3.5s2 1 2 1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id={SECTION_IDS.services}
      className="bg-gradient-to-b from-brand-50/60 to-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
          align="center"
          className="!mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={item.title}
                className="group relative flex h-full flex-col rounded-3xl border border-brand-100 bg-cream p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-700 group-hover:text-cream">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* CTA block — light warm card, inspired by Gobi Foundation's palette */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-sand-200 bg-white px-6 py-10 shadow-card sm:px-10 sm:py-12">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="font-display text-2xl font-semibold text-brand-900 sm:text-3xl">
                {t.services.ctaTitle}
              </h3>
              <p className="mt-3 max-w-2xl text-ink/75">
                {t.services.ctaBody}
              </p>
            </div>
            <div className="flex lg:col-span-4 lg:justify-end">
              <Button
                href={CALENDLY_MAIN_URL}
                external
                variant="primary"
                size="lg"
                withArrow
              >
                {t.services.ctaButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
