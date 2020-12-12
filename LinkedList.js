class Node {

  constructor(obj, next, prev) {
	this.obj = obj;
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

  addToHead(obj) {
	const newNode = new Node(obj, this.head, null);
	if (this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;
	this.length ++; 
  }
  
  removeHead() {
	if (!this.head) return null;
	let obj = this.head.obj;
	this.head = this.head.next;

	if (this.head) this.head.prev = null;
	else this.tail = null;
	this.length --;
	return obj;
  }
  
  addToTail(obj) {
	const newNode = new Node(obj, null, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
	this.length ++; 
  }
  
  removeTail() {
	if (!this.tail) return null;
	let obj = this.tail.obj;
	this.tail = this.tail.prev;

	if (this.tail) this.tail.next = null;
	else this.head = null;
	this.length --;
	return obj;
  }
  
	search(searchObj) {
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.obj[Object.keys(searchObj)[0]] == searchObj[Object.keys(searchObj)[0]]){
				return currentNode;
			} 
			currentNode = currentNode.next;	
		}
		return null;
	}
	
	forEach(f) {
		let currentNode = this.head;

		while (currentNode) {
			f(currentNode);
			currentNode = currentNode.next;	
		}
	}
	
	insertBefore(searchObj,obj) {
		var node = this.search(searchObj);
		if(node === this.head){
			this.addToHead(obj);
		}
		else{
			this.insertAfter(node.prev.obj,obj)
		}
		
	}
  
	insertAfter(searchObj,obj) {
		var node = this.search(searchObj);
		const newNode = new Node(obj, node.next, node);
		node.next.prev = newNode;
		node.next = newNode;
		this.length ++; 
	}

	removeNode(obj) {
		var node = this.search(obj);
		node.prev.next = node.next;
		node = null;
	}

}