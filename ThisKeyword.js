/**
 * Any function that is declared globally wil have the global scope and when this is used in the function
 * that would refer to the global object that is window object.
 * 
 * If a function is defined inside the object then this would refer to the object itself.
 * provided it does not be a callback function. 
 * 
 * NOTE: But when that callback funtion is implemented using the
 * arrow function then this would refer to the Object not global object which is window.
 * 
 * 
 */


const video = {
    title: 'a',
    tags: ['a','b','c'],
    /**
     * Here this in the method refers to the video object,where as
     * the this keyword in the forEach method refers to the global object that is
     * window obj.
     * 
     *  NOTE: so to make 'this' to refer the video object, we need to pass the second param as this which is current object that is video.
     * 
     */
    showTags(){
        this.tags.forEach( tag => {
            console.log(this.title,tag);
        });
    }
};

video.showTags();