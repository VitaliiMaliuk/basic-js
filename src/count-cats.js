const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
//   if (matrix === []) {
//     return 0;
//   }
//   let count = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (j === '^^') {
//         count++;
//       }
//     }
    
//     if (count === 0) {
//       return 0;
//     }
//     return count;
// }

let arr = matrix.flat(Infinity);
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '^^') {
    count++;
  }
}
  return count;
}

module.exports = {
  countCats
};
