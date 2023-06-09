/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:storybook/recommended',
  ],
  overrides: [{
    files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
    extends: ['plugin:cypress/recommended']
  }, 
  {
    files: ['postcss.config.*', 'tailwind.config.*'],
    env: {
      node: true
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'max-len': ['warn', { 'code': 100 }],
    'comma-dangle': ['warn', 'always-multiline']
  }
};