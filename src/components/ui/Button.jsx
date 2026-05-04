const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60 disabled:cursor-not-allowed";

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const variantClasses = {
  primary:
    "bg-brand-700 text-cream hover:bg-brand-800 shadow-soft focus-visible:ring-brand-500",
  secondary:
    "bg-cream text-brand-800 border border-brand-200 hover:border-brand-400 hover:bg-brand-50 focus-visible:ring-brand-400",
  ghost:
    "bg-transparent text-brand-800 hover:bg-brand-50 focus-visible:ring-brand-400",
  // High-contrast solid white button for use on dark/colored backgrounds.
  // Keeps the same look in default and hover states (no fade-in / fade-out).
  white:
    "bg-white text-brand-900 hover:bg-white shadow-soft focus-visible:ring-white",
  outlineLight:
    "bg-transparent text-cream border border-cream/30 hover:bg-cream/10 focus-visible:ring-cream",
};

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10h12" />
      <path d="M11 5l5 5-5 5" />
    </svg>
  );
}

/**
 * Button component that renders an <a> when `href` is provided, or a <button> otherwise.
 * `external` adds target=_blank and proper rel for security.
 */
export default function Button({
  href,
  external = false,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...rest
}) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowIcon />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
