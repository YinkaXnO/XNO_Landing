module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Rubik'", "sans-serif"],
      },
      colors: {
        dark: "#383838",
        XNOpink: "#F82D72",
        XNOyellow: "#FCCD60",
        bgMain: "#FDFBFB",
      },
      screens: {
        ssm: "360px",

        sm: "375px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  variants: {},
  plugins: [],
}
