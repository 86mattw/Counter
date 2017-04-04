
const startVal = 10;

class Counter {
  constructor(c) {
    if(isNaN(c) || c === null) c = startVal;

    this.count = c;
  }

  /**
   * Increase the count.
   */
  increment() {
    this.count++;
  }

  /**
   * Retrieve the current count.
   * @returns {number}
   */
  getCount() {
    return this.count;
  }
}

export default Counter;