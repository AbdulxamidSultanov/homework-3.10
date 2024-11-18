/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#101017",
        gray: "#313131",
        deepdark: "#050507",
      },
      borderColor: {
        green: "#079211",
      },
      textColor: {
        green: "#079211",
        gray: "#808080",
      },
    },
  },
  plugins: [],
};
