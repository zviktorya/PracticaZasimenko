function changeObjectProperties(obj) {
    const newStyle = {};

    for (const key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {         /* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */
            if (key === 'top') {
                newStyle.positionTop = obj.top * 2;
            } else if (key === 'bottom') {
                newStyle.positionBottom = obj.bottom * 2;
            } else if (key === 'margin') {
                newStyle.marginTop = obj.margin.top || 0;
                newStyle.marginBottom = obj.margin.bottom || 0;
            }
        }
    }
    return newStyle;
}

module.exports = changeObjectProperties;

