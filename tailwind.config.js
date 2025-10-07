tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
    },
  },
};
