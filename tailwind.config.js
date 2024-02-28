/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Mont']
      },
      maxWidth: {
        "1392": "1392px"
      },
      padding: {
        "85": "340px"
      },
      colors: {
        brend: {
          gray: {
            "#78757f": "#78757f",
            "#202327": "#202327",
            "#b2abc3": "#b2abc3",
            "#f1f2fb": "#f1f2fb",
            "#DDDAE5": "#DDDAE5"
          },
          blue: {
            "#28278c": "#28278c"
          }
        }
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
        'button-hover': "url('../assets/images/button-hover.png')",
      },
      backgroundColor: {
        "card": "rgba(34,34,62,.48)"
      }
    },
  },
  plugins: [],
}

