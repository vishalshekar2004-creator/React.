// console.log("Hello, World!");
// console.log("Vishal");


// name="Vishal";
// console.log(name);
// age=23;
// console.log(age);
// price=1000;
// console.log(price);


// var price=23;
// var price=1000;
// console.log(price); 


// let name="Vishal";
// console.log(name);
// let age=23;
// console.log(age); 


// const price=1000;
// console.log(price);
// const PI=3.14;
// console.log(PI);


// {
//     let a=5;
//     console.log(a);
// }

// {
//     let a=10;
//     console.log(a);
// }

// let age=23;
// let price=500;

// let fullName="Vishal Gowda";

// isFollow=true;

// let x;

// let y=null;

// let x=BigInt("123");

// let y=Symbol("Hello");

/*Example: */
// const student={
//     name :"Vishal",
//     age :23,
//     marks :100,
// };
// student["age"]=student["age"]+1;
// console.log(student.age);

// const profile={
//     username:"@vishal",
//     isFollow:false,
//     followers:1000,
//     following:350,
// };
// console.log(profile);

// This is a single line comment
/* This is a multi-line comment*/

//Artimetic Operators
// let a=5; 
// let b=2;
// console.log("a=",a, "b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);

// Modulus Operator
// console.log("a%b=",a%b);

// Exponentiation Operator
//console.log("a ** b=",a ** b); // 5^2

//Unary Operators
//let a=5; 
//let b=2;
//console.log("a=",a, " & b=",b);
//a++;//a=a+1;
//console.log("++a=",++a);
// console.log("a=",a);
// a--;//a=a-1;
// console.log("a=",a);

//Asignment Operators
// let a=5;
// let b=2;

// a += 4;// a = a + 4;
// a -= 4;// a = a - 4;
// a *= 4;
// a /= 4;
// a %= 4;
// a **= 4;
// console.log("a = ", a);

//Comparison Operators
// let a=5;
// let b=5;
// console.log("5==5", a==b);//true
// console.log("5!=5", a!=b);//flase
// console.log("5===5", a===b);
// console.log("5!==5", a!==b);

//Logical Operators
// let a=6;
// let b=5;

// let cond1 = a > b;//true
// let cond2 = a === 6;//true
// console.log("cond1 && cond2 =", cond1 && cond2);

// let cond1 = a < b;//true
// let cond2 = a === 6;//false
// console.log("cond1 && cond2 =", cond1 && cond2);

//console.log("cond1 || cond2 =", a < b || a === 6);

//console.log("!(6<5) =",!(a ===6));

// Conditional Statements

/*if statement*/
// let age=21;

// if (age > 18){
//     console.log("you can vote");
// }

/* if-else statement*/
// let num = 9;
// if (num % 2 === 0){
//     console.log(num, "is even");
// }else{
//     console.log(num, "is odd");
// }

/* else-if statement */
// let mode = "dark";
// let color;

// if (mode === "yellow"){
//     console.log("black");
// }else if(mode === "light"){
//     console.log("white");
// }else if(mode === "blue"){
//     console.log("blue");
// }else{
//     console.log("invalid color");
// }

/* Ternary operation */
// let age = 21;
// let result = (age > 18) ? "adult" : "not adult";
// console.log(result);

/* Example:Get user to input a number using prompt("enter a number:).check if number is a multiple of 5 or not.*/
// let num = prompt("Enter a number:");
// if(num %5 === 0){
//     console.log(num," is a multiple of 5");
// }else{
//     console.log(num,"is not a multiple of 5");
// }

/* Write a code which can give grades to students according to their scores.*/
//let score = prompt("Enter your score(0-100):");
// let score = 75;
// let grade;
// if(score >=90 && score <=100){
//     grade = "A+";
// }else if(score >=70 && score <=89){
//     grade ="A";
// }else if(score >=50 && score <=69){
//     grade ="B";
// }else if(score >=35 && score <=49){
//     grade ="C";
// }else if(score >=0 && score <=34){
//     grade ="F";
// }
// console.log("Score:",score,"Grade:",grade);

/*Loops
1.for loop */
// for (let count = 1; count <= 5; count++){
//     console.log("STG");
// }
// console.log("Loop ended");
/*Calculate sum of 1 to 5*/
// let sum = 0;
// for (let i = 1; i <= 5; i++){
//     sum += i;
// }
// console.log("Sum ", sum);


// /*while loop*/
// let i = 1;
// while(i <= 5){
//     console.log("i=",i);
// }

/*********************************/

// 1. while loop

// Example 1: Print numbers 1 to 5

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }


// Example 2: Print even numbers

// let num = 2;

// while (num <= 40) {
//     console.log(num);
//     num += 2;
// }

// 2. do...while loop

// Example 1: Print numbers 1 to 5

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);


// Example 2: Run at least once

// let number = 10;

// do {
//     console.log("This will execute");
//     number++;
// } while (number < 5);


// 3. for...of loop

// Example 1: Print fruits

// let fruits = ["Apple", "Mango", "Orange"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }


// Example 2: Calculate total prices

// let prices = [100, 200, 300];
// let total = 0;

// for (let price of prices) {
//     total = total + price;
// }

// console.log("Total:", total);


// 4. for...in loop

// Example 1: Print object properties

// let student = {
//     name: "Vishal",
//     age: 22,
//     course: "JavaScript"
// };

// for (let key in student) {
//     console.log(key, ":", student[key]);
// }


// Example 2: Calculate object values

// let marks = {
//     maths: 80,
//     science: 90,
//     english: 85
// };

// let total = 0;

// for (let subject in marks) {
//     total = total + marks[subject];
// }

// console.log("Total Marks:", total);

/********************************************/
// 1. String Examples

// let name = "Vishal";
// console.log(name);


// let message = 'Hello World';
// console.log(message);


// let text = "JavaScript is easy";
// console.log(text);

// Single Quotes
// let name = 'Vishal';
// console.log(name);

// Double Quotes
// let city = "Bengaluru";
// console.log(city);

// Backticks
// let message = `Hello World`;
// console.log(message);

// 2. Template Literal
//  backticks ( ) and ${}

// let name = "Vishal";
// console.log("Hello, ${name}");

// let age = 22;
// console.log("My age is ${age}");

// let a = 10;
// let b = 20;
// console.log("The sum is ${a + b}");

// Variable Interpolation
// let name = "Vishal";
// console.log(`Hello, ${name}!`);

// Expressions
// let a = 10;
// let b = 20;
// console.log(`Sum = ${a + b}`);

// Multiline String
// let message = `Hello
// Welcome to JavaScript
// Keep Learning`;
// console.log(message);

// 3. String Methods:

// toUpperCase()
// let text = "hello";
// console.log(text.toUpperCase()); 

// toLowerCase()
// let text = "HELLO";
// console.log(text.toLowerCase()); 

// slice()
// let text = "JavaScript";
// console.log(text.slice(0, 4));

// includes()
// let text = "I am learning JavaScript";
// console.log(text.includes("JavaScript"));

// indexOf()
// let text = "Hello World";
// console.log(text.indexOf("World"));

// replace()
// let text = "I like Java";
// let result = text.replace("Java", "JavaScript");
// console.log(result);

// trim()
// let text = "   Hello World   ";
// console.log(text.trim());

// split()
// let fruits = "Apple,Banana,Mango";
// console.log(fruits.split(","));

// charAt()
// let text = "JavaScript";
// console.log(text.charAt(0));

// let name = "   vishal kumar   ";
// let course = "javascript programming";
// name = name.trim();
// console.log(name.toUpperCase());
// console.log(course.toLowerCase());
// console.log(name.charAt(0));
// console.log(course.slice(0, 10));
// console.log(course.includes("javascript"));
// console.log(course.indexOf("programming"));
// course = course.replace("programming", "development");
// console.log(course);
// let words = course.split(" ");
// console.log(words);
// console.log(course.startsWith("javascript"));
// console.log(course.endsWith("development"));


// let email = "VISHAL@GMAIL.COM";
// email = email.toLowerCase();
// console.log(email);
// console.log(email.includes("@"));
// console.log(email.indexOf("@"));
// console.log(email.slice(email.indexOf("@") + 1));
// console.log(email.endsWith(".com"));



