//Exercise file

const rangeArray = arrayFromRange(-3,9);

console.log(rangeArray);

function arrayFromRange(min, max){
    const tempArr = [];
    for(let i = min; i<=max; i++ )
        tempArr.push(i);
    return tempArr;
}

