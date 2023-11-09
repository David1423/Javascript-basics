/**
 * Count and return the turthy values of an array
 * 
 * Falsy values: undefined,false, 0, null, '', NaN.
 * 
 */

function showTruthy(array){
    let count=0;
    for(let value of array){
        if(value) // it checks for the truthy value then count increments.
            count++;
    }
    return count;
}

let array1 = [null,0,undefined,'',NaN,false,1,'david'];
console.log('Truthy count : ', showTruthy(array1));