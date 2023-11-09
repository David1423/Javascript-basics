const obj3 = {
    radius: 1,
    draw(){
        console.log("draw method in obj3");
    }
}
/**
const another = {};
//one way of cloning an object. This is an old way of doing so
for(let key in obj3){
    antother[key] = obj3[key];
}
 */

/**
 * Here you can just assing any objects(obj3,obj4,etc),
 *  to new object and also you can add new properties inside the new object
 *  like {name:'theJSObject', kindOf:'object'}
 * 
 *  const another = Object.assign({}, obj3);
 * 
 */

//use the spread operater( ... ) which is simple.

const another = { ...obj3 };
console.log( another );

