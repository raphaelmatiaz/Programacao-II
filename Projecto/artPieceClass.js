export default class ArtPiece {

    
    view;
    constructor(data) {

        // pegar nos dados json e atribui-los ao constructor de ArtPiece
        this.type = data.type;
        this.title = data.title;
        this.medium = data.medium;
        this.date = data.date;
        this.image = data.image;
        this.audio = data.audio;
        this.artist = data.artist;
        

        // criar img containers e images, e fazer append das imagens nos containers
        this.view = document.createElement("div");
        this.view.className = "art-wrapper";
        const img = document.createElement("img");
        img.src = this.image
        img.className = "artPiece";
        this.view.appendChild(img);

    


        // atribuir evento mouseenter -> mouseout e estilizar em consequência a cada ArtPiece
        this.view.addEventListener('mouseenter', () => {
        // console.log("mouseEnter Working")
        this.view.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.7)";
        this.view.style.border = "2px solid black"

        // selecionar elementos html
        const infoContainer = document.querySelector(".art-info");
        let title = document.querySelector("#art-title");
        let artist = document.querySelector("#art-medium");
        let year = document.querySelector("#year");

        // fazer update desses elementos
        title.innerText = this.title;
        artist.innerText = this.medium;
        year.innerText = this.date;
        })

        this.view.addEventListener('mouseout', () => {
        // console.log("MouseOut Working")
        this.view.style.boxShadow = null;
        this.view.style.border = "0px"
        })


        // (BONUS: Usar o evento onclick para cada obra de arte que mostre os seus dados na consola do browser.)
        this.view.addEventListener('click', () => {
            console.table(data)

        let selectedImg = document.querySelector("#selected-img");
        selectedImg.src = this.image;

        let zoomedImgDiv = document.querySelector("#zoomDrawing");


        let goBackButton = document.querySelector("button");
        selectedImg.src = "";


        })
    }
}
