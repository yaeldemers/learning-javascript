//Access content using DOM from a webpage
//const todoField = document.getElementById("todo_field");
//console.log(todoField);

//const image = document.getElementsByTagName("img");
//console.log(image);

//const li = document.getElementsByTagName("li");
//console.log(li);

//const button = document.getElementsByClassName("btn");
//console.log(button);

const title = document.querySelector("h1");
const button = document.querySelector(".btn");
const singleLi = document.querySelector("li");
const li = document.querySelectorAll("li");

//needed to complete the app
const todoList = document.querySelector("#todo_list");
const todoField = document.querySelector("#todo_field");
const addTodo = document.querySelector("button");

//manipulating style and attributes via JS
//change title color to red
title.style.color= "#CE4C41" ;

//selecting odd li
const oddLi = document.querySelectorAll("li:nth-child(odd)");
const evenLi = document.querySelectorAll("li:nth-child(even)");
// oddLi.forEach(li=> {
//     li.style.background="black";
//     li.style.color="white";
// });

//getting the attributes of an element
const image = document.querySelector("img");
console.log(image.getAttribute("height"));
image.setAttribute("height", "45")
image.setAttribute("width", "45")

//events (also added to the button)
function displayDate() {
    console.log(Date());
}

function buttonClick(object) {
    object.innerHTML = "Thank you!";
}

function mouseOut(object) {
    object.innerHTML = "Add an element";
}

//event listeners
//button.addEventListener("click", displayDate);
addTodo.addEventListener("click", addNewTodo);

function addNewTodo() {
    const newTodo = document.createElement("li");
    newTodo.textContent = todoField.value;
    todoList.appendChild(newTodo);
    todoField.value="";
}

//important events, just uncomments one of the following lines to see

//click event
//button.addEventListener("click", mouseEvents);

//double click event
//button.addEventListener("dblclick", mouseEvents);

//mouse down event (pressing)
//button.addEventListener("mousedown", mouseEvents);

//mouse up event (releasing)
//button.addEventListener("mouseup", mouseEvents);

//mouse moving
//button.addEventListener("mousemove", mouseEvents);

//mouse over
button.addEventListener("mouseover", mouseEvents);

function mouseEvents(e) {
    console.log(e.type);
}

//keyboard events
// todoField(addEventListener("keydown, keyboardEvents"));
// todoField(addEventListener("keyup, keyboardEvents"));

// function keyboardEvents(e) {
//     console.log(e.type);
// }