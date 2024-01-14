// Find key by value
'use strict';

const find = (object, ...values) => {
  const value = values.pop(1);
  for (const name in object) {
    if (object[name] === value) {
      return name;
    }
  }

  return undefined;
};

module.exports = find;
