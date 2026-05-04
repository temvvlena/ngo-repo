import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";

const accents = [
  "from-brand-100 to-brand-50",
  "from-sand-100 to-cream",
  "from-brand-50 to-sand-100",
  "from-sand-50 to-brand-100",
  "from-brand-100 to-cream",
  "from-cream to-sand-100",
];

export default function WhoWeHelp() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.whoWeHelp.eyebrow}
          title={t.whoWeHelp.title}
          subtitle={t.whoWeHelp.subtitle}
          align="center"
          className="!mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.whoWeHelp.items.map((item, i) => (
            <article
              key={item.title}
              className={`relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br ${accents[i % accents.length]} p-6 transition-transform duration-200 hover:-translate-y-0.5`}
            >
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/40 blur-2xl"
              />
              <h3 className="font-display text-lg font-semibold text-brand-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
