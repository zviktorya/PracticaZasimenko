const {throttle} = require('./task-13');

test('should call the callback function', () => {
    const f = jest.fn()
    console.log(throttle);
    const throttleFn = throttle(f, 100000);
    throttleFn();
    expect(f).toHaveBeenCalled();
});

test('the function must be called not earlier than after', () => {
    const f = jest.fn()
    console.log(throttle);
    const throttleFn = throttle(f, 100000);
    throttleFn();
    throttleFn();
    expect(f.mock.calls.length).toBe(1);
});