function getCombineDate(...array) {   
    const resultType = array.shift();
    let result = '';

    if (resultType === 'number') {        
        array.forEach((value)=> {
            if (typeof value === 'number' || typeof value === 'boolean') {
                result += `${value} + `;           
            } else if (typeof value === 'string') {
                result += `Number('${value}') + `;  
            }  else if (typeof value === 'object') {
                result = `${result + Object.values(value).join(' + ')  } + `; 
            }
        })
        result = result.slice(0, -3);
    } else if (resultType === 'string') {    
        array.forEach((value)=> {
            if (typeof value === 'number' || typeof value === 'boolean') {
                result += `${value} + `;                
            } else if (typeof value === 'string') {
                result += `'${value}' + `;              
            } else if (typeof value === 'object') {
                result = `${result + Object.values(value).join(' + ')  } + `;   
            }
        })
        result = result.slice(0, -3);
    } else if (resultType === 'boolean') {        
        array.forEach((value)=> {
            if (typeof value === 'number' || typeof value === 'boolean') {
                result += `${value} && `;
            } else if (typeof value === 'string') {
                result += `'${value}' && `;
            } else if (typeof value === 'object') {
                result = `${result + Object.values(value).join(' && ')  } && `;
            }         
        })
        result = result.slice(0, -4);
    } else if (resultType === 'array') {
        result = '[';        
        array.forEach((value)=> {
            if (typeof value === 'number' || typeof value === 'boolean') {
                result += `${value}, `;
            } else if (typeof value === 'string') {
                result += `'${value}', `;
            } else if (typeof value === 'object') {
                result = `${result + Object.values(value).join(', ')  }, `;
            } 
        })
        result = result.slice(0, -2);
        result += ']';
    } else if (resultType === 'object') {
        let keyNumber = 1;          
        result = '{'       
        array.forEach((value)=> {
            if (typeof value === 'number' || typeof value === 'boolean') {
                result += `key${keyNumber}: ${value}, `;
                keyNumber+=1;
            } else if (typeof value === 'string') {
                result += `key${keyNumber}: '${value}', `;
                keyNumber+=1;
            } else if (Array.isArray(value)) {
                for(let i = 0; i < value.length; i+=1) {
                    result += `${i}: ${value[i]}, `;
                }
            } else if (typeof value === 'object') {
                value.forEach((key)=> {
                    result += `${key}: ${value[key]}, `
                })                 
            }
        })
        result = result.slice(0, -2);
        result += '}';
    }
    return result;
}

module.exports = getCombineDate;