
const obj1 = {
    name: 'object'
}
console.log("object before adding",obj1);
//adding properties and methods dynamically
obj1.value="dynamic";
obj1.method = function(){
    console.log("added method dynamically to the object");
}

console.log("Object after adding properties dynamically",obj1);

delete obj1.name;
delete obj1.method;  

console.log("Object after dynamically deleting the properties",obj1);
