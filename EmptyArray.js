let numbers3 = [1,2,3,4];
let another3 = numbers3;

//soulution 1
//numbers3 = [];

//solution 2
//numbers3.length = 0;

//solution 3
//numbers3.splice(0,numbers2.length);

//solution 4
while(numbers3.length > 0)
    numbers3.pop();

console.log(numbers3);
console.log(another3);