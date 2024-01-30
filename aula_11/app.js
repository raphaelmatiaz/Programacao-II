import Bird from "./bird.js";
import Mammal from "./Mammal.js";
import Reptile from "./Reptile.js";
import Zoo from "./Zoo.js";

window.onload = async () => {
    const loadData = async (url) => {
        const request = await fetch(url);
        const result = await request.json();
        return result;
    };

    const data = await loadData("data.json"); // Corrected assignment using await

    const myZoo = new Zoo();

    data.forEach(item => {
        switch (item.type) {
            case "Bird": // Corrected type comparison
                const bird = new Bird(item.name, item.canFly);
                myZoo.addAnimal(bird);
                break;
            case "Mammal":
                const mammal = new Mammal(item.name, item.legs);
                myZoo.addAnimal(mammal);
                break;
            case "Reptile":
                const reptile = new Reptile(item.name, item.canBite);
                myZoo.addAnimal(reptile);
                break;
            default:
                console.log("Unknown type:", item.type);
                break;
        }
    });

    console.log(myZoo);
};










































