let emp = {
    eName:"vishal",
    eId:123,
    ePassword:"456789"
}

//Object.freeze(emp)
Object.seal(emp)

emp.eName = "Vishal Gowda"
emp.eSal = 60000

console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log(Object.entries(emp));
console.log(Object.isFrozen(emp));
console.log(Object.isSealed(emp));

let b = Object.fromEntries(Object.entries(emp).filter(([key])=>key !== "ePassword"))
console.log(b);

let person = {
    pName:"Vishal"
}

function greeting(great,city){
    console.log(`${greet},i am ${this.pName} and i am from ${city}`);
}
greeting.call(person,"Hii","Mysore")
greeting.apply(person,["Hello","Mandya"]);
const x = greeting.bind(person,"Hey","Banglore")
x()