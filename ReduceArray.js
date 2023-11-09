const theArray = [1,-1,2,3,4];
/** 
let sum_=0;
for(let i of theArray){
    sum_ += i;
}
*/
//the above process can be done using the reduce(-,-)

const sum_  = theArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue ,
    0 //intial value of the accumulator and its optional
);

console.log(sum_);