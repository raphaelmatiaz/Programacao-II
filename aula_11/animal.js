export default class Animal {


    #name;
    constructor(name) {
        this.#name = name;
    }

    introduce() {
        return "Hello, I'm a " + this.#name;
    }
}