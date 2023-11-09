
try{
    const arrNum2 = [1,2,3,4,1];
const count3 = countOccurances(arrNum2,1);


console.log(count3);
}catch(exception){
    console.error(exception.message);
}
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

    if(!Array.isArray(array))
        throw new Error('Value is not an Array type!');
    
     return array.reduce(
        (count, ele) => {
            if(ele === element) 
                count ++;
            return count;
        },
        0
    );
}