export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
