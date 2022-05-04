function stringLength(string) {
  if (string.length < 1) throw 'String must be at least 1 character long';
  if (string.length > 10) throw 'String must be at most 10 characters long';

  return string.length;
}

function reverseString(string) {
  if (string.length < 1) throw 'String must be at least 1 character long';
  if (string.length > 10) throw 'String must be at most 10 characters long';

  return string.split('').reverse().join('');
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

module.exports = { stringLength, reverseString, capitalize };
