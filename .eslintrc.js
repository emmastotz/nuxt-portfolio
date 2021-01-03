module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['vue', 'prettier', 'import', 'sort-imports-es6-autofix'],
  settings: {
    'import/resolver': 'nuxt',
  },
  // add your custom rules here
  rules: {
    // sloppy code
    'no-console': 'warn',
    'no-lonely-if': 'warn',

    // unused code
    'no-empty': 'warn',
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
      },
    ],
    'require-await': 'warn',

    'vue/no-empty-component-block': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/no-useless-mustaches': 'warn',
    'vue/no-useless-v-bind': 'warn',

    // style
    'curly': 'warn',
    'lines-between-class-members': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',

    'sort-imports-es6-autofix/sort-imports-es6': [
      'warn',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    'import/extensions': [
      'warn',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/newline-after-import': 'warn',

    'vue/component-definition-name-casing': ['warn', 'PascalCase'],
    'vue/component-name-in-template-casing': ['warn', 'PascalCase'],
    'vue/padding-line-between-blocks': ['warn'],
  },
}