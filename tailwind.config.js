module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './src/**/*.{js,jsx,vue}',
    './d2-admin/**/*.{js,jsx,vue}',
    './d2-projects/**/*.{js,jsx,vue}'
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
