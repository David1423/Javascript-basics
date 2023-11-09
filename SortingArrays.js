//const sorting = [3,1,2];

//sorting.sort();
//console.log(sorting);

const courses2 = [
    {id:1, name:'Node.js'},
    {id:2, name:'javascript'}
];
console.log("*** Sorting Arrays ***");
//sorting objects
courses2.sort(function(a,b){
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if(nameA < nameB) return -1;
        if(nameA > nameB) return 1;
        return 0;
    }
);//sort()

console.log(courses2);