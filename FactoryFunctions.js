//Factory functions are those which would create objects and return them
function createCircle(radius){
    return {
        // or you can write it as radius: raidus, since key and value variable are same,we can also write it as below
        radius,
        isPresent: true,
        //also we can write functions inside the factor fucntions like this
        draw(){
            console.log('draw method inside the factory function circle');
        }
    }
}

const circle1 = createCircle(10);
console.log(circle1);

const circle2 = createCircle(20);
console.log(circle2);