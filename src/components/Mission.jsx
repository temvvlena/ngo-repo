import { useLanguage } from "../i18n/LanguageContext.jsx";
import PlaceholderImage from "./ui/PlaceholderImage.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-5 w-5 flex-none text-brand-700"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Mission() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <PlaceholderImage
            variant="sand"
            alt="Illustrated placeholder showing community workshop and education imagery."
            className="aspect-[4/3] w-full"
          />
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <SectionHeading
            eyebrow={t.mission.eyebrow}
            title={t.mission.title}
          />
          <p className="mt-5 text-base leading-relaxed text-ink/75 sm:text-lg">
            {t.mission.body}
          </p>
          <ul className="mt-7 space-y-3">
            {t.mission.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl bg-brand-50/60 px-4 py-3 text-sm text-ink/85 sm:text-base"
              >
                <CheckIcon />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
