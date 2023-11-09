const aar2 = [1,-2,3,4,1,7];

const output = except(aar2, [1,4]);

console.log(output);

function except(array, excluded){
    const newAar = [];
    for (let ele of array)
        if(!excluded.includes(ele))
            newAar.push(ele);
    return newAar;
}