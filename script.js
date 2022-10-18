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
let counter=0;
let nationalDex = false;
let regionArr = ['Kanto 0 - 151','Johto 152 - 251','Hoenn 252 - 386','Sinnoh 387 - 493','Unova 494 - 649','Kalos 650 -  721','Alola 722 - 809','Galar 810 - 905']
//arrow selector variables
let position = [0,1,2];
let currentPosition = position[0];
//move arrow right  and left


//http://pokeapi.co/api/v2/pokemon/?limit=811

// const url =``
function addItem(element, choice){
    let nationalDexList = document.querySelector(".nationalDexList");
    let li = document.createElement("li");
    li.setAttribute('id',element.name);
    if (choice === 0){
        nationalDexList.appendChild(li);
        li.appendChild(document.createTextNode(`#${counter}:${element.name}`));
    }
    else if (choice === 1)
    {
        
    }
    counter++;
}
const hideNavBar = () => {
    document.querySelector(".searchButton").style.visibility = "hidden";
    document.querySelector(".nationalDex").style.visibility = "hidden";
    document.querySelector("#inputBar").style.visibility = "hidden";
    document.querySelector(".regionalDex").style.visibility = "hidden";
    document.querySelector(".selector").style.visibility = "hidden";
}
async function getData(event) {
    
    let textInput = document.querySelector("#inputBar").value.toLowerCase();
    
    event.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    .then( response => {
        return response.json();
    })
    .then(response => {
        let bottomScreen = document.querySelector(".bottomScreen");
        bottomScreen.innerText = `\n ${response.name} \n id: ${response.id}`;
        document.querySelector("#inputBar").value = "";
    })
    .catch(error => {
        console.log("failure", error);
    })
    
}
async function showNationalDex(event) {
    fetch(`http://pokeapi.co/api/v2/pokemon/?limit=905`)
    .then( response => {
        return response.json();
    })
    .then(response => {
        let nationalDexArr = response.results;
        for (let i=0; i<nationalDexArr.length; i++){
            addItem(nationalDexArr[i], 0);
        }
    })
    .catch(error => {
        console.log("failure", error);
    })
}
const showRegionlDexList = () =>
{
    document.querySelector("#regionalDexList").style.visibility = "visible";
    document.querySelector("#rightViewScreen").style.overflowY = "scroll";
}


rightArrow.addEventListener("click", () => {
    if (currentPosition === position[0]){
        selector.style.transform = "translateX(95px)";
        currentPosition = position[1];
    }
    else if (currentPosition === position[1]){
        selector.style.transform = "translateX(210px)";
        currentPosition = position[2];
    }
    if (currentPosition === position[2]){
        selector.style.transform = "translateX(210px)";
        currentPosition = position[2];
    }
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
enterButton.addEventListener("click", getData); 
selectButton.addEventListener("click",() => {
    if (currentPosition === 1){
        hideNavBar();
        document.querySelector("#rightViewScreen").style.overflowY = "scroll";
        currentPosition = position[0];
        if (nationalDex === false){
        showNationalDex();
        nationalDex=true;
        }
        else if (nationalDex === true)
        {
        document.querySelector(".nationalDexList").style.visibility = "visible";
        } 
        
    }
    else if (currentPosition === 2)
    {
        hideNavBar();
        showRegionlDexList();
    }
});
returnButton.addEventListener("click",() => {
    document.querySelector("#rightViewScreen").style.overflowY = "hidden";
    document.querySelector(".nationalDexList").style.visibility = "hidden";
    document.querySelector("#regionalDexList").style.visibility = "hidden";
    document.querySelector(".searchButton").style.visibility = "visible";
    document.querySelector(".nationalDex").style.visibility = "visible";
    document.querySelector("#inputBar").style.visibility = "visible";
    document.querySelector(".regionalDex").style.visibility = "visible";
    document.querySelector(".selector").style.visibility = "visible";
    
});



