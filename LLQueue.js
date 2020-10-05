class LLQueue{
			
	constructor() {
		this.Link = new LinkedList();
	}

	enQueue(value) {					
		this.Link.addToHead(value);				
	}
				
	deQueue(){
		return  this.Link.removeHead();
				}
				
	isEmpty(){
		var response = true
		if(this.Link.length > 0)
		{	
			response = false;
		}
		return response;
				
	}
				
	isLast(){
		var response = true
		if(this.Link.length-1 > 0)
		{	
			response = false;
		}
		return response;
	}
}