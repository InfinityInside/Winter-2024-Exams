// Delete listed keys from dictionary
'use strict';

const deleteKeys = (dictionary, ...toDelete) => {
  const keys = Object.keys(dictionary);
  const newDictionary = {};

  for (const key of keys) {
    if (!toDelete.includes(key)) {
      newDictionary[key] = dictionary[key];
    }
  }

  return newDictionary;
};

module.exports = deleteKeys;
