export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        colorShift: {
          "0%": { backgroundColor: "#facc15" }, // yellow
          "50%": { backgroundColor: "#ef4444" }, // red
          "100%": { backgroundColor: "#22c55e" }, // green
        },
      },
      animation: {
        colorShift: "colorShift 3s infinite",
      },
    },
  },
  plugins: [],
};
