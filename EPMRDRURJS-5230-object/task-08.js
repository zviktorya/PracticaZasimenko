function newInstance(constructor, args) {
    const newObj = Object.create(constructor.prototype);
    constructor.apply(newObj, args);
    return newObj;
}

module.exports = newInstance;