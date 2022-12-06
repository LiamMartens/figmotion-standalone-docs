module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './docs/**/*.md'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
    container: false,
    colors: {
      primary: 'var(--ifm-color-primary)',
      'primary-dark': 'var(--ifm-color-primary-dark)',
      'primary-darker': 'var(--ifm-color-primary-darker)',
      'primary-darkest': 'var(--ifm-color-primary-darkest)',
      'primary-light': 'var(--ifm-color-primary-light)',
      'primary-lighter': 'var(--ifm-color-primary-lighter)',
      'primary-lightest': 'var(--ifm-color-primary-lightest)',
    },
  },
  plugins: [],
};
