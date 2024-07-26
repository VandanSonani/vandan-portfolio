/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    
  }, 
  shortcuts: {
    "responsive-screen": "max-w-screen-lg mx-auto px-6 md:px-0",
    "focus-ring":
      "ring-offset-2 light:(ring-offset-gray-50 ring-gray-300) focus:outline-none focus:ring-1 dark:focus:(ring-offset-neutral-900 ring-neutral-800)",
    "card-base":
      "border-[0.1px] p-4 bg-opacity-25 bg-neutral-100 hover:bg-neutral-200/40 border-neutral-200 dark:(bg-neutral-800/30 border-neutral-800 text-white/80 hover:text-white hover:bg-opacity-40) transition-colors ",
  },
  plugins: [],
};
