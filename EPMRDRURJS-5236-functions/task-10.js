function myFilter(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
}

function myForEach(callback) {
  for (let i = 0; i < this.length; i += 1) {
    callback(this[i], i, this);
  }
}

function myMap(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i += 1) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
}

function myReduce(callback, initialValue) {
  let accumulator;
  let i = 0;
  if (initialValue) {
    accumulator = initialValue;
  } else {
    [accumulator] = this;
    i = 1;
  }
  for (i; i < this.length; i += 1) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
}

function mySome(callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
}

function myEvery(callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
}

function myFind(callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
}

function myBind(context, ...args1) {
  const fn = this;
  return function (...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
}

module.exports = {
  myFilter,
  myForEach,
  myMap,
  myReduce,
  mySome,
  myEvery,
  myFind,
  myBind,
};
