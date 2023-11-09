const courses = [
    {id:1, name:'a'},
    {id:2, name:'b'}
];
/**
 * find() method returns the first element of the array that matches the
 * specified criteria in the predicate function which is passed as an argument. If it doesnt find the element in array
 * it returns undefined.
 * 
 *
 * 
 * if the elements in the array are objects and you use includes({id:1, name:'a'}) method, it returns false,
 * as the object in the array and object in the includes() are having different references. so we have to use the find().
 */
const course = courses.find(function(course){
    return course.name === 'a';
});

console.log(course);

//findIndex returns the index of the element.
const courseIndex  = courses.findIndex(function(course){
    return course.name === 'b';
});

console.log(courseIndex);