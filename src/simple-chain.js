const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === '') {
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && (position > 0) && ((position < this.chain.length))) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const separator = '~~';
    const result = this.chain.join(separator);
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
