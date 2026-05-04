import { useLanguage } from "../i18n/LanguageContext.jsx";
import { CALENDLY_MAIN_URL, SECTION_IDS } from "../constants.js";
import Button from "./ui/Button.jsx";
import PlaceholderImage from "./ui/PlaceholderImage.jsx";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id={SECTION_IDS.home} className="relative overflow-hidden">
      {/* Soft background ornament */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-[420px] bg-gradient-to-b from-brand-50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-sand-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-100/70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        <div className="lg:col-span-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              href={CALENDLY_MAIN_URL}
              external
              variant="primary"
              size="lg"
              withArrow
            >
              {t.hero.primaryCta}
            </Button>
            <Button
              href={`#${SECTION_IDS.contact}`}
              variant="secondary"
              size="lg"
            >
              {t.hero.secondaryCta}
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-brand-100 pt-6">
            {t.hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs font-medium uppercase tracking-wider text-ink/60">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-lg font-semibold text-brand-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <PlaceholderImage
            variant="hero"
            alt={t.hero.imageAlt}
            className="aspect-[5/4] w-full"
          />
          {/* Floating "card" accent — decorative */}
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-4 hidden w-56 rounded-2xl bg-cream p-4 shadow-soft ring-1 ring-brand-100 sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-700 text-cream">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M5 13l4 4L19 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink/60">
                  Community nonprofit
                </p>
                <p className="text-sm font-semibold text-brand-900">
                  Free consultations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
