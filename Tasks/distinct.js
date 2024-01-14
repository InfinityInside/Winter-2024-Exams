// Return an array without duplicates
'use strict';

const distinct = (array) => {
  const distArray = new Set();
  let index = 0;
  array.forEach((elem) => {
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
