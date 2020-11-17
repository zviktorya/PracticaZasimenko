const messageManager = require('./task-14');

test('should call console.warn when message include warning', (done) => {
    console.warn = jest.fn();
    messageManager('Warning');
    setTimeout(() => {
       expect(console.warn).toHaveBeenCalled();
       done();
    });
});

test('should call console.info when message include info', (done) => {
    console.info = jest.fn();
    messageManager('Info');
    setTimeout(() => {
        expect(console.info).toHaveBeenCalled();
        done();
    });
});

test('should call console.error when message include error', (done) => {
    console.error = jest.fn();
    messageManager('Error');
    setTimeout(() => {
        expect(console.error).toHaveBeenCalled()
        done();
    });
})