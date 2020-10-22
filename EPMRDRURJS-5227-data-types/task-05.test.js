const getCombineDate = require('./task-05');

test('should transform data for number type' , () => {
    expect(getCombineDate('number', 10, 'test', true, [20, 30], {a: 1, b: 2})).toBe("10 + Number('test') + true + 20 + 30 + 1 + 2");
});
test('should transform data for string type' , () => {
    expect(getCombineDate('string', 10, 'test', true, [20, 30], {a: 1, b: 2})).toBe("10 + 'test' + true + 20 + 30 + 1 + 2");
});
test('should transform data for boolean type' , () => {
  expect(getCombineDate('boolean', 10, 'test', true, [20, 30], {a: 1, b: 2})).toBe("10 && 'test' && true && 20 && 30 && 1 && 2");
});
test('should transform data for array type' , () => {
  expect(getCombineDate('array', 10, 'test', true, [20, 30], {a: 1, b: 2})).toBe("[10, 'test', true, 20, 30, 1, 2]");
});
test('should transform data for object type' , () => {
  expect(getCombineDate('object', 10, 'test', true, [20, 30], {a: 1, b: 2})).toBe("{key1: 10, key2: 'test', key3: true, 0: 20, 1: 30, a: 1, b: 2}");
});