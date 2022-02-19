module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      'pack-train': "url('../public/img/bg-chart.png')",
    },
    extend: {
      colors: {
        "shade-white": "#FCFAFC",
        "shade-aquaverde": "#99D2E1",
        "shade-grayblue": "#AEC9E2",
        "shade-darkgrayblue": "#93B6D7",
        "shade-lightblue": "#528BC5",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
