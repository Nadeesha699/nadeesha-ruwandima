tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }, // half because content is duplicated
        },
      },
      animation: {
        "scroll-left": "scroll-left 10s linear infinite",
      },
    },
  },
};
