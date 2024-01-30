export default class Zoo {

    #animals;
    constructor() {
        this.#animals = []
    }

    addAnimal(animal) {
        this.#animals.push(animal);
    }

    showAnimals() {
        this.#animals.forEach(animal => {
            console.log(animal.introduce())
        });
    }
}


