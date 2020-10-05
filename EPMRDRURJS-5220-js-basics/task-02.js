function printEvenChars(word) {
    const stringTransformInArray = word.split('');
    let j = 1;
  
    for (let i = 0; i < stringTransformInArray.length; i+=1) {
        if (i % 2 !== 0) {
            console.log(`${j} ${stringTransformInArray[i]}`); 
            j+=1;
        }
    }
}

module.exports = printEvenChars;

