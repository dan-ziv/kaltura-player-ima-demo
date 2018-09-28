module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  globals: {
    __kalturaplayer: true,
    KalturaPlayer: true
  },
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error'
  }
};
