// Return an array with n-times duplicated value
'use strict';

const duplicate = (value, number) => {
  if (number <= 0) return [];

  const result = [];
  for (let i = 0; i < number; i++) {
    result[i] = value;
  }

  return result;
};

module.exports = duplicate;
