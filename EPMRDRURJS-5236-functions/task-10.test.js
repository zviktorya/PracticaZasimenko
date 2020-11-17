/* eslint  no-extend-native: 0, no-plusplus: 0 */
const {
  myFilter,
  myForEach,
  myMap,
  myReduce,
  mySome,
  myEvery,
  myFind,
  myBind,
} = require('./task-10');

test('should create a new array with filtered values', () => {
  Array.prototype.myFilter = myFilter;
  const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
  ];
  const result = words.myFilter((word) => word.length > 6);
  expect(result).toEqual(['exuberant', 'destruction', 'present']);
});

test('should execute the specified function for each element in the array', () => {
  Array.prototype.myForEach = myForEach;
  const array1 = ['a', 'b', 'c'];
  const array2 = [];
  array1.myForEach((element, i) => {
    array2[i] = element + i;
  });
  expect(array2).toEqual(['a0', 'b1', 'c2']);
});

test('should create a new array with the result of calling the specified function for each element of the array', () => {
  Array.prototype.myMap = myMap;
  const numbers = [1, 4, 9];
  const roots = numbers.myMap(Math.sqrt);
  expect(roots).toEqual([1, 2, 3]);
});

test('should apply the function reduce to each element of the array', () => {
  Array.prototype.myReduce = myReduce;
  const total = [0, 1, 2, 3].myReduce(function (a, b) {
    return a + b;
  }, 0);
  expect(total).toEqual(6);
});

test('should check if any element of the array satisfies the condition specified in the passed function', () => {
  Array.prototype.mySome = mySome;
  const array = [1, 2, 3, 4, 5];
  const even = (element) => element % 2 === 0;
  const result = array.mySome(even);
  expect(result).toEqual(true);
});

test('should check if all elements of the array satisfy the condition specified in the passed function', () => {
  Array.prototype.myEvery = myEvery;
  const result = [12, 5, 8, 130, 44].myEvery((elem) => elem >= 10);
  expect(result).toEqual(false);
});

test('should return the value of the first element found in the array that satisfies the condition passed to the callback function', () => {
  Array.prototype.myFind = myFind;
  function isPrime(element) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  const result = [4, 5, 8, 12].myFind(isPrime);
  expect(result).toEqual(5);
});

test('should create a new function that, when called, sets the this execution context to the provided value', () => {
  Function.prototype.myBind = myBind;
  const user = { name: 'vasy' };
  const sayHi = function () {
    return `hello ${this.name}`;
  };
  const result = sayHi.myBind(user);
  expect(result()).toBe('hello vasy');
});
