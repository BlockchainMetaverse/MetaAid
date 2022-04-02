// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
      ],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        indent: [
          'error',
          2,
          {
            SwitchCase: 1,
          },
        ],
        // '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        quotes: ['error', 'single'],
        'no-empty': ['error', { allowEmptyCatch: true }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
          'warn',
          {
            additionalHooks: 'useRecoilCallback',
          },
        ],
      },
    },
  ],
}
