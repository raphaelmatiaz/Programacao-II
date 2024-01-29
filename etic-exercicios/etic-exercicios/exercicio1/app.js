
window.onload = () => {






class Test {

    #name = "test";
    #age ="10";
    #gender = "male";
    #width;
    #height;
    #background;

    #view;

    constructor() { 

        this.#view = document.createElement("div");
        document.body.appendChild(this.#view);
        

    }

    getName() {

        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getGender() {
        return this.#gender;
    }

    setName(value) {
        this.#name = value;
    }

    setAge(age) {
        this.#age = age;
    }

    setGender(gender) {
        this.#gender = gender;
    }





}

const test = new Test();


const test2 = new Test();
test2.width = 200;
test2.height = 200;
test2.background = "blue"
test2.updateViewStyle();

}


// width height 200 background blue
const buttonCenas = document.createElement(button);
document.body.appendChild(buttonCenas)


const h1 = document.querySelector("h1")
h1.innerText = "app test clicked"




class Cenas {

    #view;

    constructor(callback) {
        this.#view = document.createElement("div");
        this.#view.onclick = () => callback();
        
        document.body.appendChild(this.#view);
    }

    set width(value) {
        this.#view.style.width = value + "px";
    }


    set height(value) {
        this.#view.style.height = value + "px";
    }


    set ackground(value) {
        this.#view.style.backgroundColor = value;
    }
}

const cena = new Cenas(() => {
    console.log("cenas aconteceram")
})