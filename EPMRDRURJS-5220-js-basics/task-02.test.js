const printEvenChars = require('./task-02');

test('should print to the console a numbered list of every second letter' , () => {
    jest.spyOn(global.console, 'log');
    printEvenChars('hello');
    expect(global.console.log.mock.calls.length).toBe(2);
    expect(global.console.log.mock.calls[0][0]).toBe('1 e');
    expect(global.console.log.mock.calls[1][0]).toBe('2 l');
  });