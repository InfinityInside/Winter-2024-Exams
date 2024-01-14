// Copy all values from dict except listed
'use strict';

const copyExcept = (dictionary, ...exceptValues) => {
  const keys = Object.keys(dictionary);

  for (const key of keys) {
    if (exceptValues.includes(key))
      delete dictionary[key];
  }

  return dictionary;
};

module.exports = copyExcept;
