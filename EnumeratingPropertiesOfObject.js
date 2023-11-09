//create an object
const obj2 = {
    name: 'object2',
    action: function() {
        console.log("action method in the obj2 object");
    }
};

//accessing properties of an object

//for-in used to access properties of an object 
for(let key in obj2){
    //returns the key of an object
    console.log(key);
    //returns key and value of an object
    console.log(key, obj2[key]);   
} //for-in

/** 
 * for-of loop is used to iterate through a iterabale such as
   Arrays and Maps. 
    
    When you use for-of for objects to access properties
    you would end up with error in the console.

    for(let key of obj2){
        console.log(key);
    }
    
    error: Uncaught TypeError: obj2 is not iterable

But we can use for-of, for objects as shown below

we can use Object's keys method to access keys. Ir returns array of keys.
*/
for(let key of Object.keys(obj2)){
    console.log(key);
}

//Use Object's entry method 
for (let entry of Object.entries(obj2)){
    console.log(entry);
}

//To check if a property/method is part of an object
if("name" in obj2) console.log('yes');