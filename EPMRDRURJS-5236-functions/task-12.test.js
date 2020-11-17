const getCipher = require('./task-12');

test('should accept string with password and return string - encrypted password', () => {
  expect(getCipher(1212)).toEqual(getCipher(1212));
  expect(getCipher(1212)).not.toEqual(getCipher(1213));
});
