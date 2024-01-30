import Animal from "./animal.js"
export default class Mammal extends Animal {

    #numLegs;
    constructor(name, numLegs) {
        super(name)

        this.#numLegs = numLegs;
    }

    walk() {
        return this.introduce() + " walking on " + this.#numLegs + " legs";
    }
}