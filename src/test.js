const format = require('prettier-eslint');
const eslintOptions = require('../.eslintrc.json');

const text = `const foo = {
  a: 'a',
  b: 'b'
};

const { a, b } = foo;`;

const options = {
  // filePath: '/home/vladi/repo/contributions/vs-code-prettier-eslint/src/test2.js',
  text,
  eslintConfgi: eslintOptions,
};

const options2 = {
  filePath: '/home/vladi/repo/contributions/vs-code-prettier-eslint/src/test2.js',
  // text,
  eslintConfgi: eslintOptions,
};

const formattedCode = format(options);
const formattedCode2 = format(options2);

console.log('formattedCode', formattedCode);
console.log('formattedCode2', formattedCode2);
