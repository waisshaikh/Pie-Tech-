/** @type {import('tailwindcss').Config} */

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/* =================================================
PLUGIN: Convert Tailwind colors into CSS variables
Example: var(--primary)
================================================= */

function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: (styles: Record<string, Record<string, string>>) => void;
  theme: (path: string) => Record<string, string>;
}) {
  const allColors = flattenColorPalette(theme("colors")) as Record<string, string>;

  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* ================= COLORS ================= */

      colors: {
        primary: "#CCC2DC",

        "bg-1": "#141218",
        "bg-2": "#211F26",

        "text-1": "#E6E0E9",

        "gray-1": "#303030",

        stroke: "#4A4458",
      },

      /* ================= ANIMATIONS ================= */

      animation: {
        aurora: "aurora 60s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      /* ================= KEYFRAMES ================= */

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },

        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
  ],
};
