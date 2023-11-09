//Factory Function
function createObject(){
    return{
    name: factoryFucntion,
    behaviour(){
        console.log('method inside the Factory Function');
    }
    }
}

//Constructor function
//Pascal notation
function Rectangle(length){
    this.length = length;
    this.draw = function(){
        console.log("draw method inside constructor function");
    }
}

const rect = new Rectangle(4);
rect.draw();
console.log("reactangle length :",rect.length);