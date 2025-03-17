const assert = require('node:assert');
const { test } = require('node:test');
const { fakultet } = require('../fakultet.js');

test('fakultet av negative tall er 1', () => {
    assert.strictEqual(fakultet(-5), 1);
});

test('fakultet av 0 er 1', () => {
    assert.strictEqual(fakultet(0), 1);
});

test('fakultet av 1 er 1', () => {
    assert.strictEqual(fakultet(1), 1);
});

test('fakultet av 2 er 2', () => {
    assert.strictEqual(fakultet(2), 2);
});

test('fakultet av 3 er 6', () => {
    assert.strictEqual(fakultet(3), 6);
}); 