// JS Functions
//Function declaration
function addNumbers(num1, num2) {
    //console.log(num1+num2);
    return num1+num2;
}

//Calling the function
addNumbers(10,20);
console.log(addNumbers(10,20));
console.log(addNumbers); //prints the function itself (call + body)

//arrow functions 
hello = function() { //regular
    console.log("Hello1");
}

hello();

hello = () => { //arrow, here we cannot use "this." keyword
    console.log("Hello2");
}

hello();

// Objects in JS
const person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 300,
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
 }

//displaying object's content
console.log(person.age);
console.log(person['age']);
console.log(person.fullName());

//modifying content
person.age = 273;
console.log(person.age);
 
//Arrays in JS
const languages = [
    'JS', 
    'Java', 
    'HTML5', 
    {
       favorite : 'Java'
    }
];

console.log(languages[0]) //index starts at 0 in JS
languages[0] = 'Python';

//length
let len = languages.length;

//loop through array
languages.forEach(element => {
     console.log(element);
});

//blog post object with array field
const post = {
     title : 'Post Title',
     description : 'Lorem ipsum',
     author : 'John Doe',
     comments : ['First Comments', 'Second Comments', 'Third Comments']
}

//Arrays' method
console.log(languages.toString());
languages.pop(); //remove last
languages.push('C#'); //add last
languages.shift(); //remove first
languages.unshift('Python')//add first
languages.splice(2, 0, 'Javascript'); //.splice(what position, how many to remove, what are we adding)
delete languages[2]; //delete element at position 2
console.log(languages.toString());
//combining arrays
const newLang = ['Ruby', 'Swift'];
const finalLang = languages.concat(newLang);
//sorting arrays
finalLang.sort();
console.log(finalLang.toString());