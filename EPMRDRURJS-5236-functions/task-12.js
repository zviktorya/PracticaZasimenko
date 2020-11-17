const cache = {};
function getCipher(password) {
    
  if (password in cache) {
    return cache[password];
  } 
    const result = Math.random().toString(36).substr(2, 5);
    cache[password] = result;
    return result;
  
}


module.exports = getCipher;
