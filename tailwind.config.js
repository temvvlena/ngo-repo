/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Warm, calm nonprofit palette: deep teal + sand + warm cream
        brand: {
          50: "#f3f8f7",
          100: "#dcebe8",
          200: "#bbd7d2",
          300: "#8fbbb3",
          400: "#5e9990",
          500: "#3f7f76",
          600: "#2f665e",
          700: "#27514c",
          800: "#22413e",
          900: "#1d3835",
        },
        sand: {
          50: "#fbf7f1",
          100: "#f4ebdc",
          200: "#e7d5b8",
          300: "#d6b88a",
          400: "#c39b62",
          500: "#b48246",
          600: "#9a6a39",
          700: "#7d5530",
          800: "#62432a",
          900: "#503824",
        },
        cream: "#fbf7f1",
        ink: "#1f2a2a",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Fraunces",
          "Georgia",
          "ui-serif",
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(31, 42, 42, 0.18)",
        card: "0 6px 24px -10px rgba(31, 42, 42, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
