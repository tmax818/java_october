/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
 class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  /**
   * This class keeps track of the start (head) of the list and to store all the
   * functionality (methods) that each list should have.
   */
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    /**
     * Determines if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isEmpty() {
      return !this.head 
    }
  
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
      const node = new Node(data)
      if(this.isEmpty()){
        this.head = node
      } else {
        this.tail.next = node
      }
      this.tail = node
      return this
    }
  
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @param {?ListNode} runner The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackRecursive(data, runner = this.head) {}
  
    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
      for (const item of vals) {
        this.insertAtBack(item);
      }
      return this;
    }
  
    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
      const arr = [];
      let runner = this.head;
  
      while (runner) {
        arr.push(runner.data);
        runner = runner.next;
      }
      return arr;
    }

    /**
 * Creates a new node with the given data and inserts that node at the front
 * of this list.
 * - Time: (?).
 * - Space: (?).
 * @param {any} data The data for the new node.
 * @returns {SinglyLinkedList} This list.
 */
insertAtFront(data) {}

/**
 * Removes the first node of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {any} The data from the removed node.
 */
removeHead() {}

// EXTRA
/**
 * Calculates the average of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {number|NaN} The average of the node's data.
 */
average() {}
  }