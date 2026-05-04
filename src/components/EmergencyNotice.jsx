import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function EmergencyNotice() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="emergency-notice-title"
      className="bg-cream pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-3xl border border-sand-200 bg-sand-50 p-6 sm:flex-row sm:items-start sm:p-8">
          <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-sand-200 text-sand-800">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path
                d="M12 3l10 18H2L12 3z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M12 10v5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="12" cy="18" r="1.1" fill="currentColor" />
            </svg>
          </div>
          <div>
            <h2
              id="emergency-notice-title"
              className="font-display text-lg font-semibold text-sand-900 sm:text-xl"
            >
              {t.emergency.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-sand-900/85 sm:text-base">
              {t.emergency.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
