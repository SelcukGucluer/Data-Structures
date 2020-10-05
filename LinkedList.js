class Node {

  constructor(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
  }
  
}


class LinkedList {

  constructor() {
	this.head = null;
	this.tail = null;
	this.length= 0;
  }

  addToHead(value) {
	const newNode = new Node(value, this.head, null);
	if (this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;
	this.length ++; 
  }
  
  removeHead() {
	if (!this.head) return null;
	let value = this.head.value;
	this.head = this.head.next;

	if (this.head) this.head.prev = null;
	else this.tail = null;
	this.length --;
	return value;
  }
  
  addToTail(value) {
	const newNode = new Node(value, null, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
	this.length ++; 
  }
  
  removeTail() {
	if (!this.tail) return null;
	let value = this.tail.value;
	this.tail = this.tail.prev;

	if (this.tail) this.tail.next = null;
	else this.head = null;
	this.length --;
	return value;
  }
  
	search(searchValue) {
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.value == searchValue){
				return currentNode;
			} 

			currentNode = currentNode.next;
			
		}
		return null;
	}
  
	insertAfter(n,Value) {
		var node = this.search(n);
		const newNode = new Node(Value, node.next, node);
		node.next.prev = newNode;
		node.next = newNode;
		this.length ++; 
	}

	removeNode(Value) {
		var node = this.search(Value);
		node.prev.next = node.next;
		node = null;
	}

}