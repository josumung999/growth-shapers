const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
      extend: {},
      fontFamily: {
          sans: ["'Montserrat'"],
          mono: ["'Inconsolata'"]
      },
  },
  plugins: [
      require('@tailwindcss/typography'),
      plugin(function ({ addVariant, e, postcss }) {
        addVariant('firefox', ({ container, separator }) => {
          const isFirefoxRule = postcss.atRule({
            name: '-moz-document',
            params: 'url-prefix()',
          });
          isFirefoxRule.append(container.nodes);
          container.append(isFirefoxRule);
          isFirefoxRule.walkRules((rule) => {
            rule.selector = `.${e(
              `firefox${separator}${rule.selector.slice(1)}`
            )}`;
          });
        });
      }),
  ],
}