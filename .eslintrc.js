module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  env: {
    browser: true,
  },
  rules: {
    'arrow-parens': 0,
    'lines-between-class-members': 0, // For grouping related flow types
    'object-curly-newline': 0,
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/jsx-one-expression-per-line': 0,
  },
};
