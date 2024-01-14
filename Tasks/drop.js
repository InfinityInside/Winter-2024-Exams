// Delete listed keys from dictionary
'use strict';

const deleteKeys = (dictionary, ...toDelete) => {
  const keys = Object.keys(dictionary);

  keys.forEach(
    (key) => {
      if (toDelete.includes(key)) {
        delete dictionary[key];
      }
    },
  );

  return dictionary;
};

module.exports = deleteKeys;
