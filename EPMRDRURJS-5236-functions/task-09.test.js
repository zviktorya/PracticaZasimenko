const getCopyObject = require('./task-09');

test('should return deep copy of the object', () => {
  const obj = {
    id: 1,
    newobj: {},
  };
  const deepCopy = getCopyObject(obj);
  expect(deepCopy).not.toBe(obj);
  expect(deepCopy.newobj).not.toBe(obj.newobj);
});
