//buttons for left side
let buttonA = document.querySelector(".leftButton");
let padUp = document.querySelector("#verticalTop");
let padDown = document.querySelector("#verticalBottom");
let padLeft = document.querySelector("#horizontalLeft");
let padRight = document.querySelector("#horizontalRight");

//buttons for right side
let selectButton = document.querySelector("#whiteSquare1");
let returnButton = document.querySelector("#whiteSquare2");
let leftArrow = document.querySelector("#blackRectangle1");
let rightArrow = document.querySelector("#blackRectangle2");

let enterButton = document.querySelector("#enterButton");
let grid1 = document.querySelector("#grid1");

//Right Screen Variables
let selector = document.querySelector(".selector");

//Global Variables

//arrow selector variables
let position = [0,1,2];
let currentPosition = position[0];
//move arrow right  and left
rightArrow.addEventListener("click", () => {
    if (currentPosition === position[0]){
        selector.style.transform = "translateX(95px)";
        currentPosition = position[1];
    }
    else if (currentPosition === position[1]){
        selector.style.transform = "translateX(220px)";
        currentPosition = position[2];
    }
    if (currentPosition === position[2]){
        selector.style.transform = "translateX(220px)";
        currentPosition = position[2];
    }
    console.log(currentPosition)
    return currentPosition;
});
leftArrow.addEventListener("click", () => {
    console.log(currentPosition);
    if (currentPosition === position[0]){
        selector.style.transform = "translateX(0px)";
        currentPosition = position[0];
    }
    if (currentPosition === position[1]){
        selector.style.transform = "translateX(0px)";
        currentPosition = position[0];
    }
    if (currentPosition === position[2]){
        selector.style.transform = "translateX(95px)";
        currentPosition = position[1];
    }
    return currentPosition;
});




// const url =``
// function addItem(element){
//     let ol = document.querySelector(".list");
//     let li = document.createElement("li");
//     li.setAttribute('id',element.name);
//     li.appendChild(document.createTextNode(`${element.name}`));
//     ol.appendChild(li);
// }

// async function getData(event) {
    
//     let textInput = document.querySelector("#inputBar").value.toLowerCase();
//     event.preventDefault();

//     fetch(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
//     .then( response => {
//         return response.json();
//     })
//     .then(response => {

//     })
//     .catch(error => {
//         console.log("failure", error);
//     })
// }

// button.addEventListener("click", getData); 




