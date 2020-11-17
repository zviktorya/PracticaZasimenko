function messageManager(message) {
    function func() {
        const messageInLowerCase = message.toLowerCase();
        let type;       
        if (messageInLowerCase.includes('warning')) {
            type = 'warn';
        } else if (messageInLowerCase.includes('error')) {
            type = 'error';
        } else {
            type = 'info';
        }        
        console[type](`${new Date().toLocaleTimeString()  } ${  message}`);
    }
    setTimeout(func, 1000);
    func();
}

module.exports = messageManager;