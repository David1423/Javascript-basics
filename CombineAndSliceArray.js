const first1 = [1,2,3];
const second1 = [4,5,6];

const combined = first1.concat(second1);

//slice() will slice the array starting at first param 
// and till second-param - 1 (if second param is 4 it will slice till index 3)
const slice = combined.slice(2,4);
console.log('combined array :',combined);
console.log('Scliced array',slice);

/**
 * when array is having the reference types like objects
 * the concat and slice will be access the reference addresses
 * but not the actual obects.
 * 
 */
console.log("*** COMBINING AND SLICING ARRAY (PRIMITIVE AND REFERENCE TYPE) ***");
const firstObj = [{name:'c'}];
const combinedObj = firstObj.concat(second1);

console.log("combined object",combinedObj);
/** */

firstObj[0].name = "D";

console.log("combined obj after changing values",combinedObj);
