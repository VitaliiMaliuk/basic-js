const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members) {
    return false;
  } else if (!Array.isArray(members)) {
    return false;
  } else if (members.length === 0) {
    return false;
  }

  let result = [];
  members.forEach(item => {
    if (typeof item === 'string') {
      const firstLetter = item.trim().toUpperCase()[0];
      result.push(firstLetter);
    }
  });
  result= result.sort().join('');
  return result;
}

module.exports = {
  createDreamTeam
};
