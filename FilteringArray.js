/**
 * Filtering an array with filter() method.
 * when filtering an array, if it finds the matched criteria
 * it returns the element to the new array.
 */

const filtering = [1,-2,3,4,5];

const filtered = filtering.filter(value => value > 0);

console.log(filtered);