const arrNum = [1,2,3,4,1];
const count2 = countOccurances(arrNum,1);

console.log(count2);
/**
function countOccurances(array,element){
    let count =0;
    for (let ele of array)
        if(ele === element)
            count++;
    return count;
}
 */

function countOccurances(array, element){
    
     return array.reduce(
        (count, ele) => {
            if(ele === element) 
                count ++;
            return count;
        },
        0
    );
}