module.exports = {
  mode: "jit",
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ui: ["Hannotate TC"],
        header: ["Snell Roundhand"],
      },
      backgroundImage: (theme) => ({
        registerimg: "url('static/register.jpg')",
        loginimg: "url('static/photo-1486520299386-6d106b22014b.jpeg')",
        topimg: "url('static/top.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
