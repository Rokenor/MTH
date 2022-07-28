const { NUMBERS } = require('..');
const assert = require('assert');

assert.strictEqual(NUMBERS.isNumberSimple('10'), false);

console.log(`\u001B[32m✓\u001B[39m Tests passed`);
