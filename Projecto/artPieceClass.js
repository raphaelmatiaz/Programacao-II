export default class ArtPiece {

    view;
    constructor(data) {

        this.type = data.type;
        this.title = data.title;
        this.medium = data.medium;
        this.date = data.date;
        this.image = data.image;
        this.audio = data.audio;
        this.artist = data.artist;

        this.view = document.createElement("div");
        this.view.className = "art-wrapper";
        const img = document.createElement("img");
        img.src = this.image
        img.className = "artPiece";
        this.view.appendChild(img);


        // selecionar elementos html e dar update on click das informações da obra selecionada

        let artTitle = document.body.querySelector("#art-title");
        let artMedium = document.body.querySelector("#art-medium")
        let year = document.body.querySelector("#year")
        const allElements = document.querySelectorAll('*');
        
        // this.view.addEventListener('click', () => {
        //     artTitle.textContent = this.title;
        //     artMedium.textContent = this.medium;
        //     year.textContent = this.date;

        //     allElements.forEach(element => {
        //         removeAllClass()
        //     })
        //     this.view.className = "selected-art-piece";
        // })

        this.view.addEventListener('mouseenter', () => {
            artTitle.textContent = this.title;
            artMedium.textContent = this.medium;
            year.textContent = this.date;
            this.view.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.7)";
            this.view.style.border = "2px solid black"


        })

        this.view.addEventListener('mouseout', () => {
            this.view.style.boxShadow = null;
            this.view.style.border = "0px"
        })
        

    

    }
}
