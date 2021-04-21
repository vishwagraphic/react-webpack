module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: { 
        jsx: true, 
      }, 
      warnOnUnsupportedTypeScriptVersion: true, 
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:jsx-a11y/recommended',
      'plugin:eslint-comments/recommended',
      'prettier',
      'plugin:prettier/recommended',
    ],
    rules: {
      'no-unused-vars': ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
      '@typescript-eslint/no-var-requires': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  }