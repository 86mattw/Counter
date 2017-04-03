
class Counter {
  constructor() {
    this.count = 0;
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