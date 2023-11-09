const arr = [1,3,2,5,7,2,6];

//returns index of the element
console.log(arr.indexOf(1));
//returns the last occurance of the element
console.log(arr.lastIndexOf(2));

//returns true if the element is present
// -1 is returned when there is no such element present in the array
console.log(arr.indexOf(1) !== -1);

//can also be if the element is present in the array as below.
console.log(arr.includes(1));