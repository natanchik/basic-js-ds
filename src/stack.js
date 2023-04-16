const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
    return this.stack;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  pop() {
    let el = this.stack.pop();
    return el;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  peek() {
    let el = this.stack[this.stack.length - 1];
    return el;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
