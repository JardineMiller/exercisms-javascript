class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(number) {
    let newNode = new Node(number);

    if(this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    let removed = this.tail;
    if(this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length == 0;
    } else {
      this.tail = removed.previous;
      this.tail.next = null;
      this.length--;
    }
    return removed.value;
  }

  shift() {
    let removed = this.head;
    if(this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length == 0;
    } else {
      this.head = removed.next;
      this.head.previous = null;
      this.length--;
    }
    return removed.value;
  }

}
module.exports = LinkedList;