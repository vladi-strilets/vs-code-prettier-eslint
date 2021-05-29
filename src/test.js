const format = require('prettier-eslint');
const path = require('path');
const fs = require('fs');
const eslintOptions = require('../.eslintrc.json');
const prettierOptions = require('../.prettierrc.json');

const filePath = path.resolve('./src/test2.js');

const text = fs.readFileSync(filePath, 'utf8');

const options = {
  text,
  eslintConfgi: eslintOptions,
  prettierConfig: prettierOptions,
};

const options2 = {
  filePath,
  eslintConfgi: eslintOptions,
  prettierConfig: prettierOptions,
};

const formattedCode = format(options);
const formattedCode2 = format(options2);

console.log('formattedCode', formattedCode);
console.log('formattedCode2', formattedCode2);
