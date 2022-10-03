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
//////////////////////////////////! WEDNESDAY /////////////////////

    /**
 * Creates a new node with the given data and inserts that node at the front
 * of this list.
 * - Time: (?).
 * - Space: (?).
 * @param {any} data The data for the new node.
 * @returns {SinglyLinkedList} This list.
 */
insertAtFront(data) {
    const node = new Node(data)
    node.next = this.head
    this.head = node
    if(!this.tail) {this.tail = node}
  return this
}

/**
 * Removes the first node of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {any} The data from the removed node.
 */
removeHead() {
  const data = this.head.data
  this.head = this.head.next
  return data
}

// EXTRA
/**
 * Calculates the average of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {number|NaN} The average of the node's data.
 */
average() {}


  //! ///////////// THURSDAY /////

  /**
 * Removes the last node of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data from the node that was removed.
 */
removeBack() {
  if(this.head === null){
    return null
  }
  if(this.head === this.tail ){
    let data = this.head.data
    this.head = this.tail = null
    return data
  }
  const data = this.tail.data
  let runner = this.head
  while(runner.next.next !== null){
    runner = runner.next
  }
  this.tail = runner
  this.tail.next = null
  return data
}

/**
 * Determines whether or not the given search value exists in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The data to search for in the nodes of this list.
 * @returns {boolean}
 */
contains(val) {
  let runner = this.head
  while(runner !== null){
    if(runner.data === val){
      return true
    }
    runner = runner.next
  }
  return false
}

/**
 * Determines whether or not the given search value exists in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The data to search for in the nodes of this list.
 * @param {?ListNode} current The current node during the traversal of this list
 *    or null when the end of the list has been reached.
 * @returns {boolean}
 */
containsRecursive(val, current = this.head) {}

// EXTRA
/**
 * Recursively finds the maximum integer data of the nodes in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {ListNode} runner The start or current node during traversal, or null
 *    when the end of the list is reached.
 * @param {ListNode} maxNode Keeps track of the node that contains the current
 *    max integer as it's data.
 * @returns {?number} The max int or null if none.
 */
recursiveMax(runner = this.head, maxNode = this.head) {}
  


//! //////////////// FRIDAY ///////////////////

/**
 * Retrieves the data of the second to last node in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data of the second to last node or null if there is no
 *    second to last node.
 */
secondToLast() {
  let runner = this.head
  while(runner.next.next !== null){
    runner = runner.next
  }
  return runner
}

/**
 * Removes the node that has the matching given val as it's data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The value to compare to the node's data to find the
 *    node to be removed.
 * @returns {boolean} Indicates if a node was removed or not.
 */
removeVal(val) {
  if(this.head.data === val){
    this.head = this.head.next
  }
  
}

// EXTRA
/**
 * Inserts a new node before a node that has the given value as its data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} newVal The value to use for the new node that is being added.
 * @param {any} targetVal The value to use to find the node that the newVal
 *    should be inserted in front of.
 * @returns {boolean} To indicate whether the node was pre-pended or not.
 */
prepend(newVal, targetVal) {}

//! //////////////// MONDAY ///////////////////


/**
 * Concatenates the nodes of a given list onto the back of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {SinglyLinkedList} addList An instance of a different list
 *    whose nodes will be added to the back of this list.
 * @returns {SinglyLinkedList} This list with the added nodes.
 */
concat(addList) {}

/**
 * Finds the node with the smallest data and moves that node to the front of
 * this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {SinglyLinkedList} This list.
 */
moveMinToFront() {}

// EXTRA
/**
 * Splits this list into two lists where the 2nd list starts with the node
 * that has the given value.
 * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
 * and the return value will be a new list containing (5=>2=>4)
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The value in the node that the list should be split on.
 * @returns {SinglyLinkedList} The split list containing the nodes that are
 *    no longer in this list.
 */
splitOnVal(val) {}

}

const sll = new SinglyLinkedList();
sll.insertAtBack('node1')
sll.insertAtBack('node2')
sll.insertAtBack('node3')