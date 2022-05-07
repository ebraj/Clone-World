module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        LGRegular: ["LGRegular", "sans-serif"],
        LGSemiBold: ["LGSemiBold", "sans-serif"],
        LGBold: ["LGBold", "sans-serif"],
      },
      colors: {
        "custom-background-green": "#042825",
        "custom-light-green": "#a6c1bf",
        "custom-very-light-green": "#e6eded",
        "custom-primary-white": "#ffffff",
        "custom-light-yellow": "#fff4d2",
      },
    },
  },
  plugins: [],
};
