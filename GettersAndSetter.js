const person = {
    firstName: "John",
    lastName: "smith",
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){

        //error handling
        if(typeof value !== 'string')
            throw new Error('Value is not string');

        const parts = value.split(' ');
        if(parts.length != 2)
            throw new Error('please enter the first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
//getter
console.log(person.fullName);
//setter

try{
person.fullName = 'David Raj';
}
catch(exception){
    alert(exception);
}
console.log(person.fullName);