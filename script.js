

let button = document.querySelector("#searchButton")


// const url =``
function addItem(element){
    let ol = document.querySelector(".list");
    let li = document.createElement("li");
    li.setAttribute('id',element.name);
    li.appendChild(document.createTextNode(`${element.name}`));
    ol.appendChild(li);
}

async function getData(event) {
    
    let textInput = document.querySelector("#inputBar").value.toLowerCase();
    event.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    .then( response => {
        return response.json();
    })
    .then(response => {

    })
    .catch(error => {
        console.log("failure", error);
    })
}

button.addEventListener("click", getData); 




