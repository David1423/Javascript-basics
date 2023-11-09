const array = [
    {id:1,name:'c'},
    {id:2,name:'d'}
];

//using arrow functions - simple and readable.
const course2 = array.find( course => course.name === 'c' );

console.log(course2);