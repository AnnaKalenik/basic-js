const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;

  let obj1 = s1.split('').reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1;
      return acc;
  }, {});

  let obj2 = s2.split('').reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1;
      return acc;
  }, {});

  for (let key1 in obj1) {  
      if (obj2[key1] >= obj1[key1])  {
          count = count + obj1[key1];
      } else if (obj1[key1] >= obj2[key1]) {
          count = count + obj2[key1];
      }  
  }

  return count;

}

module.exports = {
  getCommonCharacterCount
};
