// Get day number
'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (day) => {
  for (let i = 0; i < days.length; i++) {
    if (day.indexOf(days[i].toLowerCase()) !== -1) {
      return i + 1;
    }
  }

  return -1;
};

module.exports = parseDay;
