import Drawing from "./drawing.js"
import Composition from "./composition.js"

export default class Gallery {

    artPiecesArray = [];
    view;
    constructor() {
        this.view = document.querySelector("#art-gallery")

    // permitir side scrolling/ navegar galeria <-esqueda direita-> com wheel event listner

    const scrollSpeed = 100;

    this.view.addEventListener("wheel", (event) => {
        const delta = Math.sign(event.deltaY);
        this.view.scrollLeft += delta * scrollSpeed;
        });
    }
    

    addItem(data) {
        let artPiece;

        switch (data.type) {
        
            case "drawing":

                artPiece = new Drawing(data);

                this.artPiecesArray.push(artPiece);

                this.view.appendChild(artPiece.view)

            break;

        case "music":
                artPiece = new Composition(data);

                this.artPiecesArray.push(artPiece);

                this.view.appendChild(artPiece.view)

            break;
       }
    } 


}