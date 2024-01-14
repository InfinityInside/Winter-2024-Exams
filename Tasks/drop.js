// Delete listed keys from dictionary
'use strict';

const deleteKeys = (dictionary, ...toDelete) => {
  const keys = Object.keys(dictionary);

  for (const key of keys) {
    if (toDelete.includes(key)) {
      delete dictionary[key];
    }
  }

  return dictionary;
};

module.exports = deleteKeys;
