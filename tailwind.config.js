/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/modal.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoSlab: ["Roboto Slab", "serif"],
        lato: ["Lato", "serif"],
        openSans: ["Open Sans", "serif"],
        raleway: ["Raleway", "serif"],
        bigShouldersText: ["Big Shoulders Text", "serif"],
        redHatDisplay: ["Red Hat Display", "serif"],
        oldStandardTT: ["Old Standard TT", "serif"],
        poppins: ["Poppins", "serif"],
        nunito: ["Nunito", "serif"],
        exo: ["Exo", "serif"],
        roboto: ["Roboto", "serif"],
        robotoMono: ["Roboto Mono", "serif"],
        inter: ["Inter", "serif"],
        cinzel: ["Cinzel", "serif"],
        cinzelDecorative: ["Cinzel Decorative", "serif"],
        alegreya: ["Alegreya", "serif"],
        montserratAlternates: ["Montserrat Alternates", "serif"],
        lora: ["Lora", "serif"],
        manrope: ["Manrope", "serif"],
        dmSans: ["DM Sans", "serif"],
        playfairDisplay: ["Playfair Display", "serif"],
        rancho: ["Rancho", "cursive"],
      },
    },
  },
  plugins: [require("daisyui"), nextui(), flowbite.plugin()],
};
