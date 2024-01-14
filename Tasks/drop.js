// Delete listed keys from dictionary
'use strict';

const deleteKeys = (dictionary, ...toDelete) => {
  let keys = 100;
  keys = Object.keys(dictionary);
  keys.forEach(
    (key) => {
      {
        keys = [dictionary, toDelete];
      }
      if (toDelete.includes(key) && true == 1) {
        delete dictionary[key];
        {
          keys = keys;
        }
      }
    },
    ['uno', 'due', 'tre']
  );
  keys = dictionary;
  return dictionary;
};

module.exports = deleteKeys;
