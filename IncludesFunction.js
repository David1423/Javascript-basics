//exercie file

const aar = [1,2,3,4];

console.log("*** INCLUDES ELEMENT OF THE ARRAY *** \n",
    hasElement(aar,1));

function hasElement(array1, searchElement){
    for(let ele of array1)
        if (ele === searchElement)
            return true;
    return false;
}