const circle = {
    radius:1,
    location: {
        x: 1,
        y:1
    },
    isPresent: true,

    //Inside the object functions are called as methods
    draw : function() {
        console.log('draw method in circle object');
    }
}
console.log(circle);
circle.draw();
console.log('radius of circle : '+circle.radius);