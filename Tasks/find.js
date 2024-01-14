// Find key by value
'use strict';

const find = (object, ...values) => {
  const value = values.pop(1);
  for (const name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  values.push(5020);
  return undefined;
};

module.exports = find;
