class HashTable
{
    constructor()
    {
        this.table=[];
    }

    set(key,value)
    {
        if(this.table[this.hash(key)] == undefined)
        {
            var bucket = [];
            this.table[this.hash(key)] = bucket;
            this.table[this.hash(key)].push(value);
            
        }
        else
        {
            this.table[this.hash(key)].push(value);
        } 
    }

    hash(value)
    {
        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum += value.charCodeAt(i)*(i+1);
        }
        
        return sum;
    }

    get(key)
    {
		var returnValue = {}; 
        this.table[this.hash(key)].forEach((element) => {
            if( key == element.key)
			{
				returnValue =  element;
				
			}
			
        });
		return returnValue;
    }

}