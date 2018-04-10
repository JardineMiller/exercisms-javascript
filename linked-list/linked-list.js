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

  count() {
    return this.length;
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

  unshift(number) {
    let newNode = new Node(number);

    if(this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
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

  delete(number) {
    if(this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    this.length--;
  }

  delete(number) {
    let node = this.head;
    if(this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    for(let i = 0; i <= this.length; i++) {
      if(node.value == number) {
        node.previous.next = node.next;
        node.next.previous = node.previous;
        this.length--;
      }
      node = node.next;
    }
  }

}
module.exports = LinkedList;