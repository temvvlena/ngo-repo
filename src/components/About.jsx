import { useLanguage } from "../i18n/LanguageContext.jsx";
import { SECTION_IDS, TEAM_CALENDLY_URLS } from "../constants.js";
import Button from "./ui/Button.jsx";
import ProfileAvatar from "./ui/ProfileAvatar.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id={SECTION_IDS.about} className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
            />
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
              {t.about.body}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-brand-100 bg-brand-50/60 p-6">
              <h3 className="font-display text-lg font-semibold text-brand-900">
                {t.about.teamTitle}
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                {t.about.teamSubtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.members.map((m, i) => {
            const url =
              TEAM_CALENDLY_URLS[i] || TEAM_CALENDLY_URLS[TEAM_CALENDLY_URLS.length - 1];
            const avatarLabel = `Open Calendly to schedule a meeting with ${m.name}`;
            return (
              <article
                key={m.name}
                className="group flex flex-col items-center rounded-3xl border border-brand-100 bg-cream p-6 text-center shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={avatarLabel}
                  className="rounded-full transition-transform duration-200 hover:scale-[1.03]"
                >
                  <ProfileAvatar
                    name={m.name}
                    index={i}
                    size="md"
                    ariaLabel={`Portrait placeholder for ${m.name}`}
                  />
                </a>
                <h4 className="mt-5 font-display text-lg font-semibold text-brand-900">
                  {m.name}
                </h4>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {m.bio}
                </p>
                <div className="mt-5">
                  <Button
                    href={url}
                    external
                    variant="secondary"
                    size="sm"
                    withArrow
                  >
                    {t.about.bookButton}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
