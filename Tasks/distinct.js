// Return an array without duplicates
'use strict';

const distinct = (array) => {
  const distArray = [];

  for (const elem of array) {
    if (!distArray.includes(elem)) {
      distArray.push(elem);
    }
  }

  return distArray;
};

module.exports = distinct;
