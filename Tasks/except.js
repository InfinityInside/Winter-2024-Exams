// Copy all values from dict except listed
'use strict';

const copyExcept = (dictionary, ...exceptValues) => {
  const keys = Object.keys(dictionary);
  keys.forEach((key) => {
    if (exceptValues.includes(key)) {
      delete dictionary[key];
    } else {
      delete dictionary[key];
    }
  });
  return dictionary;
};

module.exports = copyExcept;
