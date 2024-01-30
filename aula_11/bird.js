
import Animal from "./animal.js";
export default class Bird extends Animal {

    #canFly;
    constructor(name, canFly) {
        super(name);

        this.#canFly = canFly;
    }

    fly() {

        return this.#canFly ?
        this.introduce() + " and I can fly!":
        this.introduce() + " and I can't fly!";
    }
}