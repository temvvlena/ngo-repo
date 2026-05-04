/**
 * Polished SVG-based placeholder image. Renders a soft gradient block with
 * abstract shapes and subtle dotted pattern. Used in place of real photos so
 * that image areas never feel unfinished. Replace with real <img> tags later.
 *
 * Variants offer different palettes / compositions.
 */
export default function PlaceholderImage({
  alt = "Decorative placeholder image",
  variant = "hero",
  className = "",
  rounded = "rounded-4xl",
}) {
  const variants = {
    hero: {
      from: "#dcebe8",
      via: "#bbd7d2",
      to: "#f4ebdc",
      shapeColor: "#3f7f76",
      accent: "#c39b62",
    },
    teal: {
      from: "#dcebe8",
      via: "#8fbbb3",
      to: "#bbd7d2",
      shapeColor: "#27514c",
      accent: "#d6b88a",
    },
    sand: {
      from: "#f4ebdc",
      via: "#e7d5b8",
      to: "#fbf7f1",
      shapeColor: "#9a6a39",
      accent: "#3f7f76",
    },
    cool: {
      from: "#f3f8f7",
      via: "#dcebe8",
      to: "#bbd7d2",
      shapeColor: "#22413e",
      accent: "#b48246",
    },
  };

  const v = variants[variant] || variants.hero;
  const id = `ph-${variant}-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden ${rounded} shadow-soft ${className}`}
    >
      <svg
        viewBox="0 0 600 480"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={v.from} />
            <stop offset="55%" stopColor={v.via} />
            <stop offset="100%" stopColor={v.to} />
          </linearGradient>
          <radialGradient id={`${id}-glow`} cx="0.7" cy="0.3" r="0.6">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <pattern
            id={`${id}-dots`}
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill={v.shapeColor} opacity="0.12" />
          </pattern>
        </defs>

        <rect width="600" height="480" fill={`url(#${id}-bg)`} />
        <rect width="600" height="480" fill={`url(#${id}-dots)`} />
        <rect width="600" height="480" fill={`url(#${id}-glow)`} />

        {/* Abstract shapes — soft, calm, intentional */}
        <circle
          cx="120"
          cy="380"
          r="140"
          fill={v.shapeColor}
          opacity="0.18"
        />
        <circle
          cx="500"
          cy="120"
          r="90"
          fill={v.accent}
          opacity="0.35"
        />
        <path
          d="M0,320 C150,260 280,360 420,300 C520,260 580,300 600,290 L600,480 L0,480 Z"
          fill={v.shapeColor}
          opacity="0.22"
        />
        <path
          d="M60,200 C160,160 230,220 320,190 C420,160 480,210 560,180"
          stroke={v.shapeColor}
          strokeOpacity="0.35"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle
          cx="380"
          cy="240"
          r="58"
          fill="none"
          stroke={v.accent}
          strokeOpacity="0.55"
          strokeWidth="3"
        />
        <rect
          x="200"
          y="90"
          width="120"
          height="120"
          rx="24"
          fill={v.shapeColor}
          opacity="0.2"
          transform="rotate(-8 260 150)"
        />
      </svg>
    </div>
  );
}
