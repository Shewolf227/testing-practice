const { stringLength, reverseString, capitalize } = require('./index');

// Task 1: String Length
test('returns string length successfully', () => {
  expect(stringLength('Hello')).toBe(5);
});

test('throws error when string is less than 1 character', () => {
  expect(() => { stringLength(''); }).toThrow('String must be at least 1 character long');
});

test('throws error when string is more than 10 characters', () => {
  expect(() => { stringLength('ghtyuijskodlf'); }).toThrow('String must be at most 10 characters long');
});

// Task 2: Reverse String
test('returns reversed string successfully', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

test('throws error when string is less than 1 character', () => {
  expect(() => { reverseString(''); }).toThrow('String must be at least 1 character long');
});

test('throws error when string is more than 10 characters', () => {
  expect(() => { reverseString('ghtyuijskodlf'); }).toThrow('String must be at most 10 characters long');
});

// Task 4
test('returns capitalized string successfully', () => {
  expect(capitalize('hello')).toBe('Hello');
});
