/**
 * Circular profile avatar placeholder with soft gradient background and
 * member initials. Designed to look polished and intentional in place of a
 * real photo, while remaining easy to swap for an <img> later.
 *
 * Click behavior is owned by the parent (we wrap in an <a> when needed) so
 * the avatar can be a link to a Calendly URL.
 */

const palettes = [
  { from: "#bbd7d2", to: "#3f7f76", text: "#1d3835" },
  { from: "#e7d5b8", to: "#b48246", text: "#503824" },
  { from: "#dcebe8", to: "#27514c", text: "#0e1f1d" },
  { from: "#f4ebdc", to: "#c39b62", text: "#3a2a14" },
  { from: "#8fbbb3", to: "#22413e", text: "#0e1f1d" },
];

function getInitials(name) {
  if (!name) return "··";
  const cleaned = name.replace(/[^\p{L}\s]/gu, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "··";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function ProfileAvatar({
  name,
  index = 0,
  size = "md",
  className = "",
  ariaLabel,
}) {
  const palette = palettes[index % palettes.length];
  const initials = getInitials(name);
  const id = `avatar-${index}-${Math.random().toString(36).slice(2, 8)}`;

  const sizes = {
    sm: "h-16 w-16 text-base",
    md: "h-28 w-28 text-2xl",
    lg: "h-36 w-36 text-3xl",
  };

  return (
    <div
      role="img"
      aria-label={ariaLabel || `Portrait placeholder for ${name}`}
      className={`relative ${sizes[size]} ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full rounded-full shadow-card"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${id}-bg`} cx="0.35" cy="0.3" r="0.85">
            <stop offset="0%" stopColor={palette.from} />
            <stop offset="100%" stopColor={palette.to} />
          </radialGradient>
          <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="50" fill={`url(#${id}-bg)`} />
        <circle cx="50" cy="50" r="50" fill={`url(#${id}-shine)`} />
        <circle
          cx="78"
          cy="22"
          r="14"
          fill="#ffffff"
          opacity="0.18"
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center font-display font-semibold tracking-wide select-none"
        style={{ color: palette.text }}
      >
        {initials}
      </span>
    </div>
  );
}
