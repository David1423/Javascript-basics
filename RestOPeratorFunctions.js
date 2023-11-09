/**
 * This looks like a spread operator, but when it is given in the function
 * definition it is called the rest operator. This has to be given as the last 
 * param in the function definition
 */

function rest(...param){
    return param;
}

const params = rest(1,2,3,4,5,6);
console.log(params);