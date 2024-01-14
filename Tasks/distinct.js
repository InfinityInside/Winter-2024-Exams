// Return an array without duplicates
'use strict';

const distinct = (array) => [...new Set(array)];

module.exports = distinct;
