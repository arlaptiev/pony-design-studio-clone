module.exports = {
  important: true,
  purge: {
    mode: 'all',
    content: [
      './src/pages/**/*.{js,jsx,ts,tsx}',
      './src/components/**/*.{js,jsx,ts,tsx}',
      './next.config.js',
    ],
    options: {
      extractors: [
        {
          extensions: [],
          extractor: (content) => {
            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) ||
              [];

            return broadMatches.concat(innerMatches);
          },
        },
      ],
    },
  },
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        'hero': '73px',
        'hero-large': '149px',
        'small': '70%',
        'tiny': '55%',
      },
      colors: {
        dark: '#050505',
      },
      fontFamily: {
        sans: ['neuzeit-grotesk', 'sans-serif'],
        'display': ['itc-avant-garde-gothic-pro', 'sans-serif'],
      },
      width: {
        '25.5': '102px',
        '40%': '40%',
      },
      maxWidth: {
        '1/3': '33.3333%',
        '40%': '40%',
      },
      height: {
        '25.5': '102px',
      },
      padding: {
        '50p': '50%',
        '75p': '75%',
        '100p': '100%',
        '125p': '125%',
        '150p': '150%',
      },
      scale: {
        '99': '.99',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
