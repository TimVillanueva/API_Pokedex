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



enterButton.addEventListener("click", () => 
{alert("working");
})

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




