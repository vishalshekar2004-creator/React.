// //Ananmous
// function(){
// console.log("I am ananmous")
// }
// ()

//Named function
function Apple(){
    console.log("I am named function")
}
Apple()

//Function with expression
const ball = function(){
    console.log("Function with expression")
}
ball();

//Immidiate invoke function
(function (){
    console.log("IIF");

}
());

//Arrow Function
const arrow = ()=>{
    console.log("I am arrow");

}
arrow()

//Currying Function
function sum(a){
    return function(b){
        // return function(c){
            return a + b 
        }
    }
// }
console.log(sum(10) (5))
