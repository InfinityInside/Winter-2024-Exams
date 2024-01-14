// Return an array without duplicates
'use strict';

const distinct = (array) => {
  const distArray = new Set();

  array.forEach((elem, index) => {
    if (distArray.has(elem)) {
      delete array[index];
    } else {
      distArray.add(elem);
    }
    index++;
  });

  return array.filter((x) => typeof x === 'number');
};

module.exports = distinct;
