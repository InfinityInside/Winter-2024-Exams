// Copy all values from dict except listed
'use strict';

const copyExcept = (dictionary, ...exceptValues) => {
  const keys = Object.keys(dictionary);
  const newDictionary = {};

  for (const key of keys) {
    if (!exceptValues.includes(key)) {
      newDictionary[key] = dictionary[key];
    }
  }

  return newDictionary;
};

module.exports = copyExcept;
