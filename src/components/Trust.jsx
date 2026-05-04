import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";

const trustIcons = [
  // Heart / community
  (props) => (
    <svg viewBox="0 0 24 24" {...props} aria-hidden="true">
      <path
        d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // Speech / honesty
  (props) => (
    <svg viewBox="0 0 24 24" {...props} aria-hidden="true">
      <path
        d="M4 6h16v10H8l-4 4V6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 11h8M8 8h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  // Shield / referral
  (props) => (
    <svg viewBox="0 0 24 24" {...props} aria-hidden="true">
      <path
        d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
];

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-cream to-brand-50/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.trust.eyebrow}
          title={t.trust.title}
          align="center"
          className="!mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.trust.cards.map((c, i) => {
            const Icon = trustIcons[i % trustIcons.length];
            return (
              <article
                key={c.title}
                className="rounded-3xl border border-brand-100 bg-cream p-6 shadow-card"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-700 text-cream">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  {c.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-brand-100 bg-cream p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-ink/80 sm:text-base">
            <span className="mr-2 inline-block rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand-800">
              Disclaimer
            </span>
            {t.trust.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
