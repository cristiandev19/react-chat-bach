module.exports = {
  env: {
    commonjs : true,
    es2021   : true,
    node     : true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-multi-spaces' : ['error', { exceptions: { VariableDeclarator: true } }],
    'key-spacing'     : ['error', {
      align: {
        beforeColon : true,
        afterColon  : true,
        on          : 'colon',
      },
    }],
    'consistent-return'    : ['off'],
    'no-underscore-dangle' : ['off'],
  },
};
