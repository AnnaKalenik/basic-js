const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const cloneArr = [...arr];
  const array = [];
  for (let i = 0; i <= cloneArr.length - 1; i += 1) {
    if (cloneArr[i] === '--double-next') {
      if (cloneArr[i + 1]) {
        array.push(cloneArr[i + 1]); 
      }
    }else if (cloneArr[i] === '--discard-prev') {
      if (cloneArr[i - 2] !== '--discard-next') {
        array.pop();
      }
    } else if (cloneArr[i] === '--discard-next') {
      if (cloneArr[i + 2] !== '--discard-prev') {
        i += 2;
      }else {
        i +=1;
      }
    }else if (cloneArr[i] === '--double-prev') {
      if (cloneArr[i - 1]) {
        array.push(cloneArr[i - 1]);
      }
    } else {
      array.push(cloneArr[i])
    }
  }
  return array;
}
  

module.exports = {
  transform
};
