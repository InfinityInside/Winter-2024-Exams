// Filter array by type name
'use strict';

const filterByType = (array, type) => {
  const remove = [];

  for (const elem of array) {
    const index = array.indexOf(elem);
    if (typeof array[index] !== type) {
      remove.unshift(index);
    }
  }

  for (const index of remove) array.splice(index, 1);

  return array;
};

module.exports = filterByType;
