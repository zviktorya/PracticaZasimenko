/* eslint no-restricted-syntax: 0 */
function getProperty(object, propertyPath) {
  const arrayProperty = propertyPath.split('.');
  let accumulator = object;

  for (const property of arrayProperty) {
    if (accumulator[property]) {
      accumulator = accumulator[property];
    } else {
      return undefined;
    }
  }
  return accumulator;
}

module.exports = getProperty;
