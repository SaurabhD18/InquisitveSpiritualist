/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}", // 👈 Add this
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")], // 👈 Ensure Flowbite plugin is added
};
