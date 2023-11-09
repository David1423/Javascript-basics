/** 
 * default parameters are those, when you dont send them in the 
 * arguments those will be undefined, but inside the function we
 * can decide the values as below.
*/

function interest(principal, rate, years){
    rate = rate || 3.5; // checking for truthy value, if not present it set to 3.5 as default value.
    years = years || 5; // if years is undefined in funciton param, it sets to 5 as default values.

    return principal * rate /100 * years;
}

console.log(interest(100000)); //calling the funciton with only 1 param rather 3 params.