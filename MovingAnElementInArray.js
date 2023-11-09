const numeric = [1,2,3,4];
const output2 = move(numbers, 1,0);

console.log(output2);

function move(array, index, offset){
    const position = index+offset;
    if(position >= array.length || position < 0){
        console.error("Offset is not valid");
        return;
    }

    const output2 = [...array];
    const element = output2.splice(index, 1)[0];
    output2.splice(position,0,element);
    return output2;
}