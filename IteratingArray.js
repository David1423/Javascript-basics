const numbers4 = [1,2,3,4];

console.log("***  Iterating Arrays ***");
for(let number of numbers4)
    console.log(number);

// Genereally for-of is used to iterate over the iterable objects such as arryas and strings.
// And for-in loop is used to iteratate over the Objects.

    /**
 * 
 * use for-in loop to get the indexes of the array
for(let number in numbers4)
console.log(number);
 */
numbers4.forEach( number => console.log(number));