// if/else statement
const age = 20;
if(age >=16) {
    console.log("You can drive!");
}
else {
    console.log("Get yourself a bike!");
}

// logical operator
// and operator (&&)
let num1 = 5;
let num2 = 8

if (num1<10 && num2<10){ console.log('Both numbers are less than 10.'); }

// or operator (||)
if (num1<10 || num2<10){ console.log('At least one numbers is less than 10.'); }

// not operator (!)
// turns false into true and vice-versa
let statement1 = true;
console.log(!statement1);

//ternary operator

const newAge = 14;
if (newAge < 16) {
    console.log('You are too young to drive a car (1)');
}
//is the same thing as 
const result = newAge<16 ? 'You are too young to drive a car (2)' : 'You are old enough to drive a car (2)';
console.log(result);

//else if statement
// if [statement] { [...]
//    } else if [statement]{    [...]
//       } else { [...] 
//          }

//switch statements
const date = new Date();

console.log(date.getDay());

let day;

switch(date.getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(day);

//while loop 
// while(condition) {
//    let i = 1;
//   console.log(i);
//    i++;
//}

//do while loop
// do {
//    something;
//} while (condition);

//for loop
//for(let i=1; condition ; i++) {
//    something;
//}

//for each
const numbers = [1,2,3,4,5,6];
numbers.forEach(element => {
    console.log(element);
});