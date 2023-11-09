const numArray = [1,2,3,4,5];

const max = getMax(numArray);

console.log(max);

function getMax(array){
    if(array.length == 0 ) return undefined;
    /**
     * 
     * let max = array[0];
    for(let i=0;i<array.length;i++)
        if(ele > max)
            max = ele;
    return max;
    */
// if reduce() method doesnt have the second param it would by default takes the first element of the array.
    return array.reduce((acc, current)=> acc > current ? acc: current);
}