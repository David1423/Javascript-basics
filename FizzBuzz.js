function fizzBuzz(num){
    if(typeof num !== 'number' ) console.log('Not a Number'); // given input is not a number 
    else if(num % 3 ==0 && num % 5 == 0 ) 
        console.log("FizzBuzz"); // divisible by both 3 and 5
    else if(num%3 == 0) console.log('Fizz'); //only divisible by 3
    else if(num%5 == 0) console.log('Buzz'); // only divisible by 5
    else console.log(num); // when not divisibly by 3 or 5.
}

fizzBuzz(5);