function throttle(func, delay) {
    let callFunctionTime = 0;
    function throttledFunc() {
        const currentTime = Date.now();

        if (Math.abs(currentTime - callFunctionTime) >= delay) {
            func();
            callFunctionTime = Date.now();
        }
    }
    
    return throttledFunc;
}

function debounce(func, delay) {
    let callFunctionTime = 0;                
    function debouncedFunc() {
        const currentTime = Date.now();
        if (Math.abs(currentTime - callFunctionTime) >= delay) {
        func();
        callFunctionTime = Date.now();       
      } else {
        callFunctionTime = currentTime
      }
   }  
  
   return debouncedFunc;  
 }

module.exports = {throttle, debounce};
