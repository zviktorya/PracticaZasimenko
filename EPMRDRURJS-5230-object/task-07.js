function convertKeys(obj) {
    let result = {};  
    obj.forEach((key)=> {
        result = {...result, [Symbol(key)]: obj[key]};  
    })
    return result;
}

module.exports = convertKeys;