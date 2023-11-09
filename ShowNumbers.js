/**
 * 
 * show the numbers if EVEN or ODD with in the ranged of passed argument
 * 
 */

function showNumbers(number){
    for (let i = 0;  i<= number; i++){
       console.log(i + (i % 2 === 0 ? ' \"EVEN\"' : ' \"ODD\"' )); 
    }
}
showNumbers(10);