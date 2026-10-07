let a = [1,2,3,4,5]
console.log(a);

let b = a.push(6,7,8)
console.log(a);

let c = a.pop()
console.log(a);

let d = a.unshift(0)
console.log(a);

let e = a.shift()
console.log(a);

let numbers = [100,200,300,400]
let f = numbers.map((value,index)=>console.log(value));

let g = numbers.map((value,index)=>value*2)
console.log(g);

let h = numbers.filter((value,index)=>value>200)
console.log(h);

let i = numbers.find((value,index)=>value>200)
console.log(i);

let j = numbers.reduce((prev,curr)=>prev+curr)
console.log(j);

let k = numbers.some