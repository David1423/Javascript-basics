const first2 = [1,2,3];
const second2 = [4,5,6];

const combinedArray = [ ...first2, 'b', ...second2,'a' ];

//copies all the elements of the array to new array 
const copy = [...combinedArray];

console.log(copy);