const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      'serif': ['"Source Serif Pro"', ],
      'sans': ['"Source Sans Pro"',],
    },
    extend: {
      colors: {
        'titleblue': '#0d0363',
        'bggray': '#eeeeee',
        'bggold': '#81724c',
        'white': '#ffffff',
        'titlegray': '#48484a',
        'bodygray': '#474247',
        'black': '#000000',
      },
      screens: {
        'md': '842px',
      },
    },
  },

  plugins: [],
};

module.exports = config;
