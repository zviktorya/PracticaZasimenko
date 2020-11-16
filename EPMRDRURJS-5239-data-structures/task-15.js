function sort(string) {
    const array = string.split(' ');

    for (let i = 0; i < array.length - 1; i =+1) {
        for (let j = 0; j < array.length - 1; j =+1) {
            let swap;
            if (array[j].length > array[j + 1].length) {
                swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
            if (array[j].length === array[j + 1].length) {
                if (array[j] > array[j + 1]) {
                    swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
        }
    }
    return array;
}

module.exports = sort;