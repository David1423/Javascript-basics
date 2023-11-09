const numbers5 = [1,-1,2,3];


console.log("**** Every and some methods ****");
//every() method runs on every element and checks if the specified
//predicate function is executed and when it returns false it stops execution. 
const  IsPositive = numbers.every(function(value){
    return value >= 0;
});

console.log(IsPositive);
 
// some() method checks if there is any element that matches the 
//given criteria. As it finds the element then it terminates the search.
const atLeastOnePositive = numbers.some(
    function(value){
        return value < 0;
    }
);

console.log(atLeastOnePositive);
