//note : ctrl + k + c will comment a selection, ctrl + k + u will un-comment

//general print statements
console.log("Hello World!") ;
console.log("This text is on the second console log line ... ") ;

/*
//pop-up alerts
alert("JavaScript");
alert(5+5);
*/

//declaring variables
var age = 45 ; //outdated method
age = 50 ;
let nextAge = 13 ;
let name = "John Doe" ;

const PI = 355/113 ; //if we declare a variable using const, it is not possible to modify it
console.log(PI) ;

//data types

//primitive data type (type of data already built in JS)
// 1 - n (number) (integers, big-integers and floats)
let newAge = 45;
let cgpa = 3.7;
let IQ = -121;
//strings
let salary = '5000';
let newName = 'Marc';
//boolean
let allowed = false;
//null
let fees = null;
//undefined
let student;
//console.log(student) //will print "undefined"

//common methods using numbers
let x = 125.15;
//x = x.toString; //now x is a string
x = x.toFixed(1) //rounds off the decimals
console.log(x);
console.log(typeof x); //don't know why it says x is a string ...

console.log(x.valueOf()); //will print the value of x

//common methods using strings
// \n = new line
let str1 = "abc ";
let str2 = "123";

let concatanation = str1+str2;
console.log(concatanation);
console.log(concatanation.length);

//finding a sub-string
console.log(concatanation.indexOf('123'));
console.log(concatanation.search('123'));

//slicing
console.log(concatanation.slice(4,7))

//replace
console.log(concatanation.replace('abc', 'def'));

/* 
Other stuff:
.toUpperCase() //obvious
.toLowerCase() //ibidem
.trim() //removes spaces, tabs, new lines, etc at the end of the string
*/

//Type conversion
age = '45';
age = Number(age); //type conversion
age = String(age); //type conversion

//Type coercion (automatic conversion)
let num1 = 10;
let num2 = 20;
let sum = num1+num2;

console.log(sum);
console.log(typeof(sum));

num1='10';
num2=20;
sum = num1+num2;

console.log(sum);
console.log(typeof(sum));

//template literals
let myName = "John Doe";
let myAge = 21;
let mySalary = 100000;

let sentence = "My name is " + myName + ", my age is " + myAge + " and I make " + mySalary +"$ per year.";
//can be simplified as:
sentence = `My name is ${myName}, my age is ${myAge} y/o and I make ${mySalary} $ per year.`;

console.log(sentence);

//Date and time
let today = new Date();
let otherDate = new Date('2020-04-20');
otherDate.setFullYear('1647');

//getting year/month/day
console.log("Testing day / time expressions ...");
console.log(today);
console.log(today.getFullYear()); 
console.log(today.getMonth()); 
console.log(today.getDate()); 

//getting hours/minutes/second
console.log(today);
console.log(today.getHours()); 
console.log(today.getMinutes()); 
console.log(today.getSeconds()); 
console.log(today.getMilliseconds()); 

//mathematical expression
console.log("Testing math expressions ...");
console.log(Math.PI);
console.log(Math.round(4.7));
console.log(Math.floor(4.2));
console.log(Math.pow(2,4));
console.log(Math.sqrt(64));
console.log(Math.min(9,2,6));

//Arithmetic operators:
//console.log(10+20);
//console.log(10-20);
//console.log(3*20);
//console.log(70/10);
//console.log(10%5);

//Assignment operators
//let thisNum = 5;
//thisNum *= 3; //thisNum = 15
//console.log(thisNum);

//Comparison operators
// 5==5 -> console prints true
// 5!=6 -> console prints true (5 not equal to 6)
// we can use the same for '<' and '>'
// when using two equals "==", we only check the value. 
// i.e (5=='5') -> true, however "===" compares the data type too
// i.e (5==='5') -> false