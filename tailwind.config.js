/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playFair: ["Playfair Display", "serif"],
        plusJakarta: ["Plus Jakarta Sans", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        linear: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)",
        middle:
          "radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)",
      },
      boxShadow: {
        btn: "0px 21px 44px rgba(72, 7, 156, 0.35)",
        faqCard:
          "0px 4.4px 12px -1px rgba(19, 16, 34, 0.06), 0px 2px 6.4px -1px rgba(19, 16, 34, 0.03)",
      },
    },
  },
  plugins: [],
};
