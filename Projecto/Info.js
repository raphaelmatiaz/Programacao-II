export default class Info {

    #title;
    #artist;
    #year
    #callback;
    constructor(callback) {
        this.#callback = callback;
        const infoContainer = document.querySelector(".art-info");
        this.title = document.querySelector("#art-title");
        this.artist = document.querySelector("#art-medium");
        this.year = document.querySelector("#year");
    }

    udpate(data) {
        this.#title.innerText = data.title;
        this.#artist.innerText = data.artist;
        this.#year.innerText = data.year;
    }

}