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
    extend: {},
  },
  plugins: [require("daisyui"), nextui(), flowbite.plugin()],
};