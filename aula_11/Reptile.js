import Animal from "./animal.js"
export default class Reptile extends Animal {

    #isAgressive
    constructor(name, isAgressive) {
        super(name);

        this.#isAgressive = isAgressive;
    }

    bite() {
        return this.#isAgressive ?
        this.introduce() + " and I'm agressive":
        this.introduce() + " and I'm peaceful";
    }

}