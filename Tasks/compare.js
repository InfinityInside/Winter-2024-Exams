// Compare two dictionaries
'use strict';

const compare = (firstValues, secondValues) => {
  const firstKeys = Object.keys(firstValues);
  const secondKeys = Object.keys(secondValues);

  if (firstKeys.join('-') !== secondKeys.join('-')) return false;

  for (const key of firstKeys) {
    if (firstValues[key] !== secondValues[key]) return false;
  }

  return true;
};

module.exports = compare;
