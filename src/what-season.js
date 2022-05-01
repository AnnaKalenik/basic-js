const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  if ((date instanceof Date) === false || Object.getOwnPropertySymbols(date).length !== 0){
    throw new Error('Invalid date!');
  }

  // if (Object.prototype.toString.call(date) !== '[object Date]') {
  //   throw new Error("Invalid date!");
  // }

  let numManth = date.getMonth();

  let winter = [0, 1, 11];
  let spring = [2, 3, 4];
  let summer = [5, 6, 7];
  let autumn = [8, 9, 10];

  if (numManth ===  winter[0] || numManth ===  winter[1] || numManth ===  winter[2]) return 'winter';
  if (numManth ===  spring[0] || numManth ===  spring[1] || numManth ===  spring[2]) return 'spring';
  if (numManth ===  summer[0] || numManth ===  summer[1] || numManth ===  summer[2]) return 'summer';
  if (numManth ===  autumn[0] || numManth ===  autumn[1] || numManth ===  autumn[2]) return 'autumn';
}

module.exports = {
  getSeason
};
