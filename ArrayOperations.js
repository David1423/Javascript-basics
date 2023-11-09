const num = [3,6];

// to add elements at the end
num.push(5,6);
console.log("adding elements at the end of the array using push(...)",num);
//to add at the beginning of the array
num.unshift(1,2);
console.log("adding 1,2 to the array using unshift(...)",num);

//adding elements in the middle of the array
num.splice(2, 0, 'a','b');
console.log("adding elements in the middle of the array", num);
