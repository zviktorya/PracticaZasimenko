const getProperty = require('./task-11');

test('shold return the value of the property at the specified path, if any, and undefined if not', () => {
  const car = {
    color: 'red',
    audio: {
      model: 'sony',
    },
  };
  expect(getProperty(car, 'audio.model')).toEqual('sony');
});
