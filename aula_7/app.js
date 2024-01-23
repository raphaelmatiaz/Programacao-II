import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";
import Boat from "./Boat.js";

let currentVehicle;
//------------------------------------------------------------------------


const loadData = async (url) => {

    const request = await fetch(url)
    const result = await request.json();
    return result;

}

const createLiContent = (item) => {

    const button = document.createElement("button");
    button.innerText = item.brand;

    button.onclick = () => {
        
        if (currentVehicle) {  // se currentVehicle não for undefined ou null:
            currentVehicle.destroy() // destruir a instancia de classe atual
        }

        switch (item.type) {
            case "car":
                currentVehicle = new Car(item);
                break;

            case "motorcycle":
                currentVehicle = new Motorcycle(item);
                break;
        
            case "boat":
                currentVehicle = new Boat(item);
                break;

            default:
                break;
        }
    }

    return button;  
}

const createList = (data) => {                  //iterar pelo jason e por cada elemento criar um elemento de lista. Dentro de cada elemento da lista, criamos um botão dentro desse item, dinamicamente.
const ul = document.querySelector("ul");
data.forEach(item => {
    const li = document.createElement("li")
    li.appendChild(createLiContent(item))
    ul.appendChild(li);
});

}


let isPlaying = null;
let playButton;
const play = () => {
    isPlaying = setInterval(() => {
        console.log("new animation frame")

        
    }, 100);
    playButton.innerText = "Stop";
    playButton.className = "red";
}

const animate = () => {
    console.log("new animation frame");
    isPlaying = requestAnimationFrame(animate);
    
}


const playAnimation = () => {
    isPlaying = requestAnimationFrame(animate)
    console.log(isPlaying)  
    playButton.innerText = "Stop";
    playButton.className = "red";
}

const StopAnimation = () => {
    cancelAnimationFrame(isPlaying);
    isPlaying = null;
    playButton.innerText = "Play"
    playButton.className = "green";

}

const stop = () => {
    clearInterval(isPlaying);
    isPlaying = null;
    playButton.innerText = "Play";
    playButton.className = "green";
}

 window.addEventListener("load", async () => {
    console.log("window loaded")
 
    const data = await loadData("data.json");           //organizar por ordem alfbetica
    data.sort((a, b) => a.type.localeCompare(b.type))


     const ul = createList(data);


    playButton = document.querySelector("#play_pause");
     playButton.onclick = () => {
        console.log(isPlaying)
        isPlaying? stop(): play()
    }
 })


