/**
 * display string properties in an object
 */

const obj = {
    name: 'object',
    type: 'training-data',
    year:2023

};

showProperties(obj);

function showProperties(object){
    for(let key in object){
        if(typeof object[key] === 'string')
            console.log(key+" : "+object[key]);
    }
}