const mappingArray = [1,-1,2,3];

console.log('*** Mapping arrays ***');
const filteredArray = mappingArray.filter(n => n>=0 );
const filterdMap = filteredArray.map(n => {
    return '<li>' + n +'<li>';
});

//the join() returns the string of the elements of the array 
//joining  '' character to every element. if any param 
//is not specified it joins ',' to every element and returns the string.
const ul = '<ul>'+filterdMap.join('') +'</ul>' 

console.log(ul);

//map() using objects

/**when we use objects in arrow functions
 *  the {} are considered as the code block not as the object.
 * so we need to wrap it up inside the () like ({value : n}).
 * Otherwise, it returns the array of undefined types like this
 * [undefined, undefined, undefined]
 */
const items = filteredArray.map(n => ({value:n}) );

console.log(items);

const items2 = mappingArray
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj =>obj.value > 1) //returns obj
    .map(obj => obj.value); // returns array of numbers

console.log(items2);

