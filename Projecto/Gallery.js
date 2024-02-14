import Drawing from "./drawing.js"
import Composition from "./composition.js"

// (ESPECIFICAÇÃO: Declarações variaveis com 'let' e 'const' para definir nome da galeria e numero máximo obras permitidas)
let GalleyName = "Rafael Matias Art Gallery" 
const MaxArtPieces = 100;                    

export default class Gallery {

    artPiecesArray = [];
    view;
    constructor() {
        this.view = document.querySelector("#art-gallery");

        this.view.onclick = () => {

    }

    // permitir side scrolling/ navegar galeria <-esqueda direita-> com wheel event listner
    const scrollSpeed = 100;

    this.view.addEventListener("wheel", (event) => {
        const delta = Math.sign(event.deltaY);
        this.view.scrollLeft += delta * scrollSpeed;
        });
    }

// (ESPECIFICAÇÃO: Definir funções function ou arrow functions para adicionar, remover as obras de arte da galeria.)
// (ESPECIFICAÇÃO: Utilizar condicionais if, else if, else ou switch para criar os objetos dasrespectivas obras de arte.)

    addItem(data) {
        let artPiece;
        switch (data.type) {
            case "drawing":
                artPiece = new Drawing(data);
                this.artPiecesArray.push(artPiece);
                this.view.appendChild(artPiece.view);
                break;
        case "music":
                artPiece = new Composition(data);
                this.artPiecesArray.push(artPiece);
                this.view.appendChild(artPiece.view);
                break;
        }}


    removeItem(data) {
        const indexToRemove = this.artPiecesArray.findIndex(artPiece => {
            return artPiece.type === data.type && artPiece.id === data.id;
        });
        if (indexToRemove !== -1) {
            const removedArtPiece = this.artPiecesArray.splice(indexToRemove, 1)[0];
            this.view.removeChild(removedArtPiece.view);
        }
    }
}
    