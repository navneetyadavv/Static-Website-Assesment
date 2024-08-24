/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('./public/ivancik.jpg')",
        "curve-image" : "url(./public/curve.jpg)",
        "wave-image" : "url(./public//wave.svg)",
      },
    },
  },
  variants: {},
  plugins: [],
};
