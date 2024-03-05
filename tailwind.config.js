/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Mont']
      },
      maxWidth: {
        "1392": "1392px",
        340: "1360px"
      },
      padding: {
        "85": "340px",
        100: "400px"
      },
      colors: {
        brend: {
          gray: {
            100: "#78757f",
            200: "#202327",
            300: "#b2abc3",
            400: "#f1f2fb",
            500: "#DDDAE5"
          },
          blue: {
            100: "#28278c"
          }
        }
      },
      height: {
        68: "272px"
      },
      borderRadius: {
        "10": "40px"
      },
      boxShadow: {
        "box": "0 5px 13px rgba(0,0,0,.14)"
      },
      backgroundImage: {
        'card-image': "url('../assets/images/card-img.webp')",
        'main': "url('../assets/images/main-image.png')",
        'button': "url('../assets/images/button.png')",
        'button-1': "url('../assets/images/footer-button.webp')",
        'button-2': "url('../assets/images/footer-button-hover.webp')",
        'button-hover': "url('../assets/images/button-hover.png')",
        'hero-image': "url('../assets/images/bg-hero-img.jpeg')",
      },
      backgroundColor: {
        "card": "rgba(34,34,62,.48)",
        hero: "linear-gradient(rgba(255,255,255,0),#f1f2fb)"
      },

    },
  },
  plugins: [],
}

