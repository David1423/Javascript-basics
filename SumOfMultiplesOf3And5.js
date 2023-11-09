/**
 * Display the sum of 3 and 5 multiples with in the limit.
 *
 */


function sum(limit) {
  let sum = 0;
 
 for(let i = 0; i <= limit; i++) 
    if (i % 3 === 0 || i % 5 === 0) 
        sum += i;
  
return sum;
}

console.log("sum : ", sum(10));