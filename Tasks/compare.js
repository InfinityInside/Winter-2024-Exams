// Compare two dictionaries
'use strict';

const compare = (firstValues, ...otherValues) => {
  const secondValues = otherValues[0];
  const firstKeys = Object.keys(firstValues);
  const secondKeys = Object.keys(secondValues);

  if (firstKeys.join('-') !== secondKeys.join('-')) return false;

  let equal = true;
  for (const key of firstKeys) {
    if (firstValues[key] !== secondValues[key]) equal = false;
  }

  return equal;
};

module.exports = compare;
