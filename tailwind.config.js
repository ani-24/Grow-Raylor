/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#009297",
        "secondary-green": "#00D3CD",
      },
      backgroundImage: {
        "hero-image": "url('/Hero Image.png')",
        "uiux-gradient":
          "linear-gradient(106.96deg, #CC00FF -0.31%, #8F58D5 50.34%, #3372C6 106.55%)",
      },
    },
  },
  plugins: [],
};
