// Filter array by type name
'use strict';

const filterByType = (arr, type) => arr.filter((elem) => typeof elem === type);

module.exports = filterByType;
