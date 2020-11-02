const newInstance  = require('./task-08');

test('should return new object' , () => {  
    function TestFn(...args) {
        this.args = Array.from(args);
    }
    expect(newInstance(TestFn, [10, true])).toEqual(new TestFn(10, true));
})