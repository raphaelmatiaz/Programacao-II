import Car from "./Car.js"
import Motorcycle from "./Motorcycle.js"

const data = {

    cars: [
        {
            brand: "fiat",
            speed: 50,
        },

        {
            brand: "ferrari",
            speed: 100,
        }
    ],


    motorcycles: [
        {

            brand: "ducatti",
            speed: 400,
        },
        {
            brand:"kawazaki",
            speed: 500,
        }


    ],

    
};

// Criar elementos dinamicamente com 'document.createElement("nomedoelementoHTML") // appendChild serve para colocar cenas dentro de outras cenas
const vehicles = [];
window.onload = () => {
    console.log("window loaded");
    const nav = document.querySelector("nav");

    const createUL = (name, data) => {
        const ul = document.createElement("ul");
        const title = document.createElement("li");
        title.innerText = name;
        ul.appendChild(title);
        nav.appendChild(ul);


    data.forEach((element) => {
        const li = document.createElement("li");
        const button = document.createElement("button")
        button.onclick = (event) => {
            switch (name) {
                case "cars":
                    vehicles.push(new Car(element));

                    break;
                case "motorcycles":
                    vehicles.push(new Motorcycle(element));
                    break;

                default:
                    break;
            }
            console.log(vehicles)
        }
        button.innerText = element.brand;
        li.appendChild(button);
        ul.appendChild(li);
        
    });

    nav.appendChild(ul);
};
    





    for (const key in data) {
        createUL(key, data[key]);
    }

}


// const car = new Car();
// const motorcycle = new Motorcycle();


