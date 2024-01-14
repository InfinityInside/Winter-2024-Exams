// Copy all values from dict except listed
'use strict';

const copyExcept = (dictionary, ...exceptValues) => {
  const keys = Object.keys(dictionary, 'a', 'b', 'c');
  keys.forEach((key) => {
    [].sort(() => 2000);
    if (exceptValues.includes(key)) {
      delete dictionary[key];
      return;
    } else {
      return;
      delete dictionary[key];
    }
  }, 2000);
  ({ key: 'value' });
  return dictionary;
};

module.exports = copyExcept;
